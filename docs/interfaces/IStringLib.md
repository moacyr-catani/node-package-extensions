[**extensions-utility**](../README.md)

***

[extensions-utility](../globals.md) / IStringLib

# Interface: IStringLib

Defined in: [interfaces/string.ts:5](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L5)

## Methods

### extractBetween()

> **extractBetween**(`value`, `start?`, `end?`, `words?`): `StringExtractionResult`

Defined in: [interfaces/string.ts:21](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L21)

Extracts string among specific substrings

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `start?` | `string` \| `string`[] | String or strings (array) that are just before the text you are looking for |
| `end?` | `string` \| `string`[] | String or strings (array) that are just after the text you are looking for |
| `words?` | `boolean` | If true, indicate the text you are looking for is surrounded by 'non word' characters, i.e.: spaces, tabs, new lines, ... |

#### Returns

`StringExtractionResult`

#### Example

```ts
const procedure = 
`CREATE PROCEDURE sp_Test
AS
SELECT * FROM [TABLE]`

const procName  = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
const statement = procedure.$_extractBetween("AS", "", true).value;
```

***

### fromBase64Url()

> **fromBase64Url**(`value`): `string`

Defined in: [interfaces/string.ts:32](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L32)

Decodes Base64Url value into string

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

***

### isInt()

#### Call Signature

> **isInt**(`value`): `boolean`

Defined in: [interfaces/string.ts:40](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L40)

Checks if a string represents a valid integer value in decimal format (using numerals from 0 to 9)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`boolean`

#### Call Signature

> **isInt**(`value`, `thousandSeparator`): `boolean`

Defined in: [interfaces/string.ts:45](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L45)

Checks if a string represents a valid integer in decimal format (using numerals from 0 to 9)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `thousandSeparator` | `string` | Character used to separate thousands groups |

##### Returns

`boolean`

***

### isNumber()

#### Call Signature

> **isNumber**(`value`): `boolean`

Defined in: [interfaces/string.ts:54](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L54)

Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`boolean`

#### Call Signature

> **isNumber**(`value`, `thousandSeparator`, `decimalSeparator`): `boolean`

Defined in: [interfaces/string.ts:60](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L60)

Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `thousandSeparator` | `string` | Character used to separate thousands groups |
| `decimalSeparator` | `string` | Character used to separate decimal part |

##### Returns

`boolean`

***

### removeSequentialLatinLetters()

> **removeSequentialLatinLetters**(`value`): `string`

Defined in: [interfaces/string.ts:97](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L97)

Remove sequential latin characters

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Example

```ts
"immediately " will be replaced by "imediately "
```

***

### replace()

#### Call Signature

> **replace**(`value`, `search`, `newValue`, `caseInsensitive?`): `string`

Defined in: [interfaces/string.ts:74](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L74)

Replaces a substring for a new value.
All occurrences of the searched string will be replaced

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `search` | `string` | String to be searched and replaced |
| `newValue` | `string` | New string |
| `caseInsensitive?` | `boolean` | If true, casing of the searched string will be ignored |

##### Returns

`string`

#### Call Signature

> **replace**(`value`, `search`, `newValue`, `caseInsensitive?`): `string`

Defined in: [interfaces/string.ts:85](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L85)

Replaces several substrings for a new value.
All occurrences of the searched string will be replaced

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `search` | `string`[] | Array with strings to be searched and replaced |
| `newValue` | `string` | New string |
| `caseInsensitive?` | `boolean` | If true, casing of the searched string will be ignored |

##### Returns

`string`

***

### toBase64Url()

> **toBase64Url**(`value`): `string`

Defined in: [interfaces/string.ts:105](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L105)

Encodes string into Base64Url value

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

***

### toBasicLatinLetters()

> **toBasicLatinLetters**(`value`): `string`

Defined in: [interfaces/string.ts:114](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L114)

Keeps only basic latin letter

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Example

```ts
"á ô ç ñ" will be replaced by "a o c n"
```

***

### toDate()

