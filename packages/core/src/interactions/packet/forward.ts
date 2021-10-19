import { PROTOCOL_STRING } from '../../constants'
import { Packet } from '../../messages'
import type HoprCoreEthereum from '@hoprnet/hopr-core-ethereum'
import type PeerId from 'peer-id'
import { durations, pubKeyToPeerId, HoprDB } from '@hoprnet/hopr-utils'
import { Mixer } from '../../mixer'
import { sendAcknowledgement } from './acknowledgement'
import { debug } from '@hoprnet/hopr-utils'

const log = debug('hopr-core:packet:forward')

const FORWARD_TIMEOUT = durations.seconds(6)

export class PacketForwardInteraction {
  private mixer: Mixer

  constructor(
    private subscribe: any,
    private sendMessage: any,
    private privKey: PeerId,
    private chain: HoprCoreEthereum,
    private emitMessage: (msg: Uint8Array) => void,
    private db: HoprDB
  ) {
    this.mixer = new Mixer(this.handleMixedPacket.bind(this))
    this.subscribe(PROTOCOL_STRING, this.handlePacket.bind(this))
  }

  async interact(counterparty: PeerId, packet: Packet): Promise<void> {
    await this.sendMessage(counterparty, PROTOCOL_STRING, packet.serialize(), {
      timeout: FORWARD_TIMEOUT
    })
  }

  async handlePacket(msg: Uint8Array, remotePeer: PeerId) {
    const packet = Packet.deserialize(msg, this.privKey, remotePeer)

    this.mixer.push(packet)
  }

  async handleMixedPacket(packet: Packet): Promise<void> {
    await packet.checkPacketTag(this.db)

    if (packet.isReceiver) {
      this.emitMessage(packet.plaintext)
    } else {
      try {
        await packet.validateUnacknowledgedTicket(this.db, this.chain, this.privKey)
      } catch (e) {
        log('error while validating unacknowledged ticket, packet is dropped', e)
      }

      await packet.storeUnacknowledgedTicket(this.db)

      try {
        await packet.forwardTransform(this.privKey, this.chain)
        await this.interact(pubKeyToPeerId(packet.nextHop), packet)
      } catch (e) {
        // Errors include:
        // - not knowing about the channel in our db, because the
        //   indexer is not caught up yet.
        log('error while transforming packet, packet is dropped', e)
      }
    }

    sendAcknowledgement(packet, packet.previousHop.toPeerId(), this.sendMessage, this.privKey)
  }
}
