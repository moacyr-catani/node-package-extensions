import { DecimalPlaces,
         IntegerRepresentations } from "./../../common/index.js"

         
export interface INumberLib
{
    changeIntegerRepresentation (value:               number | bigint | string | Buffer,
                                 toRepresentation:    IntegerRepresentations,
                                 fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer ;


 
               
    /**
     * Creates a random integer with size from 1 to 128 bytes (extremelly huge number).
     * @param {number} sizeInBytes Size of the random integer in bytes (from 1 to 128)
     * @param {IntegerRepresentations} returnIn The format to return the created integer
     * @example
     * // Create a 64 bits (8 bytes) random integer and return it as BigInt
     * const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
     */
    createRandomInt (sizeInBytes: number, 
                     returnIn:    IntegerRepresentations): number | bigint | string | ArrayBuffer;



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


    /**
     * Checks if the provided parameter is a valid 8 bits unsigned integer; i.e. is in the range 0 and 255 (2⁸ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isUInt8 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 16 bits unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isUInt16 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid 32 bits unsigned integer; i.e. is in the range 0 and 4,294,967,295 (2³² - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isUInt32 (value: number | bigint): boolean;


    /**
     * Checks if the provided parameter is a valid number; i.e. it is not NaN or Infinity
     * @param {number} value Value to be checked.
     */
    isValid (value: number): boolean;

    
    /**
     * Checks if the provided parameter is a valid 32 bits unsigned integer; i.e. is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
     * @param {number | bigint} value Value to be checked.
     */
    isUInt64 (value: number | bigint): boolean;


    toBigInt (p_Value: number | bigint): bigint | undefined;


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
