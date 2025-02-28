[@hoprnet/hopr-utils](../README.md) / [Exports](../modules.md) / Signature

# Class: Signature

## Table of contents

### Constructors

- [constructor](Signature.md#constructor)

### Properties

- [recovery](Signature.md#recovery)
- [signature](Signature.md#signature)
- [SIZE](Signature.md#size)

### Methods

- [serialize](Signature.md#serialize)
- [serializeEthereum](Signature.md#serializeethereum)
- [toHex](Signature.md#tohex)
- [verify](Signature.md#verify)
- [create](Signature.md#create)
- [deserialize](Signature.md#deserialize)
- [deserializeEthereum](Signature.md#deserializeethereum)

## Constructors

### constructor

• **new Signature**(`signature`, `recovery`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `Uint8Array` |
| `recovery` | `number` |

#### Defined in

[types/primitives.ts:195](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L195)

## Properties

### recovery

• `Readonly` **recovery**: `number`

___

### signature

• `Readonly` **signature**: `Uint8Array`

___

### SIZE

▪ `Static` **SIZE**: `number`

#### Defined in

[types/primitives.ts:261](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L261)

## Methods

### serialize

▸ **serialize**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[types/primitives.ts:235](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L235)

___

### serializeEthereum

▸ **serializeEthereum**(): `Uint8Array`

Replaces recovery value by Ethereum-specific values 27/28

#### Returns

`Uint8Array`

serialized signature to use within Ethereum

#### Defined in

[types/primitives.ts:246](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L246)

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

[types/primitives.ts:257](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L257)

___

### verify

▸ **verify**(`msg`, `pubKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Uint8Array` |
| `pubKey` | [`PublicKey`](PublicKey.md) |

#### Returns

`boolean`

#### Defined in

[types/primitives.ts:253](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L253)

___

### create

▸ `Static` **create**(`msg`, `privKey`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Uint8Array` |
| `privKey` | `Uint8Array` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[types/primitives.ts:230](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L230)

___

### deserialize

▸ `Static` **deserialize**(`arr`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `Uint8Array` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[types/primitives.ts:201](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L201)

___

### deserializeEthereum

▸ `Static` **deserializeEthereum**(`arr`): [`Signature`](Signature.md)

Deserializes Ethereum-specific signature with
non-standard recovery values 27 and 28

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `Uint8Array` | serialized Ethereum signature |

#### Returns

[`Signature`](Signature.md)

deserialized Ethereum signature

#### Defined in

[types/primitives.ts:219](https://github.com/hoprnet/hoprnet/blob/master/packages/utils/src/types/primitives.ts#L219)
