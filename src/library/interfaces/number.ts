import { DecimalPlaces,
         IntegerRepresentations } from "./../../common/index.js"

         
export interface INumberLib
{
    changeIntegerRepresentation (value:               number | bigint | string | Buffer,
                                 toRepresentation:    IntegerRepresentations,
                                 fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer ;


 
                                 
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
