[@hoprnet/hopr-ethereum](../README.md) / [Exports](../modules.md) / IERC777Recipient

# Class: IERC777Recipient

## Hierarchy

- `BaseContract`

  ↳ **`IERC777Recipient`**

## Table of contents

### Constructors

- [constructor](IERC777Recipient.md#constructor)

### Properties

- [\_deployedPromise](IERC777Recipient.md#_deployedpromise)
- [\_runningEvents](IERC777Recipient.md#_runningevents)
- [\_wrappedEmits](IERC777Recipient.md#_wrappedemits)
- [address](IERC777Recipient.md#address)
- [callStatic](IERC777Recipient.md#callstatic)
- [deployTransaction](IERC777Recipient.md#deploytransaction)
- [estimateGas](IERC777Recipient.md#estimategas)
- [filters](IERC777Recipient.md#filters)
- [functions](IERC777Recipient.md#functions)
- [interface](IERC777Recipient.md#interface)
- [populateTransaction](IERC777Recipient.md#populatetransaction)
- [provider](IERC777Recipient.md#provider)
- [resolvedAddress](IERC777Recipient.md#resolvedaddress)
- [signer](IERC777Recipient.md#signer)

### Methods

- [\_checkRunningEvents](IERC777Recipient.md#_checkrunningevents)
- [\_deployed](IERC777Recipient.md#_deployed)
- [\_wrapEvent](IERC777Recipient.md#_wrapevent)
- [attach](IERC777Recipient.md#attach)
- [connect](IERC777Recipient.md#connect)
- [deployed](IERC777Recipient.md#deployed)
- [emit](IERC777Recipient.md#emit)
- [fallback](IERC777Recipient.md#fallback)
- [listenerCount](IERC777Recipient.md#listenercount)
- [listeners](IERC777Recipient.md#listeners)
- [off](IERC777Recipient.md#off)
- [on](IERC777Recipient.md#on)
- [once](IERC777Recipient.md#once)
- [queryFilter](IERC777Recipient.md#queryfilter)
- [removeAllListeners](IERC777Recipient.md#removealllisteners)
- [removeListener](IERC777Recipient.md#removelistener)
- [tokensReceived](IERC777Recipient.md#tokensreceived)
- [getContractAddress](IERC777Recipient.md#getcontractaddress)
- [getInterface](IERC777Recipient.md#getinterface)
- [isIndexed](IERC777Recipient.md#isindexed)

## Constructors

### constructor

• **new IERC777Recipient**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | `ContractInterface` |
| `signerOrProvider?` | `Signer` \| `Provider` |

#### Inherited from

BaseContract.constructor

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:105

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tokensReceived` | (`operator`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `userData`: `BytesLike`, `operatorData`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:105

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tokensReceived` | (`operator`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `userData`: `BytesLike`, `operatorData`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:119

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:117

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tokensReceived` | (`operator`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `userData`: `BytesLike`, `operatorData`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:83

___

### interface

• **interface**: `IERC777RecipientInterface`

#### Overrides

BaseContract.interface

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:81

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tokensReceived` | (`operator`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `userData`: `BytesLike`, `operatorData`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:131

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### attach

▸ **attach**(`addressOrName`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.attach

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:42

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.connect

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:41

___

### deployed

▸ **deployed**(): `Promise`<[`IERC777Recipient`](IERC777Recipient.md)\>

#### Returns

`Promise`<[`IERC777Recipient`](IERC777Recipient.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:43

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): `TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

`TypedListener`<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:45

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:68

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.off

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:48

▸ **off**(`eventName`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.off

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:69

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.on

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:52

▸ **on**(`eventName`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.on

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:70

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.once

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:56

▸ **once**(`eventName`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.once

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:71

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`TypedEvent`](../interfaces/TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<[`TypedEvent`](../interfaces/TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:75

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC777Recipient`](IERC777Recipient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:64

▸ **removeAllListeners**(`eventName?`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:73

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | `TypedListener`<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.removeListener

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:60

▸ **removeListener**(`eventName`, `listener`): [`IERC777Recipient`](IERC777Recipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | `Listener` |

#### Returns

[`IERC777Recipient`](IERC777Recipient.md)

#### Overrides

BaseContract.removeListener

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:72

___

### tokensReceived

▸ **tokensReceived**(`operator`, `from`, `to`, `amount`, `userData`, `operatorData`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `userData` | `BytesLike` |
| `operatorData` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

packages/ethereum/types/IERC777Recipient.d.ts:95

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | `BigNumberish` |

#### Returns

`string`

#### Inherited from

BaseContract.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:106

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

BaseContract.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:110

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

BaseContract.isIndexed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116