> **toDate**(`value`, `parseFormat`): `undefined` \| `Date`

Defined in: [interfaces/string.ts:123](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L123)

Returns a date from a string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `parseFormat` | `string` | String representing how date is written in string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn |

#### Returns

`undefined` \| `Date`

***

### toDateString()

> **toDateString**(`value`, `parseFormat`, `resultFormat`): `undefined` \| `string`

Defined in: [interfaces/string.ts:134](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L134)

Returns a string representing a parsed datetime value from another string in provided format

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `parseFormat` | `string` | - |
| `resultFormat` | `string` | Representation of how datetime value must be written in result string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn |

#### Returns

`undefined` \| `string`

***

### toDecimal()

#### Call Signature

> **toDecimal**(`value`): `undefined` \| `number`

Defined in: [interfaces/string.ts:144](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L144)

Returns a decimal number from a string

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`undefined` \| `number`

#### Call Signature

> **toDecimal**(`value`, `decimalSeparator`): `undefined` \| `number`

Defined in: [interfaces/string.ts:149](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L149)

Returns a decimal number from a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `decimalSeparator` | `string` | Character used to separate decimal part |

##### Returns

`undefined` \| `number`

#### Call Signature

> **toDecimal**(`value`, `decimalSeparator`, `thousandSeparator`): `undefined` \| `number`

Defined in: [interfaces/string.ts:156](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L156)

Returns a decimal number from a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `decimalSeparator` | `string` | Character used to separate decimal part |
| `thousandSeparator` | `string` | Character used to separate thousands groups |

##### Returns

`undefined` \| `number`

***

### toInt()

#### Call Signature

> **toInt**(`value`): `undefined` \| `number`

Defined in: [interfaces/string.ts:166](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L166)

Returns an integer number from a string

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`undefined` \| `number`

#### Call Signature

> **toInt**(`value`, `thousandSeparator`): `undefined` \| `number`

Defined in: [interfaces/string.ts:171](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L171)

Returns an integer number from a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `thousandSeparator` | `string` | Character used to separate thousands groups |

##### Returns

`undefined` \| `number`

***

### trim()

#### Call Signature

> **trim**(`value`, `entries`): `string`

Defined in: [interfaces/string.ts:181](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L181)

Removes specific string or strings (array) from the beginning and the end of a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |

##### Returns

`string`

#### Call Signature

> **trim**(`value`, `entries`, `caseSensitive?`): `string`

Defined in: [interfaces/string.ts:188](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L188)

Removes specific string or strings (array) from the beginning and the end of a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |
| `caseSensitive?` | `boolean` | True indicates that the search should respect entries casing |

##### Returns

`string`

***

### trimEnd()

#### Call Signature

> **trimEnd**(`value`, `entries`): `string`

Defined in: [interfaces/string.ts:199](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L199)

Removes specific string or strings (array) from the end a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |

##### Returns

`string`

#### Call Signature

> **trimEnd**(`value`, `entries`, `caseSensitive?`): `string`

Defined in: [interfaces/string.ts:206](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L206)

Removes specific string or strings (array) from the end a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |
| `caseSensitive?` | `boolean` | True indicates that the search should respect entries casing |

##### Returns

`string`

***

### trimStart()

#### Call Signature

> **trimStart**(`value`, `entries`): `string`

Defined in: [interfaces/string.ts:217](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L217)

Removes specific string or strings (array) from the beginning a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |

##### Returns

`string`

#### Call Signature

> **trimStart**(`value`, `entries`, `caseSensitive?`): `string`

Defined in: [interfaces/string.ts:224](https://github.com/moacyr-catani/node-package-extensions/blob/993a48601b7558a1a6c920d1383565f9a4d3db8b/src/library/interfaces/string.ts#L224)

Removes specific string or strings (array) from the beginning a string

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |
| `entries` | `string` \| `string`[] | String or strings (array) to be removed |
| `caseSensitive?` | `boolean` | True indicates that the search should respect entries casing |

##### Returns

`string`
