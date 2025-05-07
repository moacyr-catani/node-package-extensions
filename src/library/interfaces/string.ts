import { StringExtractionResult} from "./../../common/index.js"



export interface IStringLib
{
    /**
     * Extracts string among specific substrings
     * @param {string|string[]} start String or strings (array) that are just before the text you are looking for
     * @param {string|string[]} end   String or strings (array) that are just after the text you are looking for
     * @param {boolean}         words If true, indicate the text you are looking for is surrounded by 'non word' characters, i.e.: spaces, tabs, new lines, ...
     * @example 
     * const procedure = 
     * `CREATE PROCEDURE sp_Test
     * AS
     * SELECT * FROM [TABLE]`
     * 
     * const procName  = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
     * const statement = procedure.$_extractBetween("AS", "", true).value;
     */
    extractBetween( value:  string,
                    start?: string | string[] | undefined,
                    end?:   string | string[] | undefined,
                    words?: boolean ): StringExtractionResult;                          




    /**
     * Decodes Base64Url value into string
     */
    fromBase64Url( value: string ): string;




    /**
     * Checks if a string represents a valid integer value in decimal format (using numerals from 0 to 9)
     */
    isInt( value: string ): boolean;
    /**
     * Checks if a string represents a valid integer in decimal format (using numerals from 0 to 9)
     * @param {string} thousandSeparator Character used to separate thousands groups
     */
    isInt( value:             string,
           thousandSeparator: string ): boolean;




    /**
     * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
     */
    isNumber( value: string ): boolean;
    /**
     * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
     * @param {string} thousandSeparator Character used to separate thousands groups
     * @param {string} decimalSeparator Character used to separate decimal part
     */
    isNumber( value:             string,
              thousandSeparator: string,
              decimalSeparator:  string ): boolean;
    



    /**
     * Replaces a substring for a new value.
     * All occurrences of the searched string will be replaced
     * @param {string}  search String to be searched and replaced
     * @param {string}  newValue New string
     * @param {boolean} caseInsensitive If true, casing of the searched string will be ignored
     */
    replace(value:            string,
            search:           string,
            newValue:         string,
            caseInsensitive?: boolean): string;
    /**
     * Replaces several substrings for a new value.
     * All occurrences of the searched string will be replaced
     * @param {string[]} search Array with strings to be searched and replaced
     * @param {string}   newValue New string
     * @param {boolean}  caseInsensitive If true, casing of the searched string will be ignored
     */
    replace( value:            string,
             search:           string[],
             newValue:         string,
             caseInsensitive?: boolean): string;




    /**
     * Remove sequential latin characters
     * @example "immediately " will be replaced by "imediately "
     */
    removeSequentialLatinLetters( value: string ): string;




    /**
     * Encodes string into Base64Url value
     */
    toBase64Url( value: string ): string;




    /**
     * Keeps only basic latin letter
     * @example "á ô ç ñ" will be replaced by "a o c n"
     */
    toBasicLatinLetters( value: string ): string




    /**
     * Returns a big integer number from a string
     */
    toBigInt( value: string ): bigint | undefined;
    /**
     * Returns a big integer number from a string
     * @param {string} thousandSeparator Character used to separate thousands groups
     */
    toBigInt( value:             string,
              thousandSeparator: string ): bigint | undefined;



    /**
     * Returns a date from a string
     * @param parseFormat String representing how date is written in string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
     */
    toDate( value:       string,
            parseFormat: string ): Date | undefined;




    /**
     * Returns a string representing a parsed datetime value from another string in provided format
     * @param parsedFormat Representation of how datetime value is written in original string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
     * @param resultFormat Representation of how datetime value must be written in result string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
     */
    toDateString( value:        string,
                  parseFormat:  string,
                  resultFormat: string ): string | undefined;




    /**
     * Returns a decimal number from a string
     */
    toDecimal( value: string ): number | undefined;
    /**
     * Returns a decimal number from a string
     * @param {string} decimalSeparator  Character used to separate decimal part
     */
    toDecimal( value:            string,
               decimalSeparator: string ): number | undefined;
    /**
     * Returns a decimal number from a string
     * @param {string} decimalSeparator  Character used to separate decimal part
     * @param {string} thousandSeparator Character used to separate thousands groups
     */
    toDecimal( value:             string,
               decimalSeparator:  string,
               thousandSeparator: string ): number | undefined;




    /**
     * Returns an integer number from a string
     */
    toInt( value: string ): number | undefined;
    /**
     * Returns an integer number from a string
     * @param {string} thousandSeparator Character used to separate thousands groups
     */
    toInt( value:             string,
           thousandSeparator: string ): number | undefined;

    


    /**
     * Removes specific string or strings (array) from the beginning and the end of a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     */
    trim( value:   string,
          entries: string | string[] ): string;
    /**
     * Removes specific string or strings (array) from the beginning and the end of a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     * @param {boolean} caseSensitive True indicates that the search should respect entries casing
     */
    trim( value:          string,
          entries:        string | string[], 
          caseSensitive?: boolean ): string;




    /**
     * Removes specific string or strings (array) from the end a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     */
    trimEnd( value:   string,
             entries: string | string[] ): string;
    /**
     * Removes specific string or strings (array) from the end a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     * @param {boolean} caseSensitive True indicates that the search should respect entries casing
     */
    trimEnd( value:          string,
             entries:        string | string[], 
             caseSensitive?: boolean ): string;




    /**
     * Removes specific string or strings (array) from the beginning a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     */
    trimStart( value:   string,
               entries: string | string[] ): string;
    /**
     * Removes specific string or strings (array) from the beginning a string 
     * @param {string|string[]} entries String or strings (array) to be removed
     * @param {boolean} caseSensitive True indicates that the search should respect entries casing
     */
    trimStart( value:          string,
               entries:        string | string[], 
               caseSensitive?: boolean ): string;
}