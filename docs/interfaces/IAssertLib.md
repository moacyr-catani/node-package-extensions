[**extensions-utility**](../README.md)

***

[extensions-utility](../globals.md) / IAssertLib

# Interface: IAssertLib

Defined in: [interfaces/assert.ts:1](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L1)

## Methods

### date()

#### Call Signature

> **date**(`value`): `null` \| `Date`

Defined in: [interfaces/assert.ts:9](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L9)

Asserts the provided value is (or represents) a valid datetime.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `Date` | Value to be checked. If value is a string, it will be parsed for ISO format |

##### Returns

`null` \| `Date`

A datetime from the first param (if it is valid) or null, otherwise

#### Call Signature

> **date**(`value`, `parseFormat`): `null` \| `Date`

Defined in: [interfaces/assert.ts:19](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L19)

Asserts the provided value is (or represents) a valid datetime.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked. |
| `parseFormat` | `string` | - |

##### Returns

`null` \| `Date`

A datetime from the first param (if it is valid) or null, otherwise

#### Call Signature

> **date**(`value`, `alternativeValue`): `Date`

Defined in: [interfaces/assert.ts:29](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L29)

Asserts the provided value is (or represents) a valid datetime.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `Date` | Value to be checked. If value is a string, it will be parsed for ISO format |
| `alternativeValue` | `Date` | Value to be returned case the provided param is not a valid datetime |

##### Returns

`Date`

A datetime from the first param (if it is valid) or alternativeValue, otherwise

#### Call Signature

> **date**(`value`, `parseFormat`, `alternativeValue`): `Date`

Defined in: [interfaces/assert.ts:40](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L40)

Asserts the provided value is (or represents) a valid datetime.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked. |
| `parseFormat` | `string` | - |
| `alternativeValue` | `Date` | Value to be returned case the provided param is not a valid datetime |

##### Returns

`Date`

A datetime from the first param (if it is valid) or null, otherwise

***

### decimal()

#### Call Signature

> **decimal**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:52](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L52)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

A decimal number or null (if provided value is not a valid decimal)

#### Call Signature

> **decimal**(`value`, `decimalSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:61](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L61)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `decimalSeparator` | `string` | Character used as decimal separator; defaults to '.' |

##### Returns

`null` \| `number`

A decimal number or null (if provided value is not a valid decimal)

#### Call Signature

> **decimal**(`value`, `decimalSeparator`, `thousandSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:72](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L72)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `decimalSeparator` | `string` | Character used as decimal separator; defaults to '.' |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `number`

A decimal number or null (if provided value is not a valid decimal)

#### Call Signature

> **decimal**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:83](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L83)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid decimal |

##### Returns

`number`

A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise

#### Call Signature

> **decimal**(`value`, `decimalSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:94](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L94)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `decimalSeparator` | `string` | Character used as decimal separator; defaults to '.' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid decimal |

##### Returns

`number`

A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise

#### Call Signature

> **decimal**(`value`, `decimalSeparator`, `thousandSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:106](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L106)

Asserts the provided value is (or represents) a valid decimal.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `decimalSeparator` | `string` | Character used as decimal separator; defaults to '.' |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid decimal |

##### Returns

`number`

A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise

***

### int16()

#### Call Signature

> **int16**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:140](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L140)

Asserts the provided value is (or represents) a valid 16-bit integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

A 16-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int16**(`value`, `thousandSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:149](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L149)

Asserts the provided value is (or represents) a valid 16-bit integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `number`

A 16-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int16**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:159](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L159)

Asserts the provided value is (or represents) a valid 16 bits integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

An 16 bit integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **int16**(`value`, `thousandSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:170](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L170)

Asserts the provided value is (or represents) a valid 16 bits integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

An 16 bit integer from de first param (if valid), or alternativeValue, otherwise

***

### int32()

#### Call Signature

> **int32**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:185](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L185)

Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

A 32-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int32**(`value`, `thousandSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:194](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L194)

Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `number`

A 32-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int32**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:204](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L204)

Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`number`

A 32-bit integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **int32**(`value`, `thousandSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:215](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L215)

Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`number`

A 32-bit integer from de first param (if valid), or alternativeValue, otherwise

***

### int64()

#### Call Signature

> **int64**(`value`): `null` \| `bigint`

