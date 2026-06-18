[**extensions-utility**](README.md)

***

# Enums

This package exports two helper enums for integer representations and week day values.

## IntegerRepresentations

`IntegerRepresentations` describes the supported formats when converting integers or generating random integers.

- `IntegerRepresentations.BufferUInt8` — binary data as a `Buffer`
- `IntegerRepresentations.Number` — native JavaScript `number`
- `IntegerRepresentations.BigInt` — native JavaScript `bigint`
- `IntegerRepresentations.StringBinary` — binary string
- `IntegerRepresentations.StringOctal` — octal string
- `IntegerRepresentations.StringDecimal` — decimal string
- `IntegerRepresentations.StringHexadecimal` — hexadecimal string
- `IntegerRepresentations.StringBase36` — base-36 string
- `IntegerRepresentations.StringBase64` — Base64 string
- `IntegerRepresentations.StringBase64Url` — Base64Url string

## WeekDays

`WeekDays` describes the first weekday used by date helpers.

- `WeekDays.SUNDAY`
- `WeekDays.MONDAY`
- `WeekDays.TUESDAY`
- `WeekDays.WEDNESDAY`
- `WeekDays.THURSDAY`
- `WeekDays.FRIDAY`
- `WeekDays.SATURDAY`
