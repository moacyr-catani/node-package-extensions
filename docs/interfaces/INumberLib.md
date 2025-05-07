[**extensions-utility**](../README.md)

***

[extensions-utility](../globals.md) / INumberLib

# Interface: INumberLib

Defined in: [interfaces/number.ts:5](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L5)

## Methods

### changeIntegerRepresentation()

> **changeIntegerRepresentation**(`value`, `toRepresentation`, `fromRepresentation?`): `string` \| `number` \| `bigint` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [interfaces/number.ts:7](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `Buffer`\<`ArrayBufferLike`\> |
| `toRepresentation` | `IntegerRepresentations` |
| `fromRepresentation?` | `IntegerRepresentations` |

#### Returns

`string` \| `number` \| `bigint` \| `Buffer`\<`ArrayBufferLike`\>

***

### createRandomInt()

> **createRandomInt**(`sizeInBytes`, `returnIn`): `string` \| `number` \| `bigint` \| `ArrayBuffer`

Defined in: [interfaces/number.ts:22](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L22)

Creates a random integer with size from 1 to 128 bytes (extremelly huge number).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sizeInBytes` | `number` | Size of the random integer in bytes (from 1 to 128) |
| `returnIn` | `IntegerRepresentations` | The format to return the created integer |

#### Returns

`string` \| `number` \| `bigint` \| `ArrayBuffer`

#### Example

```ts
// Create a 64 bits (8 bytes) random integer and return it as BigInt
const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
```

***

### isInt()

> **isInt**(`value`): `boolean`

Defined in: [interfaces/number.ts:27](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `bigint` |

#### Returns

`boolean`

***

### isInt16()

> **isInt16**(`value`): `boolean`

Defined in: [interfaces/number.ts:41](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L41)

Checks if the provided parameter is a valid 16 bits signed integer; i.e. is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isInt32()

> **isInt32**(`value`): `boolean`

Defined in: [interfaces/number.ts:48](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L48)

Checks if the provided parameter is a valid 32 bits signed integer; i.e. is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isInt64()

> **isInt64**(`value`): `boolean`

Defined in: [interfaces/number.ts:55](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L55)

Checks if the provided parameter is a valid 64 bits signed integer; i.e. is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isInt8()

> **isInt8**(`value`): `boolean`

Defined in: [interfaces/number.ts:34](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L34)

Checks if the provided parameter is a valid 8 bits signed integer; i.e. is in the range -128 (-2⁷) and 127 (2⁷ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isUInt16()

> **isUInt16**(`value`): `boolean`

Defined in: [interfaces/number.ts:69](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L69)

Checks if the provided parameter is a valid 16 bits unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isUInt32()

> **isUInt32**(`value`): `boolean`

Defined in: [interfaces/number.ts:76](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L76)

Checks if the provided parameter is a valid 32 bits unsigned integer; i.e. is in the range 0 and 4,294,967,295 (2³² - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isUInt64()

> **isUInt64**(`value`): `boolean`

Defined in: [interfaces/number.ts:83](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L83)

Checks if the provided parameter is a valid 32 bits unsigned integer; i.e. is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### isUInt8()

> **isUInt8**(`value`): `boolean`

Defined in: [interfaces/number.ts:62](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L62)

Checks if the provided parameter is a valid 8 bits unsigned integer; i.e. is in the range 0 and 255 (2⁸ - 1).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` \| `bigint` | Value to be checked. |

#### Returns

`boolean`

***

### toBigInt()

> **toBigInt**(`p_Value`): `undefined` \| `bigint`

Defined in: [interfaces/number.ts:86](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L86)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `p_Value` | `number` \| `bigint` |

#### Returns

`undefined` \| `bigint`

***

### toDecimal()

> **toDecimal**(`value`, `decimalPlaces`): `undefined` \| `number`

Defined in: [interfaces/number.ts:89](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L89)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `decimalPlaces` | `DecimalPlaces` |

#### Returns

`undefined` \| `number`

***

### toDecimalString()

#### Call Signature

> **toDecimalString**(`value`): `undefined` \| `string`

Defined in: [interfaces/number.ts:93](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L93)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`undefined` \| `string`

#### Call Signature

> **toDecimalString**(`value`, `decimalPlaces`): `undefined` \| `string`

Defined in: [interfaces/number.ts:95](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L95)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `decimalPlaces` | `DecimalPlaces` |

##### Returns

`undefined` \| `string`

#### Call Signature

> **toDecimalString**(`value`, `decimalPlaces`, `decimalSeparator`): `undefined` \| `string`

Defined in: [interfaces/number.ts:98](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L98)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `decimalPlaces` | `DecimalPlaces` |
| `decimalSeparator` | `string` |

##### Returns

`undefined` \| `string`

#### Call Signature

> **toDecimalString**(`value`, `decimalPlaces`, `decimalSeparator`, `thousandSeparator`): `undefined` \| `string`

Defined in: [interfaces/number.ts:102](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L102)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `decimalPlaces` | `DecimalPlaces` |
| `decimalSeparator` | `string` |
| `thousandSeparator` | `string` |

##### Returns

`undefined` \| `string`

***

### toInt()

> **toInt**(`value`): `undefined` \| `number`

Defined in: [interfaces/number.ts:108](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`undefined` \| `number`

***

### toIntString()

#### Call Signature

> **toIntString**(`value`): `undefined` \| `string`

Defined in: [interfaces/number.ts:112](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L112)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`undefined` \| `string`

#### Call Signature

> **toIntString**(`value`, `thousandSeparator`): `undefined` \| `string`

Defined in: [interfaces/number.ts:114](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/number.ts#L114)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `thousandSeparator` | `string` |

##### Returns

`undefined` \| `string`
