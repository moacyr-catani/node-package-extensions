export type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;


import "./array.js";
import "./date.js";
import "./number.js";
import { IntegerRepresentations } from "./number.js";
import "./object.js";
import "./string.js";
import { StringExtractionResult } from "./string.js";

// export { StringExtractionResult } from "./string.js";
// export { IntegerRepresentations } from "./number.js";
export { StringExtractionResult };
export { IntegerRepresentations };


// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface String
    {
        $_extractBetween(start?: string | string[] | undefined,
                         end?:   string | string[] | undefined,
                         words?: boolean): StringExtractionResult;



        /**
         * Decodes Base64Url value into string
         */
        $_fromBase64Url(): string;



        /**
         * Checks if a string represents a valid integer value in decimal format (using numerals from 0 to 9)
         */
        $_isInt():    boolean;
        /**
         * Checks if a string represents a valid integer in decimal format (using numerals from 0 to 9)
         * @param {string} thousandSeparator Character used to separate thousands groups
         */
        $_isInt(thousandSeparator: string): boolean;




        /**
         * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
         */
        $_isNumber(): boolean;
        /**
         * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
         * @param {string} thousandSeparator Character used to separate thousands groups
         * @param {string} decimalSeparator Character used to separate decimal part
         */
        $_isNumber(thousandSeparator: string,
                   decimalSeparator:  string): boolean;
        


        /**
         * Replaces a substring for a new value.
         * All occurrences of the searched string will be replaced
         * @param {string}  search String to be searched and replaced
         * @param {string}  newValue New string
         * @param {boolean} caseInsensitive If true, casing of the searched string will be ignored
         */
        $_replace(search:           string,
                  newValue:         string,
                  caseInsensitive?: boolean): string;
        /**
         * Replaces several substrings for a new value.
         * All occurrences of the searched string will be replaced
         * @param {string[]} search Array with strings to be searched and replaced
         * @param {string}   newValue New string
         * @param {boolean}  caseInsensitive If true, casing of the searched string will be ignored
         */
        $_replace(search:           string[],
                  newValue:         string,
                  caseInsensitive?: boolean): string;



        /**
         * Remove sequential latin characters
         * @example "immediately " will be replaced by "imediately "
         */
        $_removeSequentialLatinLetters(): string;



        /**
         * Encodes string into Base64Url value
         */
        $_toBase64Url(): string;



        /**
         * Keeps only basic latin letter
         * @example "á ô ç ñ" will be replaced by "a o c n"
         */
        $_toBasicLatinLetters(): string



        /**
         * Returns a date from a string
         * @param parseFormat String representing how date is written in string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
         */
        $_toDate(parseFormat: string): Date | undefined;




        /**
         * Returns a string representing a parsed datetime value from another string in provided format
         * @param parsedFormat Representation of how datetime value is written in original string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
         * @param resultFormat Representation of how datetime value must be written in result string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
         */
        $_toDateString(parseFormat:  string,
                       resultFormat: string): string | undefined;




        /**
         * Returns a decimal number from a string
         * @param decimalPlaces Number of decimal places to include in result
         */
        $_toDecimal(decimalPlaces: DecimalPlaces): number | undefined;




        /**
         * Returns an integer number from a string
         */
        $_toInt(): number | undefined;

        
        //$_trimChar(p_Char: string): string;

        $_trim     (entries: string | string[], caseSensitive?: boolean): string;
        $_trimStart(entries: string | string[], caseSensitive?: boolean): string;
        $_trimEnd  (entries: string | string[], caseSensitive?: boolean): string;



        $_indexOfAny(...p_Characters: string[]): number;


    }


    interface Date
    {
        $_addDays(p_Value: number):         Date;
        $_toDateString():                   string
        $_toMonthEnd():                     Date;
        $_toMonthStart():                   Date;
        $_toString(p_ResultFormat: string): string;
        $_toTimeString():                   string
        $_toYearEnd():                      Date;
        $_toYearStart():                    Date;
    }


    interface NumberConstructor
    {
        $_changeIntegerRepresentation(p_Value:               number | bigint | string | ArrayBuffer,
                                      p_toRepresentation:    IntegerRepresentations,
                                      p_fromRepresentation?: IntegerRepresentations): number | bigint | string | ArrayBuffer;
        $_randomInt(p_SizeInBytes: number, 
                    p_ReturnIn?:   IntegerRepresentations): number | bigint | string | ArrayBuffer;
    }


    interface Number
    {
        $_changeIntegerRepresentation(p_Value:            number | bigint | string | ArrayBuffer,
                                      p_toRepresentation: IntegerRepresentations): number | bigint | string | ArrayBuffer;

        $_toDecimal(p_DecimalPlaces: DecimalPlaces): number | undefined;
        // TODO 
        $_toDecimalString(p_ThousandSeparator: string,
                          p_DecimalPlaces:     DecimalPlaces): string;
        $_toInt():       number | undefined;
        $_toIntString(): string | undefined;

    }


    interface ObjectConstructor
    {
        $_getValue(p_Object:  Object,
                   p_Acessor: string): any;
        $_setValue(p_Object:  Object,
                   p_Acessor: string,
                   p_Value:   any):    boolean;
    }


    interface Object 
    {
        $_assertDate(p_Value:             any,
                     p_AlternativeValue?: Date | null,
                     p_ParseFormat?:      string): Date | null | undefined;

        $_assertDecimal(p_Value: any,
                        p_AlternativeValue: number | null): number | null;
        $_getValue(p_Object:  Object,
                   p_Acessor: string): any;
        $_setValue(p_Object:  Object,
                   p_Acessor: string,
                   p_Value:   any):    boolean;

    }


    interface Array<T>
    {
        $_removeDuplicates(): Array<any>;
    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};