Defined in: [interfaces/assert.ts:230](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L230)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` | Value to be checked |

##### Returns

`null` \| `bigint`

A 64-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int64**(`value`, `thousandSeparator`): `null` \| `bigint`

Defined in: [interfaces/assert.ts:239](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L239)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `bigint`

A 64-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int64**(`value`, `alternativeValue`): `bigint`

Defined in: [interfaces/assert.ts:249](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L249)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` | Value to be checked |
| `alternativeValue` | `bigint` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`bigint`

A 64-bit integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **int64**(`value`, `thousandSeparator`, `alternativeValue`): `bigint`

Defined in: [interfaces/assert.ts:260](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L260)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `bigint` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`bigint`

A 64-bit integer from de first param (if valid), or alternativeValue, otherwise

***

### int8()

#### Call Signature

> **int8**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:119](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L119)

Asserts the provided value is (or represents) a valid 8-bit integer; it i.e. it is in the range -128 (-2⁷) and 127 (2⁷ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

An 8-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **int8**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:128](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L128)

Asserts the provided value is (or represents) a valid 8-bit integer; i.e. it is in the range -128 (-2⁷) and 127 (2⁷ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 8-bit integer |

##### Returns

`number`

An 8-bit integer from de first param (if valid), or alternativeValue, otherwise

***

### uint16()

#### Call Signature

> **uint16**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:297](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L297)

Asserts the provided value is (or represents) a valid 16-bit unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

A 16-bit unsigned integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint16**(`value`, `thousandSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:306](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L306)

Asserts the provided value is (or represents) a valid 16-bit unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `number`

A 16-bit unsigned integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint16**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:316](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L316)

Asserts the provided value is (or represents) a valid 16 unsigned bits integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

A 16-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **uint16**(`value`, `thousandSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:327](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L327)

Asserts the provided value is (or represents) a valid 16 bits unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

A 16-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise

***

### uint32()

#### Call Signature

> **uint32**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:343](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L343)

Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

A 32-bit unsigned integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint32**(`value`, `thousandSeparator`): `null` \| `number`

Defined in: [interfaces/assert.ts:352](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L352)

Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `number`

A 32-bit unsigned integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint32**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:362](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L362)

Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

A 32-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **uint32**(`value`, `thousandSeparator`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:373](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L373)

Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 16-bit integer |

##### Returns

`number`

A 32-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise

***

### uint64()

#### Call Signature

> **uint64**(`value`): `null` \| `bigint`

Defined in: [interfaces/assert.ts:386](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L386)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` | Value to be checked |

##### Returns

`null` \| `bigint`

A 64-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint64**(`value`, `thousandSeparator`): `null` \| `bigint`

Defined in: [interfaces/assert.ts:395](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L395)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |

##### Returns

`null` \| `bigint`

A 64-bit integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint64**(`value`, `alternativeValue`): `bigint`

Defined in: [interfaces/assert.ts:405](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L405)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` | Value to be checked |
| `alternativeValue` | `bigint` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`bigint`

A 64-bit integer from de first param (if valid), or alternativeValue, otherwise

#### Call Signature

> **uint64**(`value`, `thousandSeparator`, `alternativeValue`): `bigint`

Defined in: [interfaces/assert.ts:416](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L416)

Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Value to be checked |
| `thousandSeparator` | `string` | Character used as thousand separator; defaults to ',' |
| `alternativeValue` | `bigint` | Value to be returned case the provided param is not a valid 32-bit integer |

##### Returns

`bigint`

A 64-bit integer from de first param (if valid), or alternativeValue, otherwise

***

### uint8()

#### Call Signature

> **uint8**(`value`): `null` \| `number`

Defined in: [interfaces/assert.ts:274](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L274)

Asserts the provided value is (or represents) a valid 8-bit unsigned integer; it i.e. it is in the range 0 and 255 (2⁸ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |

##### Returns

`null` \| `number`

An 8-bit unsigned integer from de first param (if valid), or null, otherwise

#### Call Signature

> **uint8**(`value`, `alternativeValue`): `number`

Defined in: [interfaces/assert.ts:283](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/assert.ts#L283)

Asserts the provided value is (or represents) a valid 8-bit unsigned integer; it i.e. it is in the range 0 and 255 (2⁸ - 1).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | Value to be checked |
| `alternativeValue` | `number` | Value to be returned case the provided param is not a valid 8-bit integer |

##### Returns

`number`

An 8-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
