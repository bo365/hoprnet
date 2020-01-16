import { TypeClasses } from './types'

export interface ChannelClass {
  readonly channelId: Promise<TypeClasses.Hash>

  readonly settlementWindow: Promise<TypeClasses.Moment>

  readonly state: Promise<TypeClasses.Channel>

  readonly balance_a: Promise<TypeClasses.Balance>

  readonly balance: Promise<TypeClasses.Balance>

  readonly currentBalance: Promise<TypeClasses.Balance>

  readonly currentBalanceOfCounterparty: Promise<TypeClasses.Balance>

  createTicket(secretKey: Uint8Array, amount: TypeClasses.Balance, challenge: TypeClasses.Hash, winProb: TypeClasses.Hash): Promise<TypeClasses.SignedTicket>

  verifyTicket(signedTicket: TypeClasses.SignedTicket): Promise<boolean>

  initiateSettlement(): Promise<void>

  submitTicket(signedTicket: TypeClasses.SignedTicket): Promise<void>
}

export default interface Channel<ConcreteChannel extends ChannelClass> {
  fromDatabase(props: any): Promise<ConcreteChannel>

  open(amount: TypeClasses.Balance, signature: Promise<Uint8Array>, ...props: any[]): Promise<ConcreteChannel>

  getAllChannels<T, R>(onData: (channelId: TypeClasses.Hash, state: TypeClasses.State, ...props: any[]) => T, onEnd: (promises: Promise<T>[]) => R): Promise<R>

  closeChannels(...props: any[]): Promise<TypeClasses.Balance>
}
