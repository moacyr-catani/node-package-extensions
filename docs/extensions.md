[**extensions-utility**](README.md)

***

# Extensions API

This page documents prototype and static extensions added by the package when the extensions module is imported.

## Usage

```ts
import "@moacyr-catani/ct2-ts-extensions/extensions";

const value = "1234".$_toInt();
const unique = ["a", "b", "a"].$_removeDuplicates();
const date = new Date().$_toYearEnd();
```

## Number static extensions

These methods are available on the `Number` constructor after loading extensions.

- `Number.$_changeIntegerRepresentation(value, toRepresentation, fromRepresentation?)`
- `Number.$_isInt(value)`
- `Number.$_isInt8(value)`
- `Number.$_isInt16(value)`
- `Number.$_isInt32(value)`
- `Number.$_isInt64(value)`
- `Number.$_isUInt8(value)`
- `Number.$_isUInt16(value)`
- `Number.$_isUInt32(value)`
- `Number.$_isUInt64(value)`
- `Number.$_isValid(value)`
- `Number.$_toDecimal(value, decimalPlaces)`
- `Number.$_toDecimalString(value, decimalPlaces?, decimalSeparator?, thousandSeparator?)`
- `Number.$_toInt(value)`
- `Number.$_toIntString(value, thousandSeparator?)`
- `Number.$_randomInt(sizeInBytes, returnIn?)`

## Number prototype extensions

- `Number.prototype.$_isInt()`
- `Number.prototype.$_isInt8()`
- `Number.prototype.$_isInt16()`
- `Number.prototype.$_isInt32()`
- `Number.prototype.$_isInt64()`
- `Number.prototype.$_isUInt8()`
- `Number.prototype.$_isUInt16()`
- `Number.prototype.$_isUInt32()`
- `Number.prototype.$_isUInt64()`
- `Number.prototype.$_isValid()`
- `Number.prototype.$_toDecimal(decimalPlaces)`
- `Number.prototype.$_toDecimalString(decimalPlaces?, decimalSeparator?, thousandSeparator?)`
- `Number.prototype.$_toInt()`
- `Number.prototype.$_toIntString(thousandSeparator?)`

## String prototype extensions

- `String.prototype.$_extractBetween(start?, end?, words?)`
- `String.prototype.$_fromBase64Url()`
- `String.prototype.$_isInt(thousandSeparator?)`
- `String.prototype.$_isNumber(thousandSeparator?, decimalSeparator?)`
- `String.prototype.$_replace(search, newValue, caseInsensitive?)`
- `String.prototype.$_removeSequentialLatinLetters()`
- `String.prototype.$_toBase64Url()`
- `String.prototype.$_toBasicLatinLetters()`
- `String.prototype.$_toBigInt(thousandSeparator?)`
- `String.prototype.$_toDate(parseFormat)`
- `String.prototype.$_toDateString(parseFormat, resultFormat)`
- `String.prototype.$_toDecimal(decimalSeparator?, thousandSeparator?)`
- `String.prototype.$_toInt(thousandSeparator?)`
- `String.prototype.$_trim(entries, caseSensitive?)`
- `String.prototype.$_trimStart(entries, caseSensitive?)`
- `String.prototype.$_trimEnd(entries, caseSensitive?)`

## Date prototype extensions

- `Date.prototype.$_addDays(value)`
- `Date.prototype.$_toDateString()`
- `Date.prototype.$_toMonthEnd()`
- `Date.prototype.$_toMonthStart()`
- `Date.prototype.$_toString(format)`
- `Date.prototype.$_toTimeString()`
- `Date.prototype.$_toYearEnd()`
- `Date.prototype.$_toYearStart()`

## Array prototype extensions

- `Array.prototype.$_removeDuplicates()`

> Note: Current implementation deduplicates string values using a simple object-based lookup.

## Object extensions

- `Object.$_assertDate(value, alternativeValue?, parseFormat?)`
- `Object.$_assertDecimal(value, alternativeValue?)`
- `Object.$_getValue(object, accessor)`
- `Object.$_setValue(object, accessor, value)`

## Notes

The extensions module is side-effectual: importing it loads prototype definitions and helpers. You do not need to capture any exported value when importing the module.
