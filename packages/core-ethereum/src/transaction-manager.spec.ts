import { expect } from 'chai'
import { BigNumber } from 'ethers'
import TransactionManager, { TransactionPayload } from './transaction-manager'

const TX: [string, { nonce: number; gasPrice: number }] = ['0', { nonce: 0, gasPrice: 100 }]
const PAYLOAD: TransactionPayload = { to: '0x0', data: '0x123', value: BigNumber.from('1') }

describe('transaction-manager', function () {
  let transactionManager: TransactionManager

  beforeEach(function () {
    transactionManager = new TransactionManager()
  })

  it('should add transaction to pending', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)

    expect(transactionManager.pending.size).to.equal(1)
    expect(transactionManager.pending.get(TX[0]).nonce).to.equal(TX[1].nonce)
    expect(transactionManager.confirmed.size).to.equal(0)
  })

  it('should move transaction from pending to mined', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)
    transactionManager.moveFromPendingToMined(TX[0])

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(1)
    expect(transactionManager.confirmed.size).to.equal(0)
    expect(transactionManager.mined.get(TX[0]).nonce).to.equal(TX[1].nonce)
  })

  it('should move transaction from mined to confirmed', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)
    transactionManager.moveFromPendingToMined(TX[0])
    transactionManager.moveFromMinedToConfirmed(TX[0])

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(0)
    expect(transactionManager.confirmed.size).to.equal(1)
    expect(transactionManager.confirmed.get(TX[0]).nonce).to.equal(TX[1].nonce)
  })

  it('should remove transaction from pending', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)
    transactionManager.remove(TX[0])

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(0)
    expect(transactionManager.confirmed.size).to.equal(0)
  })

  it('should remove transaction from mined', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)
    transactionManager.moveFromPendingToMined(TX[0])
    transactionManager.remove(TX[0])

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(0)
    expect(transactionManager.confirmed.size).to.equal(0)
  })

  it('should remove transaction from confirmed', function () {
    transactionManager.addToPending(TX[0], TX[1], PAYLOAD)
    transactionManager.moveFromPendingToMined(TX[0])
    transactionManager.moveFromMinedToConfirmed(TX[0])
    transactionManager.remove(TX[0])

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(0)
    expect(transactionManager.confirmed.size).to.equal(0)
  })

  it('should remove confirmed nonces with nonce 0 and 1', function () {
    const txs: Array<typeof TX> = []

    // generate mock txs
    for (let i = 0; i < 7; i++) {
      txs.push([String(i), { nonce: i, gasPrice: 1 }])
    }

    // add them to confirmed
    for (const [hash, tx] of txs) {
      transactionManager.addToPending(hash, tx, PAYLOAD)
      transactionManager.moveFromPendingToMined(hash)
      transactionManager.moveFromMinedToConfirmed(hash)
    }

    transactionManager.prune()

    expect(transactionManager.pending.size).to.equal(0)
    expect(transactionManager.mined.size).to.equal(0)
    expect(transactionManager.confirmed.size).to.equal(5)
    expect(Array.from(transactionManager.confirmed.keys())).to.not.include(txs[0][0])
    expect(Array.from(transactionManager.confirmed.keys())).to.not.include(txs[1][0])
  })
})
