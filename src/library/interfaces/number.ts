import { DecimalPlaces,
         IntegerRepresentations } from "./../../common/index.js"

export interface INumberLib
{
    /**
     * Converts an integer value between supported representations.
     * @param value Value to convert.
     * @param toRepresentation Target representation.
     * @param fromRepresentation Optional source representation. When omitted, the source is inferred.
     * @returns The converted integer in the requested representation.
     * @example
     * const hex = XT.Number.changeIntegerRepresentation("255", IntegerRepresentations.StringHexadecimal, IntegerRepresentations.StringDecimal);
     */
    changeIntegerRepresentation(value:               number | bigint | string | Buffer,
                                 toRepresentation:    IntegerRepresentations,
                                 fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer;

    /**
     * Creates a random integer with the requested number of bytes.
     * @param sizeInBytes The integer size in bytes (1 to 128).
     * @param returnIn Representation for the returned number.
     * @returns A random integer in the requested representation.
     * @example
     * const randomValue = XT.Number.createRandomInt(8, IntegerRepresentations.BigInt);
     */
    createRandomInt(sizeInBytes: number,
                    returnIn:    IntegerRepresentations): number | bigint | string | Buffer<ArrayBuffer>;

    /**
     * Checks if the value is an integer.
     * @param value Value to check.
     * @returns `true` when the value is an integer; otherwise `false`.
     */
    isInt(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid signed 8-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range -128..127; otherwise `false`.
     */
    isInt8(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid signed 16-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range -32,768..32,767; otherwise `false`.
     */
    isInt16(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid signed 32-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range -2,147,483,648..2,147,483,647; otherwise `false`.
     */
    isInt32(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid signed 64-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range -9,223,372,036,854,775,808..9,223,372,036,854,775,807; otherwise `false`.
     */
    isInt64(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid unsigned 8-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range 0..255; otherwise `false`.
     */
    isUInt8(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid unsigned 16-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range 0..65,535; otherwise `false`.
     */
    isUInt16(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid unsigned 32-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range 0..4,294,967,295; otherwise `false`.
     */
    isUInt32(value: number | bigint): boolean;

    /**
     * Checks if the value is a valid number.
     * @param value Value to check.
     * @returns `true` when the value is finite and not NaN; otherwise `false`.
     */
    isValid(value: number): boolean;

    /**
     * Checks if the value is a valid unsigned 64-bit integer.
     * @param value Value to check.
     * @returns `true` when the value is in range 0..18,446,744,073,709,551,615; otherwise `false`.
     */
    isUInt64(value: number | bigint): boolean;

    /**
     * Converts a number or BigInt to BigInt.
     * @param p_Value Value to convert.
     * @returns A bigint when conversion succeeds; otherwise `undefined`.
     */
    toBigInt(p_Value: number | bigint): bigint | undefined;

    /**
     * Converts a number to a fixed decimal value.
     * @param value Value to convert.
     * @param decimalPlaces Number of decimal places.
     * @returns The rounded decimal value, or `undefined` if input is not finite.
     */
    toDecimal(value:         number,
               decimalPlaces: DecimalPlaces): number | undefined;

    /**
     * Formats a number to a decimal string with default separators.
     * @param value Value to format.
     * @returns Formatted number string, or `undefined` if input is not finite.
     */
    toDecimalString(value:             number): string | undefined;

    /**
     * Formats a number to a decimal string with the requested precision.
     * @param value Value to format.
     * @param decimalPlaces Number of decimal places.
     * @returns Formatted number string, or `undefined` if input is not finite.
     */
    toDecimalString(value:             number,
                     decimalPlaces:     DecimalPlaces): string | undefined;

    /**
     * Formats a number to a decimal string with a custom decimal separator.
     * @param value Value to format.
     * @param decimalPlaces Number of decimal places.
     * @param decimalSeparator Character used between integer and fractional parts.
     * @returns Formatted number string, or `undefined` if input is not finite.
     */
    toDecimalString(value:             number,
                     decimalPlaces:     DecimalPlaces,
                     decimalSeparator:  string): string | undefined;

    /**
     * Formats a number to a decimal string with custom decimal and thousand separators.
     * @param value Value to format.
     * @param decimalPlaces Number of decimal places.
     * @param decimalSeparator Character used between integer and fractional parts.
     * @param thousandSeparator Character used to separate thousands.
     * @returns Formatted number string, or `undefined` if input is not finite.
     * @example
     * const text = XT.Number.toDecimalString(1234567.89, 2, ".", ",");
     */
    toDecimalString(value:             number,
                     decimalPlaces:     DecimalPlaces,
                     decimalSeparator:  string,
                     thousandSeparator: string): string | undefined;

    /**
     * Converts a number to an integer by truncating the fractional part.
     * @param value Value to convert.
     * @returns The integer portion, or `undefined` if input is not finite.
     */
    toInt(value: number): number | undefined;

    /**
     * Formats the integer portion of a number as a string.
     * @param value Value to format.
     * @returns Formatted integer string, or `undefined` if input is not finite.
     */
    toIntString(value:             number): string | undefined;

    /**
     * Formats the integer portion of a number as a string with a thousand separator.
     * @param value Value to format.
     * @param thousandSeparator Character used to separate thousands.
     * @returns Formatted integer string, or `undefined` if input is not finite.
     * @example
     * const text = XT.Number.toIntString(1234567, ",");
     */
    toIntString(value:             number,
                 thousandSeparator: string): string | undefined;
}
