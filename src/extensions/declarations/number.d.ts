export type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

import { IntegerRepresentations } from "../implementations/number.js";


// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface NumberConstructor
    {
        $_changeIntegerRepresentation(p_Value:               number | bigint | string | ArrayBuffer,
                                      p_toRepresentation:    IntegerRepresentations,
                                      p_fromRepresentation?: IntegerRepresentations): number | bigint | string | ArrayBuffer;


        /**
         * Creates a random integer with size from 1 to 128 bytes (extremelly huge number).
         * @param {number} p_SizeInBytes Size of the random integer in bytes (from 1 to 128)
         * @param {IntegerRepresentations} p_ReturnIn The format to return the created integer
         * @example
         * // Create a 64 bits (8 bytes) random integer and return it as BigInt
         * const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
         */
        $_randomInt(p_SizeInBytes: number, 
                    p_ReturnIn?:   IntegerRepresentations): number | bigint | string | ArrayBuffer;
    }


    interface Number
    {
        $_changeIntegerRepresentation(p_Value:            number | bigint | string | ArrayBuffer,
                                      p_toRepresentation: IntegerRepresentations): number | bigint | string | ArrayBuffer;

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