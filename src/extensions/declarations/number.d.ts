import { IntegerRepresentations, DecimalPlaces } from "../../common/index.js";
import { Buffer } from "node:buffer";



// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface NumberConstructor
    {
        /**
         * Asserts the provided value is a valid decimal.
         * @param value Value to be checked.
         * @returns A decimal number when valid; otherwise `null`.
         */
        $_assertDecimal(value: string | number): number | null;

        /**
         * Asserts the provided string value is a valid decimal using a custom decimal separator.
         * @param value String to parse.
         * @param decimalSeparator Character used as decimal separator.
         * @returns A decimal number when valid; otherwise `null`.
         */
        $_assertDecimal(value:            string,
                        decimalSeparator: string): number | null;

        /**
         * Asserts the provided string value is a valid decimal using custom separators.
         * @param value String to parse.
         * @param decimalSeparator Character used as decimal separator.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A decimal number when valid; otherwise `null`.
         */
        $_assertDecimal(value:             string,
                        decimalSeparator:  string,
                        thousandSeparator: string): number | null;

        /**
         * Asserts the provided value is a valid decimal.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns The parsed decimal when valid; otherwise the alternative value.
         */
        $_assertDecimal(value:            string | number,
                        alternativeValue: number): number;

        /**
         * Asserts the provided string value is a valid decimal using a custom separator.
         * @param value String to parse.
         * @param decimalSeparator Character used as decimal separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns The parsed decimal when valid; otherwise the alternative value.
         */
        $_assertDecimal(value:            string,
                        decimalSeparator: string,
                        alternativeValue: number): number;

        /**
         * Asserts the provided string value is a valid decimal using custom separators.
         * @param value String to parse.
         * @param decimalSeparator Character used as decimal separator.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns The parsed decimal when valid; otherwise the alternative value.
         */
        $_assertDecimal(value:             string,
                        decimalSeparator:  string,
                        thousandSeparator: string,
                        alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid signed 8-bit integer.
         * @param value Value to be checked.
         * @returns An 8-bit integer when valid; otherwise `null`.
         */
        $_assertInt8(value:             string | number): number | null;

        /**
         * Asserts the provided value is a valid signed 8-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns An 8-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt8(value:             string | number,
                     alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid signed 16-bit integer.
         * @param value Value to be checked.
         * @returns A 16-bit integer when valid; otherwise `null`.
         */
        $_assertInt16(value:             string | number): number | null;

        /**
         * Asserts the provided string value is a valid signed 16-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 16-bit integer when valid; otherwise `null`.
         */
        $_assertInt16(value:             string | number,
                      thousandSeparator: string): number | null;

        /**
         * Asserts the provided value is a valid signed 16-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 16-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt16(value:             string | number,
                      alternativeValue:  number): number;

        /**
         * Asserts the provided string value is a valid signed 16-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 16-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt16(value:             string | number,
                      thousandSeparator: string,
                      alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid signed 32-bit integer.
         * @param value Value to be checked.
         * @returns A 32-bit integer when valid; otherwise `null`.
         */
        $_assertInt32(value:             string | number): number | null;

        /**
         * Asserts the provided string value is a valid signed 32-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 32-bit integer when valid; otherwise `null`.
         */
        $_assertInt32(value:             string | number,
                      thousandSeparator: string): number | null;

        /**
         * Asserts the provided value is a valid signed 32-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 32-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt32(value:             string | number,
                      alternativeValue:  number): number | null;

        /**
         * Asserts the provided string value is a valid signed 32-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 32-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt32(value:             string | number,
                      thousandSeparator: string,
                      alternativeValue:  number): number | null;

        /**
         * Asserts the provided value is a valid signed 64-bit integer.
         * @param value Value to be checked.
         * @returns A 64-bit integer when valid; otherwise `null`.
         */
        $_assertInt64(value:             string | number | bigint): bigint | null;

        /**
         * Asserts the provided string value is a valid signed 64-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 64-bit integer when valid; otherwise `null`.
         */
        $_assertInt64(value:             string,
                      thousandSeparator: string): bigint | null;

        /**
         * Asserts the provided value is a valid signed 64-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 64-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt64(value:             string | number | bigint,
                      alternativeValue:  bigint): bigint;

        /**
         * Asserts the provided string value is a valid signed 64-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 64-bit integer when valid; otherwise the alternative value.
         */
        $_assertInt64(value:             string,
                      thousandSeparator: string,
                      alternativeValue:  bigint): bigint;

        /**
         * Asserts the provided value is a valid unsigned 8-bit integer.
         * @param value Value to be checked.
         * @returns An 8-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint8(value:             string | number): number | null;

        /**
         * Asserts the provided value is a valid unsigned 8-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns An 8-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint8(value:             string | number,
                      alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid unsigned 16-bit integer.
         * @param value Value to be checked.
         * @returns A 16-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint16(value:             string | number): number | null;

        /**
         * Asserts the provided string value is a valid unsigned 16-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 16-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint16(value:             string | number,
                       thousandSeparator: string): number | null;

        /**
         * Asserts the provided value is a valid unsigned 16-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 16-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint16(value:             string | number,
                       alternativeValue:  number): number;

        /**
         * Asserts the provided string value is a valid unsigned 16-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 16-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint16(value:             string | number,
                       thousandSeparator: string,
                       alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid unsigned 32-bit integer.
         * @param value Value to be checked.
         * @returns A 32-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint32(value:             string | number): number | null;

        /**
         * Asserts the provided string value is a valid unsigned 32-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 32-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint32(value:             string | number,
                       thousandSeparator: string): number | null;

        /**
         * Asserts the provided value is a valid unsigned 32-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 32-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint32(value:             string | number,
                       alternativeValue:  number): number;

        /**
         * Asserts the provided string value is a valid unsigned 32-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 32-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint32(value:             string | number,
                       thousandSeparator: string,
                       alternativeValue:  number): number;

        /**
         * Asserts the provided value is a valid unsigned 64-bit integer.
         * @param value Value to be checked.
         * @returns A 64-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint64(value:             string | number | bigint): bigint | null;

        /**
         * Asserts the provided string value is a valid unsigned 64-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @returns A 64-bit unsigned integer when valid; otherwise `null`.
         */
        $_assertUint64(value:             string,
                       thousandSeparator: string): bigint | null;

        /**
         * Asserts the provided value is a valid unsigned 64-bit integer.
         * @param value Value to be checked.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 64-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint64(value:             string | number | bigint,
                       alternativeValue:  bigint): bigint;

        /**
         * Asserts the provided string value is a valid unsigned 64-bit integer.
         * @param value String to parse.
         * @param thousandSeparator Character used as thousand separator.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns A 64-bit unsigned integer when valid; otherwise the alternative value.
         */
        $_assertUint64(value:             string,
                       thousandSeparator: string,
                       alternativeValue:  bigint): bigint;

        /**
         * Converts an integer between supported representations.
         * @param p_Value Value to convert.
         * @param p_toRepresentation Target representation.
         * @param p_fromRepresentation Optional source representation. When omitted, the source is inferred.
         * @returns The converted integer in the requested representation.
         */
        $_changeIntegerRepresentation(p_Value:               number | bigint | string | Buffer,
                                      p_toRepresentation:    IntegerRepresentations,
                                      p_fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer;

        /**
         * Checks whether the provided value is an integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is an integer; otherwise `false`.
         */
        $_isInt (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid signed 8-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range -128..127; otherwise `false`.
         */
        $_isInt8 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid signed 16-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range -32,768..32,767; otherwise `false`.
         */
        $_isInt16 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid signed 32-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range -2,147,483,648..2,147,483,647; otherwise `false`.
         */
        $_isInt32 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid signed 64-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range -9,223,372,036,854,775,808..9,223,372,036,854,775,807; otherwise `false`.
         */
        $_isInt64 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid unsigned 8-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range 0..255; otherwise `false`.
         */
        $_isUInt8 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid unsigned 16-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range 0..65,535; otherwise `false`.
         */
        $_isUInt16 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid unsigned 32-bit integer.
         * @param p_Value Value to check.
         * @returns `true` when the value is in range 0..4,294,967,295; otherwise `false`.
         */
        $_isUInt32 (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid number; i.e. it is not NaN or Infinity
         */
        $_isValid (p_Value: number | bigint | string | Buffer): boolean;

        /**
         * Checks whether the provided value is a valid 32 bits unsigned integer; i.e. is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
         */
        $_isUInt64 (p_Value: number | bigint | string | Buffer): boolean;

        $_toDecimal(p_Value:       number | bigint | string | Buffer,
                    decimalPlaces: DecimalPlaces): number | undefined;

        $_toDecimalString(p_Value:       number | bigint | string | Buffer): string | undefined;
        $_toDecimalString(p_Value:       number | bigint | string | Buffer,
                          decimalPlaces: DecimalPlaces): string | undefined;
        $_toDecimalString(p_Value:          number | bigint | string | Buffer,
                          decimalPlaces:    DecimalPlaces,
                          decimalSeparator: string): string | undefined;
        $_toDecimalString(p_Value:           number | bigint | string | Buffer,
                          decimalPlaces:     DecimalPlaces,
                          decimalSeparator:  string,
                          thousandSeparator: string): string | undefined;

        $_toInt(p_Value: number | bigint | string | Buffer): number | undefined;

        $_toIntString(p_Value: number | bigint | string | Buffer): string | undefined;
        $_toIntString(p_Value: number | bigint | string | Buffer,
                      thousandSeparator: string): string | undefined;




        /**
         * Creates a random integer with size from 1 to 128 bytes (extremelly huge number).
         * @param {number} p_SizeInBytes Size of the random integer in bytes (from 1 to 128)
         * @param {IntegerRepresentations} p_ReturnIn The format to return the created integer
         * @example
         * // Create a 64 bits (8 bytes) random integer and return it as BigInt
         * const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
         */
        $_randomInt(p_SizeInBytes: number, 
                    p_ReturnIn?:   IntegerRepresentations): number | bigint | string | Buffer<ArrayBuffer>;
    }

    interface Number
    {
        /**
         * 
         * Asserts a value is, or can be converted to, a valid int8
         */
        $_assertInt8(): number | null;
        $_assertInt8(alternativeValue:  number): number;


        /**
         * 
         * Asserts a value is, or can be converted to, a valid int16
         */
        $_assertInt16(): number | null;
        $_assertInt16(alternativeValue:  number): number;


        /**
         * 
         * Asserts a value is, or can be converted to, a valid int32
         */
        $_assertInt32(): number | null;
        $_assertInt32(alternativeValue:  number): number;


        /**
         * 
         * Asserts a value is, or can be converted to, a valid int64
         */
        $_assertInt64(): bigint | null;
        $_assertInt64(alternativeValue:  bigint): bigint;



        /**
         * 
         * Asserts a value is, or can be converted to, a valid uint8
         */
        $_assertUint8(): number | null;
        $_assertUint8(alternativeValue:  number): number;



        /**
         * 
         * Asserts a value is, or can be converted to, a valid uint16
         */
        $_assertUint16(): number | null;
        $_assertUint16(alternativeValue:  number): number;



        /**
         * 
         * Asserts a value is, or can be converted to, a valid uint32
         */
        $_assertUint32(): number | null;
        $_assertUint32(alternativeValue:  number): number;



        /**
         * 
         * Asserts a value is, or can be converted to, a valid uint64
         */
        $_assertUint64(): bigint | null;
        $_assertUint64(alternativeValue:  bigint): bigint;


        /**
         * 
         * Changes de representation of an integer
         */
        $_changeIntegerRepresentation(p_toRepresentation: IntegerRepresentations): number | bigint | string | Buffer;


        /**
         * Checks if value is a valid integer.
         */
        $_isInt (): boolean;

        /**
         * Checks if value is a valid 8 bits signed integer; i.e. is in the range -128 (-2⁷) and 127 (2⁷ - 1).
         */
        $_isInt8 (): boolean;

        /**
         * Checks if value is a valid 16 bits signed integer; i.e. is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
         */
        $_isInt16 (): boolean;

        /**
         * Checks if value is a valid 32 bits signed integer; i.e. is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
         */
        $_isInt32 (): boolean;

        /**
         * Checks if value is a valid 64 bits signed integer; i.e. is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
         */
        $_isInt64 (): boolean;

        /**
         * Checks if value is a valid 8 bits unsigned integer; i.e. is in the range 0 and 255 (2⁸ - 1).
         */
        $_isUInt8 (): boolean;

        /**
         * Checks if value is a valid 16 bits unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
         */
        $_isUInt16 (): boolean;

        /**
         * Checks if value is a valid 32 bits unsigned integer; i.e. is in the range 0 and 4,294,967,295 (2³² - 1).
         */
        $_isUInt32 (): boolean;

        /**
         * Checks if value is a valid number; i.e. it is not NaN or Infinity
         */
        $_isValid (): boolean;

        /**
         * Checks if value is a valid 32 bits unsigned integer; i.e. is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
         */
        $_isUInt64 (): boolean;

        $_toDecimal(decimalPlaces: DecimalPlaces): number | undefined;

        $_toDecimalString(): string | undefined;
        $_toDecimalString(decimalPlaces:     DecimalPlaces): string | undefined;
        $_toDecimalString(decimalPlaces:     DecimalPlaces,
                          decimalSeparator:  string): string | undefined;
        $_toDecimalString(decimalPlaces:     DecimalPlaces,
                          decimalSeparator:  string,
                          thousandSeparator: string): string | undefined;

        $_toInt():       number | undefined;

        $_toIntString(): string | undefined;
        $_toIntString(thousandSeparator: string): string | undefined;

    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};