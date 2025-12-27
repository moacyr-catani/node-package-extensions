import { IntegerRepresentations, DecimalPlaces } from "../../common/index.js";



// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface NumberConstructor
    {
        $_changeIntegerRepresentation(p_Value:               number | bigint | string | Buffer,
                                      p_toRepresentation:    IntegerRepresentations,
                                      p_fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer;


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
        $_changeIntegerRepresentation(p_Value:            number | bigint | string | ArrayBuffer,
                                      p_toRepresentation: IntegerRepresentations): number | bigint | string | ArrayBuffer;

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