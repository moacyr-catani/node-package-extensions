export interface IAssertLib
{
    /**
     * Asserts the provided value is a valid datetime.
     * @param value Value to be checked. If it is a string, it will be parsed as ISO format.
     * @returns A `Date` when valid, otherwise `null`.
     * @example
     * const parsed = XT.Assert.date("2026-06-19");
     */
    date(value: Date | number | string): Date | null;

    /**
     * Asserts the provided string value is a valid datetime using a custom parse format.
     * @param value String to be checked.
     * @param parseFormat Representation of how date/time is formatted. Valid tokens are `YYYY`, `YY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
     * @returns A `Date` when valid, otherwise `null`.
     * @example
     * const parsed = XT.Assert.date("19/06/2026", "DD/MM/YYYY");
     */
    date(value:       string,
         parseFormat: string): Date | null;

    /**
     * Asserts the provided value is a valid datetime.
     * @param value Value to be checked. If it is a string, it will be parsed as ISO format.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns The parsed `Date` when valid, otherwise the alternative value.
     */
    date(value:            Date | number | string,
         alternativeValue: Date): Date;

    /**
     * Asserts the provided string value is a valid datetime using a custom parse format.
     * @param value String to be checked.
     * @param parseFormat Representation of how date/time is formatted. Valid tokens are `YYYY`, `YY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns The parsed `Date` when valid, otherwise the alternative value.
     */
    date(value:            string,
         parseFormat:      string,
         alternativeValue: Date): Date;

    /**
     * Asserts the provided value is a valid decimal.
     * @param value Value to be checked.
     * @returns A decimal number when valid, otherwise `null`.
     * @example
     * const amount = XT.Assert.decimal("1234.56");
     */
    decimal(value: string | number): number | null;

    /**
     * Asserts the provided string value is a valid decimal using a custom decimal separator.
     * @param value String to parse.
     * @param decimalSeparator Character used as decimal separator.
     * @returns A decimal number when valid, otherwise `null`.
     */
    decimal(value:            string,
            decimalSeparator: string): number | null;

    /**
     * Asserts the provided string value is a valid decimal using custom separators.
     * @param value String to parse.
     * @param decimalSeparator Character used as decimal separator.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A decimal number when valid, otherwise `null`.
     */
    decimal(value:             string,
            decimalSeparator:  string,
            thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is a valid decimal.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A decimal number when valid, otherwise the alternative value.
     */
    decimal(value:            string | number,
            alternativeValue: number): number;

    /**
     * Asserts the provided string value is a valid decimal using a custom decimal separator.
     * @param value String to parse.
     * @param decimalSeparator Character used as decimal separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A decimal number when valid, otherwise the alternative value.
     */
    decimal(value:            string,
            decimalSeparator: string,
            alternativeValue: number): number;

    /**
     * Asserts the provided string value is a valid decimal using custom separators.
     * @param value String to parse.
     * @param decimalSeparator Character used as decimal separator.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A decimal number when valid, otherwise the alternative value.
     */
    decimal(value:             string,
            decimalSeparator:  string,
            thousandSeparator: string,
            alternativeValue:  number): number;

    /**
     * Asserts the provided value is a valid signed 8-bit integer.
     * @param value Value to be checked.
     * @returns An 8-bit integer when valid, otherwise `null`.
     */
    int8(value: string | number): number | null;

    /**
     * Asserts the provided value is a valid signed 8-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns An 8-bit integer when valid, otherwise the alternative value.
     */
    int8(value:            string | number,
         alternativeValue: number): number;

    /**
     * Asserts the provided value is a valid signed 16-bit integer.
     * @param value Value to be checked.
     * @returns A 16-bit integer when valid, otherwise `null`.
     */
    int16(value: string | number): number | null;

    /**
     * Asserts the provided string value is a valid signed 16-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 16-bit integer when valid, otherwise `null`.
     */
    int16(value:             string,
          thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is a valid signed 16-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 16-bit integer when valid, otherwise the alternative value.
     */
    int16(value:             string | number,
          alternativeValue:  number): number;

    /**
     * Asserts the provided string value is a valid signed 16-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 16-bit integer when valid, otherwise the alternative value.
     */
    int16(value:             string,
          thousandSeparator: string,
          alternativeValue:  number): number;

    /**
     * Asserts the provided value is a valid signed 32-bit integer.
     * @param value Value to be checked.
     * @returns A 32-bit integer when valid, otherwise `null`.
     */
    int32(value: string | number): number | null;

    /**
     * Asserts the provided string value is a valid signed 32-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 32-bit integer when valid, otherwise `null`.
     */
    int32(value:             string,
          thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is a valid signed 32-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 32-bit integer when valid, otherwise the alternative value.
     */
    int32(value:             string | number,
          alternativeValue:  number): number;

    /**
     * Asserts the provided string value is a valid signed 32-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 32-bit integer when valid, otherwise the alternative value.
     */
    int32(value:             string,
          thousandSeparator: string,
          alternativeValue:  number): number;

    /**
     * Asserts the provided value is a valid signed 64-bit integer.
     * @param value Value to be checked.
     * @returns A 64-bit integer when valid, otherwise `null`.
     */
    int64(value: string | number | bigint): bigint | null;

    /**
     * Asserts the provided string value is a valid signed 64-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 64-bit integer when valid, otherwise `null`.
     */
    int64(value:             string,
          thousandSeparator: string): bigint | null;

    /**
     * Asserts the provided value is a valid signed 64-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 64-bit integer when valid, otherwise the alternative value.
     */
    int64(value:             string | number | bigint,
          alternativeValue:  bigint): bigint;

    /**
     * Asserts the provided string value is a valid signed 64-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 64-bit integer when valid, otherwise the alternative value.
     */
    int64(value:             string,
          thousandSeparator: string,
          alternativeValue:  bigint): bigint;

    /**
     * Asserts the provided value is a valid unsigned 8-bit integer.
     * @param value Value to be checked.
     * @returns An 8-bit unsigned integer when valid, otherwise `null`.
     */
    uint8(value: string | number): number | null;

    /**
     * Asserts the provided value is a valid unsigned 8-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns An 8-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint8(value:            string | number,
          alternativeValue: number): number;

    /**
     * Asserts the provided value is a valid unsigned 16-bit integer.
     * @param value Value to be checked.
     * @returns A 16-bit unsigned integer when valid, otherwise `null`.
     */
    uint16(value: string | number): number | null;

    /**
     * Asserts the provided string value is a valid unsigned 16-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 16-bit unsigned integer when valid, otherwise `null`.
     */
    uint16(value:             string,
           thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is a valid unsigned 16-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 16-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint16(value:             string | number,
           alternativeValue:  number): number;

    /**
     * Asserts the provided string value is a valid unsigned 16-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 16-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint16(value:             string,
           thousandSeparator: string,
           alternativeValue:  number): number;

    /**
     * Asserts the provided value is a valid unsigned 32-bit integer.
     * @param value Value to be checked.
     * @returns A 32-bit unsigned integer when valid, otherwise `null`.
     */
    uint32(value: string | number): number | null;

    /**
     * Asserts the provided string value is a valid unsigned 32-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 32-bit unsigned integer when valid, otherwise `null`.
     */
    uint32(value:             string,
           thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is a valid unsigned 32-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 32-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint32(value:             string | number,
           alternativeValue:  number): number;

    /**
     * Asserts the provided string value is a valid unsigned 32-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 32-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint32(value:             string,
           thousandSeparator: string,
           alternativeValue:  number): number;

    /**
     * Asserts the provided value is a valid unsigned 64-bit integer.
     * @param value Value to be checked.
     * @returns A 64-bit unsigned integer when valid, otherwise `null`.
     */
    uint64(value: string | number | bigint): bigint | null;

    /**
     * Asserts the provided string value is a valid unsigned 64-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @returns A 64-bit unsigned integer when valid, otherwise `null`.
     */
    uint64(value:             string,
           thousandSeparator: string): bigint | null;

    /**
     * Asserts the provided value is a valid unsigned 64-bit integer.
     * @param value Value to be checked.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 64-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint64(value:             string | number | bigint,
           alternativeValue:  bigint): bigint;

    /**
     * Asserts the provided string value is a valid unsigned 64-bit integer.
     * @param value String to parse.
     * @param thousandSeparator Character used as thousand separator.
     * @param alternativeValue Value returned when the input is not valid.
     * @returns A 64-bit unsigned integer when valid, otherwise the alternative value.
     */
    uint64(value:             string,
           thousandSeparator: string,
           alternativeValue:  bigint): bigint;
}
