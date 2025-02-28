import LibP2P from 'libp2p'
import { Multiaddr } from 'multiaddr'
import PeerId from 'peer-id'
import TCP from 'libp2p-tcp'
const MPLEX = require('libp2p-mplex')
import { NOISE } from '@chainsafe/libp2p-noise'
import { PeerStore } from 'libp2p-kad-dht'

/**
 * Informs each node about the others existence.
 * @param nodes Hopr nodes
 */
export function connectionHelper(nodes: LibP2P[]) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      nodes[i].peerStore.addressBook.add(nodes[j].peerId, nodes[j].multiaddrs)
      nodes[j].peerStore.addressBook.add(nodes[i].peerId, nodes[i].multiaddrs)
    }
  }
}

export function getAddress(node: LibP2P): Multiaddr {
  let addr = node.multiaddrs[0]
  if (!addr.getPeerId()) {
    addr = addr.encapsulate('/p2p/' + node.peerId.toB58String())
  }
  return addr
}

export type LibP2PMocks = {
  node: LibP2P
  address: Multiaddr
}

export async function generateLibP2PMock(addr = '/ip4/0.0.0.0/tcp/0'): Promise<LibP2PMocks> {
  const node = await LibP2P.create({
    peerId: await PeerId.create({ keyType: 'secp256k1' }),
    addresses: { listen: [addr] },
    modules: {
      transport: [TCP],
      streamMuxer: [MPLEX],
      connEncryption: [NOISE]
    }
  })

  await node.start()

  return {
    node,
    address: getAddress(node)
  }
}

export function fakePeerId(i: number | string): PeerId {
  return {
    id: i as unknown as Uint8Array,
    equals: (x: PeerId) => (x.id as unknown as number) == i,
    toB58String: () => i
  } as PeerId
}

export function fakeAddress(id: PeerId): Multiaddr {
  return {
    getPeerId: () => id.toB58String()
  } as Multiaddr
}

export function showBackoff(networkPeers: PeerStore): number {
  return parseFloat(networkPeers.debugLog().match(/(?<=\(backoff\s)(.*)(?=\,)/g))
}
