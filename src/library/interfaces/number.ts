import { DecimalPlaces,
         IntegerRepresentations } from "./../../common/index.js"

         
export interface INumberLib
{
    changeIntegerRepresentation (value:               number | bigint | string | Buffer,
                                 toRepresentation:    IntegerRepresentations,
                                 fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer ;


 
               
    isInt (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 8 bits signed integer; i.e. is in the range -128 (-2⁷) and 127 (2⁷ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isInt8 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 16 bits signed integer; i.e. is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isInt16 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 32 bits signed integer; i.e. is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isInt32 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 64 bits signed integer; i.e. is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isInt64 (value: number | bigint): boolean;


    isUInt8 (value: number | bigint): boolean;


    isUInt16 (value: number | bigint): boolean;


    isUInt32 (value: number | bigint): boolean;


    isUInt64 (value: number | bigint): boolean;


    /**
     * Creates a random integer with size from 1 to 128 bytes (extremelly huge number).
     * @param {number} p_SizeInBytes Size of the random integer in bytes (from 1 to 128)
     * @param {IntegerRepresentations} p_ReturnIn The format to return the created integer
     * @example
     * // Create a 64 bits (8 bytes) random integer and return it as BigInt
     * const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
     */
    randomInt (sizeInBytes: number, 
               returnIn:    IntegerRepresentations): number | bigint | string | ArrayBuffer;


    toDecimal (value:         number,
               decimalPlaces: DecimalPlaces): number | undefined;
 

    toDecimalString (value:             number): string | undefined;

    toDecimalString (value:             number,
                     decimalPlaces:     DecimalPlaces): string | undefined;

    toDecimalString (value:             number,
                     decimalPlaces:     DecimalPlaces,
                     decimalSeparator:  string): string | undefined;

    toDecimalString (value:             number,
                     decimalPlaces:     DecimalPlaces,
                     decimalSeparator:  string,
                     thousandSeparator: string): string | undefined;


    toInt (value: number): number | undefined;



    toIntString (value:             number): string | undefined;

    toIntString (value:             number,
                 thousandSeparator: string): string | undefined;



}
