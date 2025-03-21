import { IStringLib}             from "./interfaces/string.js"
import { DateLib }               from "./date.js";
import { StringExtractionResult} from "./../common/index.js"






// ------------------------------------------------------------------------------------------------------------------------------
// #region Private members and helpers
// ------------------------------------------------------------------------------------------------------------------------------


// Constants
const LATIN_LETTERS_A_UPPER: string[] = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ā", "Ă", "Ą"];
const LATIN_LETTERS_A_LOWER: string[] = ["à", "á", "â", "ã", "ä", "å", "æ", "ā", "ă", "ą"];
const LATIN_LETTERS_C_UPPER: string[] = ["Ç", "Ć", "Ĉ", "Ċ", "Č"];
const LATIN_LETTERS_C_LOWER: string[] = ["ç", "ć", "ĉ", "ċ", "č"];
const LATIN_LETTERS_D_UPPER: string[] = ["Ď", "Đ"];
const LATIN_LETTERS_D_LOWER: string[] = ["ď", "đ"];
const LATIN_LETTERS_E_UPPER: string[] = ["È", "É", "Ê", "Ë", "Ē", "Ĕ", "Ė", "Ę", "Ě"];
const LATIN_LETTERS_E_LOWER: string[] = ["è", "é", "ê", "ë", "ē", "ĕ", "ė", "ę", "ě"];
const LATIN_LETTERS_G_UPPER: string[] = ["Ĝ", "Ğ", "Ġ", "Ģ"];
const LATIN_LETTERS_G_LOWER: string[] = ["ĝ", "ğ", "ġ", "ģ"];
const LATIN_LETTERS_H_UPPER: string[] = ["Ĥ", "Ħ"];
const LATIN_LETTERS_H_LOWER: string[] = ["ĥ", "ħ"];
const LATIN_LETTERS_I_UPPER: string[] = ["Ì", "Í", "Î", "Ï", "Ĩ", "Ī", "Ĭ", "Į", "İ", "Ĳ"];
const LATIN_LETTERS_I_LOWER: string[] = ["ì", "í", "î", "ï", "ĩ", "ī", "ĭ", "į", "ı", "ĳ"];
const LATIN_LETTERS_J_UPPER: string[] = ["Ĵ"];
const LATIN_LETTERS_J_LOWER: string[] = ["ĵ"];
const LATIN_LETTERS_K_UPPER: string[] = ["Ķ"];  
const LATIN_LETTERS_K_LOWER: string[] = ["ķ", "ĸ"];
const LATIN_LETTERS_L_UPPER: string[] = ["Ĺ", "Ļ", "Ľ", "Ŀ", "Ł"];
const LATIN_LETTERS_L_LOWER: string[] = ["ĺ", "ļ", "ľ", "ŀ", "ł"];
const LATIN_LETTERS_N_UPPER: string[] = ["Ñ", "Ń", "Ņ", "Ň"];
const LATIN_LETTERS_N_LOWER: string[] = ["ñ", "ń", "ņ", "ň"];
const LATIN_LETTERS_O_UPPER: string[] = ["Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ō", "Ŏ", "Ő", "Œ"];
const LATIN_LETTERS_O_LOWER: string[] = ["ò", "ó", "ô", "õ", "ö", "ø", "ō", "ŏ", "ő", "œ"];
const LATIN_LETTERS_R_UPPER: string[] = ["Ŕ", "Ŗ", "Ř"];
const LATIN_LETTERS_R_LOWER: string[] = ["ŕ", "ŗ", "ř"];
const LATIN_LETTERS_S_UPPER: string[] = ["Ś", "Ŝ", "Ş", "Š"];
const LATIN_LETTERS_S_LOWER: string[] = ["ś", "ŝ", "ş", "š", "ß", "ſ"];
const LATIN_LETTERS_T_UPPER: string[] = ["Ţ", "Ť", "Ŧ"];
const LATIN_LETTERS_T_LOWER: string[] = ["ţ", "ť", "ŧ"];
const LATIN_LETTERS_U_UPPER: string[] = ["Ù", "Ú", "Û", "Ü", "Ũ", "Ū", "Ŭ", "Ů", "Ű", "Ų"];
const LATIN_LETTERS_U_LOWER: string[] = ["ù", "ú", "û", "ü", "ũ", "ū", "ŭ", "ů", "ű", "ų"];
const LATIN_LETTERS_W_UPPER: string[] = ["Ŵ"];
const LATIN_LETTERS_W_LOWER: string[] = ["ŵ"];
const LATIN_LETTERS_Y_UPPER: string[] = ["Ý", "Ŷ", "Ÿ"];
const LATIN_LETTERS_Y_LOWER: string[] = ["ý", "ŷ", "ÿ"];
const LATIN_LETTERS_Z_UPPER: string[] = ["Ź", "Ż", "Ž"];
const LATIN_LETTERS_Z_LOWER: string[] = ["ź", "ż", "ž"];




// Cache for regular expressions
const m_RECache: Record<string, RegExp> = {};



// Get a regular expression from cache
function GetRegExp(p_Pattern: string,
                   p_Flags:   string = ""): RegExp
{
    const strKey: string = p_Flags + " " + p_Pattern;

    // Check for cache, create if doesn't exist
    if ( !(strKey in m_RECache) )
        m_RECache[strKey] = new RegExp(p_Pattern, p_Flags)


    return m_RECache[strKey];
}


// Escape regular expressions characters
function EscapeRegExp(p_String: string): string
{
    //return p_String.replace(/([()[{*+.$^\\|?])/g, '\\$&');
    return p_String.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------





// // ------------------------------------------------------------------------------------------------------------------------------
// // #region Interface
// // ------------------------------------------------------------------------------------------------------------------------------

// interface IStringLib
// {
//     /**
//      * Extracts string among specific substrings
//      * @param {string|string[]} start String or strings (array) that are just before the text you are looking for
//      * @param {string|string[]} end   String or strings (array) that are just after the text you are looking for
//      * @param {boolean}         words If true, indicate the text you are looking for is surrounded by 'non word' characters, i.e.: spaces, tabs, new lines, ...
//      * @example 
//      * const procedure = 
//      * `CREATE PROCEDURE sp_Test
//      * AS
//      * SELECT * FROM [TABLE]`
//      * 
//      * const procName  = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
//      * const statement = procedure.$_extractBetween("AS", "", true).value;
//      */
//     extractBetween( value:  string,
//                     start?: string | string[] | undefined,
//                     end?:   string | string[] | undefined,
//                     words?: boolean ): StringExtractionResult;                          




//     /**
//      * Decodes Base64Url value into string
//      */
//     fromBase64Url( value: string ): string;




//     /**
//      * Checks if a string represents a valid integer value in decimal format (using numerals from 0 to 9)
//      */
//     isInt( value: string ): boolean;
//     /**
//      * Checks if a string represents a valid integer in decimal format (using numerals from 0 to 9)
//      * @param {string} thousandSeparator Character used to separate thousands groups
//      */
//     isInt( value:             string,
//            thousandSeparator: string ): boolean;




//     /**
//      * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
//      */
//     isNumber( value: string ): boolean;
//     /**
//      * Checks if a string represents a valid number in decimal format (using numerals from 0 to 9)
//      * @param {string} thousandSeparator Character used to separate thousands groups
//      * @param {string} decimalSeparator Character used to separate decimal part
//      */
//     isNumber( value:             string,
//               thousandSeparator: string,
//               decimalSeparator:  string ): boolean;
    



//     /**
//      * Replaces a substring for a new value.
//      * All occurrences of the searched string will be replaced
//      * @param {string}  search String to be searched and replaced
//      * @param {string}  newValue New string
//      * @param {boolean} caseInsensitive If true, casing of the searched string will be ignored
//      */
//     replace(value:            string,
//             search:           string,
//             newValue:         string,
//             caseInsensitive?: boolean): string;
//     /**
//      * Replaces several substrings for a new value.
//      * All occurrences of the searched string will be replaced
//      * @param {string[]} search Array with strings to be searched and replaced
//      * @param {string}   newValue New string
//      * @param {boolean}  caseInsensitive If true, casing of the searched string will be ignored
//      */
//     replace( value:            string,
//              search:           string[],
//              newValue:         string,
//              caseInsensitive?: boolean): string;




//     /**
//      * Remove sequential latin characters
//      * @example "immediately " will be replaced by "imediately "
//      */
//     removeSequentialLatinLetters( value: string ): string;




//     /**
//      * Encodes string into Base64Url value
//      */
//     toBase64Url( value: string ): string;




//     /**
//      * Keeps only basic latin letter
//      * @example "á ô ç ñ" will be replaced by "a o c n"
//      */
//     toBasicLatinLetters( value: string ): string




//     /**
//      * Returns a date from a string
//      * @param parseFormat String representing how date is written in string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
//      */
//     toDate( value:       string,
//             parseFormat: string ): Date | undefined;




//     /**
//      * Returns a string representing a parsed datetime value from another string in provided format
//      * @param parsedFormat Representation of how datetime value is written in original string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
//      * @param resultFormat Representation of how datetime value must be written in result string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
//      */
//     toDateString( value:        string,
//                   parseFormat:  string,
//                   resultFormat: string ): string | undefined;




//     /**
//      * Returns a decimal number from a string
//      */
//     toDecimal( value: string ): number | undefined;
//     /**
//      * Returns a decimal number from a string
//      * @param {string} decimalSeparator  Character used to separate decimal part
//      */
//     toDecimal( value:            string,
//                decimalSeparator: string ): number | undefined;
//     /**
//      * Returns a decimal number from a string
//      * @param {string} decimalSeparator  Character used to separate decimal part
//      * @param {string} thousandSeparator Character used to separate thousands groups
//      */
//     toDecimal( value:             string,
//                decimalSeparator:  string,
//                thousandSeparator: string ): number | undefined;




//     /**
//      * Returns an integer number from a string
//      */
//     toInt( value: string ): number | undefined;
//     /**
//      * Returns an integer number from a string
//      * @param {string} thousandSeparator Character used to separate thousands groups
//      */
//     toInt( value:             string,
//            thousandSeparator: string ): number | undefined;

    


//     /**
//      * Removes specific string or strings (array) from the beginning and the end of a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      */
//     trim( value:   string,
//           entries: string | string[] ): string;
//     /**
//      * Removes specific string or strings (array) from the beginning and the end of a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      * @param {boolean} caseSensitive True indicates that the search should respect entries casing
//      */
//     trim( value:          string,
//           entries:        string | string[], 
//           caseSensitive?: boolean ): string;




//     /**
//      * Removes specific string or strings (array) from the end a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      */
//     trimEnd( value:   string,
//              entries: string | string[] ): string;
//     /**
//      * Removes specific string or strings (array) from the end a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      * @param {boolean} caseSensitive True indicates that the search should respect entries casing
//      */
//     trimEnd( value:          string,
//              entries:        string | string[], 
//              caseSensitive?: boolean ): string;




//     /**
//      * Removes specific string or strings (array) from the beginning a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      */
//     trimStart( value:   string,
//                entries: string | string[] ): string;
//     /**
//      * Removes specific string or strings (array) from the beginning a string 
//      * @param {string|string[]} entries String or strings (array) to be removed
//      * @param {boolean} caseSensitive True indicates that the search should respect entries casing
//      */
//     trimStart( value:          string,
//                entries:        string | string[], 
//                caseSensitive?: boolean ): string;
// }

// // #endregion
// // ------------------------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------------------------
// #region String extensions
// ------------------------------------------------------------------------------------------------------------------------------

const StringLib: IStringLib =
{
    extractBetween (p_Value: string,
                    p_Start: string | string[] | undefined,
                    p_End:   string | string[] | undefined = undefined,
                    p_Words: boolean = false): StringExtractionResult
    {
        // Check inputs
        if ("undefined" === typeof p_Start || null === p_Start)  // Start
            p_Start = "^";

        else
        {
            // Check arrays
            if (!Array.isArray(p_Start))
                p_Start = [p_Start];
        
            p_Start = p_Start.map( strElement => EscapeRegExp(strElement) + (p_Words ? "\\W+" : "") )
                            .join('|');
        }


        if ("undefined" === typeof p_End || null === p_End) // End
            p_End = "$";

        else
        {
            // Check arrays
            if (!Array.isArray(p_End))
                p_End = [p_End];
        
            p_End = p_End.map( strElement => (p_Words ? "\\W+" : "") + EscapeRegExp(strElement) )
                        .join('|');
        }

        
        // Create regexp
        const objRE:   RegExp                  = new RegExp(`(?<=${p_Start}).*?(?=${p_End})`, 'isgd');
        const arrExec: RegExpMatchArray | null = objRE.exec(p_Value);
        
        
        // Check if found
        if (arrExec !== null)
            return { 
                    value: p_Words ? arrExec[0].trim() : arrExec[0],
                    start: arrExec.index || 0,
                    end:   (arrExec.index || 0) + arrExec[0].length
                };
        else
            return { 
                        value: undefined,
                        start: -1,
                        end:   -1
                    };;
    },



    fromBase64Url( p_Value: string ): string
    {
        return Buffer.from(p_Value, 'base64url').toString('utf-8');
    },



    isInt( p_Value:           string,
           thousandSeparator: string = "" ): boolean
    {
        // Check params
        if (thousandSeparator.length > 1)
            throw new Error("Invalid thousand separator");


        return GetRegExp(`^-?\\d{1,3}(${thousandSeparator}\\d{3})*?$`).test(p_Value);
    },



    isNumber( p_Value:           string,
              thousandSeparator: string = "",
              decimalSeparator:  string = "." ): boolean
    {
        // Check params
        if (thousandSeparator.length > 1)
            throw new Error("Invalid thousand separator");
        if (decimalSeparator.length > 1)
            throw new Error("Invalid decimal separator");


        return GetRegExp(`^-?\\d{1,3}(${thousandSeparator}\\d{3})*(\\${decimalSeparator}\\d+)?$`).test(p_Value);
    },



    replace (p_Value:            string,
             p_Search:           string | string[],
             p_NewValue:         string,
             p_CaseInsensitive : boolean = false ): string
    {
        // Check param
        if (!Array.isArray(p_Search))
            p_Search = [ p_Search ];


        p_Search = p_Search
                .map( strElement => EscapeRegExp(strElement) )
                .join('|');


        return p_Value.replace(GetRegExp(p_Search, `g${p_CaseInsensitive ? "i" : ""}`), p_NewValue);
    },



    removeSequentialLatinLetters( p_Value: string ): string
    {
        return p_Value.replace(GetRegExp("([a-zA-Z])\\1+", "gi"), "$1");
    },



    toBase64Url( p_Value: string ): string
    {
        return Buffer.from(p_Value).toString('base64url');
    },



    toBasicLatinLetters( p_Value: string ): string
    {
        // const arrAUpper: string[] = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ā", "Ă", "Ą"];
        // const arrALower: string[] = ["à", "á", "â", "ã", "ä", "å", "æ", "ā", "ă", "ą"];
        // const arrCUpper: string[] = ["Ç", "Ć", "Ĉ", "Ċ", "Č"];
        // const arrCLower: string[] = ["ç", "ć", "ĉ", "ċ", "č"];
        // const arrDUpper: string[] = ["Ď", "Đ"];
        // const arrDLower: string[] = ["ď", "đ"];
        // const arrEUpper: string[] = ["È", "É", "Ê", "Ë", "Ē", "Ĕ", "Ė", "Ę", "Ě"];
        // const arrELower: string[] = ["è", "é", "ê", "ë", "ē", "ĕ", "ė", "ę", "ě"];
        // const arrGUpper: string[] = ["Ĝ", "Ğ", "Ġ", "Ģ"];
        // const arrGLower: string[] = ["ĝ", "ğ", "ġ", "ģ"];
        // const arrHUpper: string[] = ["Ĥ", "Ħ"];
        // const arrHLower: string[] = ["ĥ", "ħ"];
        // const arrIUpper: string[] = ["Ì", "Í", "Î", "Ï", "Ĩ", "Ī", "Ĭ", "Į", "İ", "Ĳ"];
        // const arrILower: string[] = ["ì", "í", "î", "ï", "ĩ", "ī", "ĭ", "į", "ı", "ĳ"];
        // const arrJUpper: string[] = ["Ĵ"];
        // const arrJLower: string[] = ["ĵ"];
        // const arrKUpper: string[] = ["Ķ"];  
        // const arrKLower: string[] = ["ķ", "ĸ"];
        // const arrLUpper: string[] = ["Ĺ", "Ļ", "Ľ", "Ŀ", "Ł"];
        // const arrLLower: string[] = ["ĺ", "ļ", "ľ", "ŀ", "ł"];
        // const arrNUpper: string[] = ["Ñ", "Ń", "Ņ", "Ň"];
        // const arrNLower: string[] = ["ñ", "ń", "ņ", "ň"];
        // const arrOUpper: string[] = ["Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ō", "Ŏ", "Ő", "Œ"];
        // const arrOLower: string[] = ["ò", "ó", "ô", "õ", "ö", "ø", "ō", "ŏ", "ő", "œ"];
        // const arrRUpper: string[] = ["Ŕ", "Ŗ", "Ř"];
        // const arrRLower: string[] = ["ŕ", "ŗ", "ř"];
        // const arrSUpper: string[] = ["Ś", "Ŝ", "Ş", "Š"];
        // const arrSLower: string[] = ["ś", "ŝ", "ş", "š", "ß", "ſ"];
        // const arrTUpper: string[] = ["Ţ", "Ť", "Ŧ"];
        // const arrTLower: string[] = ["ţ", "ť", "ŧ"];
        // const arrUUpper: string[] = ["Ù", "Ú", "Û", "Ü", "Ũ", "Ū", "Ŭ", "Ů", "Ű", "Ų"];
        // const arrULower: string[] = ["ù", "ú", "û", "ü", "ũ", "ū", "ŭ", "ů", "ű", "ų"];
        // const arrWUpper: string[] = ["Ŵ"];
        // const arrWLower: string[] = ["ŵ"];
        // const arrYUpper: string[] = ["Ý", "Ŷ", "Ÿ"];
        // const arrYLower: string[] = ["ý", "ŷ", "ÿ"];
        // const arrZUpper: string[] = ["Ź", "Ż", "Ž"];
        // const arrZLower: string[] = ["ź", "ż", "ž"];

        return  StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                StringLib.replace(
                    p_Value, 
                    LATIN_LETTERS_A_LOWER, "a"),
                    LATIN_LETTERS_A_UPPER, "A"),
                    LATIN_LETTERS_C_LOWER, "c"),
                    LATIN_LETTERS_C_UPPER, "C"),
                    LATIN_LETTERS_D_LOWER, "d"),
                    LATIN_LETTERS_D_UPPER, "D"),
                    LATIN_LETTERS_E_LOWER, "e"),
                    LATIN_LETTERS_E_UPPER, "E"),
                    LATIN_LETTERS_G_LOWER, "g"),
                    LATIN_LETTERS_G_UPPER, "G"),
                    LATIN_LETTERS_H_LOWER, "h"),
                    LATIN_LETTERS_H_UPPER, "H"),
                    LATIN_LETTERS_I_LOWER, "i"),
                    LATIN_LETTERS_I_UPPER, "I"),
                    LATIN_LETTERS_J_LOWER, "j"),
                    LATIN_LETTERS_J_UPPER, "J"),
                    LATIN_LETTERS_K_LOWER, "k"),
                    LATIN_LETTERS_K_UPPER, "K"),
                    LATIN_LETTERS_L_LOWER, "l"),
                    LATIN_LETTERS_L_UPPER, "L"),
                    LATIN_LETTERS_N_LOWER, "n"),
                    LATIN_LETTERS_N_UPPER, "N"),
                    LATIN_LETTERS_O_LOWER, "o"),
                    LATIN_LETTERS_O_UPPER, "O"),
                    LATIN_LETTERS_R_LOWER, "r"),
                    LATIN_LETTERS_R_UPPER, "R"),
                    LATIN_LETTERS_S_LOWER, "s"),
                    LATIN_LETTERS_S_UPPER, "S"),
                    LATIN_LETTERS_T_LOWER, "t"),
                    LATIN_LETTERS_T_UPPER, "T"),
                    LATIN_LETTERS_U_LOWER, "u"),
                    LATIN_LETTERS_U_UPPER, "U"),
                    LATIN_LETTERS_W_LOWER, "w"),
                    LATIN_LETTERS_W_UPPER, "W"),
                    LATIN_LETTERS_Y_LOWER, "y"),
                    LATIN_LETTERS_Y_UPPER, "Y"),
                    LATIN_LETTERS_Z_LOWER, "z"),
                    LATIN_LETTERS_Z_UPPER, "Z");



        // return p_Value.$_replace(arrALower, "a")
        //         .$_replace(arrAUpper, "A")
        //         .$_replace(arrCLower, "c")
        //         .$_replace(arrCUpper, "C")
        //         .$_replace(arrDLower, "d")
        //         .$_replace(arrDUpper, "D")
        //         .$_replace(arrELower, "e")
        //         .$_replace(arrEUpper, "E")
        //         .$_replace(arrGLower, "g")
        //         .$_replace(arrGUpper, "G")
        //         .$_replace(arrHLower, "h")
        //         .$_replace(arrHUpper, "H")
        //         .$_replace(arrILower, "i")
        //         .$_replace(arrIUpper, "I")
        //         .$_replace(arrJLower, "j")
        //         .$_replace(arrJUpper, "J")
        //         .$_replace(arrKLower, "k")
        //         .$_replace(arrKUpper, "K")
        //         .$_replace(arrLLower, "l")
        //         .$_replace(arrLUpper, "L")
        //         .$_replace(arrNLower, "n")
        //         .$_replace(arrNUpper, "N")
        //         .$_replace(arrOLower, "o")
        //         .$_replace(arrOUpper, "O")
        //         .$_replace(arrRLower, "r")
        //         .$_replace(arrRUpper, "R")
        //         .$_replace(arrSLower, "s")
        //         .$_replace(arrSUpper, "S")
        //         .$_replace(arrTLower, "t")
        //         .$_replace(arrTUpper, "T")
        //         .$_replace(arrULower, "u")
        //         .$_replace(arrUUpper, "U")
        //         .$_replace(arrWLower, "w")
        //         .$_replace(arrWUpper, "W")
        //         .$_replace(arrYLower, "y")
        //         .$_replace(arrYUpper, "Y")
        //         .$_replace(arrZLower, "z")
        //         .$_replace(arrZUpper, "Z");
    },



    toDate( p_Value:       string,
            p_ParseFormat: string ): Date | undefined
    {
        const objDateParts: any = 
        {
            YYYY:
            {
                index_start: -1,
                index_end:   -1,
                value:       NaN  // If not present, throws error
            },
            YY:
            {
                index_start: -1,
                index_end:   -1,
                value:       NaN  // If not present, throws error
            },
            MM:
            {
                index_start: -1,
                index_end:   -1,
                value:       NaN  // If not present, throws error
            },
            DD:
            {
                index_start: -1,
                index_end:   -1,
                value:       NaN  // If not present, throws error
            },
            hh:
            {
                index_start: -1,
                index_end:   -1,
                value:       0  // If not present, defaults to 0
            },
            mm:
            {
                index_start: -1,
                index_end:   -1,
                value:       0  // If not present, defaults to 0
            },
            ss:
            {
                index_start: -1,
                index_end:   -1,
                value:       0  // If not present, defaults to 0
            },
            nnn:
            {
                index_start: -1,
                index_end:   -1,
                value:       0  // If not present, defaults to 0
            }
        }


        // Scans string for value holders
        for (const strDatePart in objDateParts)
        {
            objDateParts[strDatePart].index_start = p_ParseFormat.indexOf(strDatePart);
            objDateParts[strDatePart].index_end   = objDateParts[strDatePart].index_start + strDatePart.length;

            if (objDateParts[strDatePart].index_start >= 0)
            {
                // Get substring from date part position
                const strValue: string = p_Value
                                        .substring(objDateParts[strDatePart].index_start,
                                                    objDateParts[strDatePart].index_end)
                                        .trim();

                // Tries to convert to int only if string represents a valid integer
                if ( StringLib.isInt(strValue)) //  strValue.$_isInt())
                    objDateParts[strDatePart].value = StringLib.toInt(strValue); //  strValue.$_toInt();


                // "Removes" parsed part
                p_ParseFormat.replace(strDatePart, "*".repeat(strDatePart.length));
            }
        }


        // Validate values
        let intDayMax:   number  = 0;
        let blnLeapYear: boolean = (objDateParts.YYYY.value % 4 == 0);


        // Defines maximum day number for every month, including February on leap years
        if ( 1  == objDateParts.MM.value ||
             3  == objDateParts.MM.value ||
             5  == objDateParts.MM.value ||
             7  == objDateParts.MM.value ||
             8  == objDateParts.MM.value ||
             10 == objDateParts.MM.value ||
             12 == objDateParts.MM.value)
             intDayMax = 31;

        else if (2 == objDateParts.MM.value)
            intDayMax = 28 + (blnLeapYear ? 1 : 0);


        else
            intDayMax = 30;

            
        // Month
        if (objDateParts.MM.value < 1 || objDateParts.MM.value > 12)
            return undefined;

        
        // Day
        if (objDateParts.DD.value < 1 || objDateParts.DD.value > intDayMax)
            return undefined;


        // Hours
        if (objDateParts.hh.value < 0 || objDateParts.hh.value > 23)
            return undefined;

        
        // Minutes
        if (objDateParts.mm.value < 0 || objDateParts.mm.value > 59)    
            return undefined;

        
        // Seconds
        if (objDateParts.ss.value < 0 || objDateParts.ss.value > 59)
            return undefined;

        
        // Milliseconds. It is not needed to check, since all values in range are valid (0 - 999)



        // Create new date value
        const dtmResult: Date = new Date(objDateParts.YYYY.value,
                                         objDateParts.MM.value - 1, // Javascript defines it this way... January = 0
                                         objDateParts.DD.value,
                                         objDateParts.hh.value,
                                         objDateParts.mm.value,
                                         objDateParts.ss.value,
                                         objDateParts.nnn.value);


        // Adjust for timezone
        //const userTimezoneOffset: number = dtmResult.getTimezoneOffset() * 60000;
        //return new Date(dtmResult.getTime() - userTimezoneOffset);


        // Checks if date is valid
        if (dtmResult instanceof Date && !isNaN(dtmResult.getTime()))
            return dtmResult;    


        return undefined;
    },



    toDateString( p_Value: string,
                  p_ParseFormat: string,
                  p_ResultFormat: string ): string | undefined
    {
        const dtmDate: Date | undefined = StringLib.toDate(p_Value, p_ParseFormat); //  this.$_toDate(p_ParseFormat);

        return "undefined" != typeof dtmDate ? 
                    DateLib.toString(dtmDate, p_ResultFormat) : //  dtmDate.$_toString(p_ResultFormat) :
                    undefined;
    },



    toDecimal( p_Value:           string,
               decimalSeparator:  string = ".",
               thousandSeparator: string = "" ): number | undefined
    {
        // Checks if value is a valid number
        if (StringLib.isNumber(p_Value, thousandSeparator, decimalSeparator)) //  this.$_isNumber(thousandSeparator, decimalSeparator))
        {
            if (thousandSeparator !== "")
                p_Value = StringLib.replace(p_Value, thousandSeparator, ""); //  strValue.$_replace(thousandSeparator, "");

            if (decimalSeparator !== ".")
                p_Value = p_Value.replace(decimalSeparator, ".");

            return parseFloat(p_Value);
        }

        return undefined;
    },



    toInt( p_Value:             string,
           p_ThousandSeparator: string = "" ): number | undefined
    {
        // Checks if value is a valid integer
        if (StringLib.isInt(p_Value, p_ThousandSeparator)) // this.$_isInt(p_ThousandSeparator))
            return parseInt( p_ThousandSeparator ? 
                                StringLib.replace(p_Value, p_ThousandSeparator, "") : // p_Value.$_replace(p_ThousandSeparator, "") : 
                                p_Value); 

        return undefined;
    },



    trim( p_Value:         string,
          p_Entries:       string | string[],
          p_CaseSensitive: boolean = false ): string
    {
        return StringLib.trimEnd(
               StringLib.trimStart(
                    p_Value, 
                    p_Entries, p_CaseSensitive), // this.$_trimStart(p_Entries, p_CaseSensitive)
                    p_Entries, p_CaseSensitive);
    },



    trimStart( p_Value:         string,
               p_Entries:       string | string[],
               p_CaseSensitive: boolean = false): string
    {
        let   intIndex:  number  = 0;
        let   intLength: number  = p_Value.length;
        let   blnFound:  boolean = false;
        const strText:   string  = p_CaseSensitive ? p_Value : p_Value.toLowerCase();


        // Check params
        if (!Array.isArray(p_Entries))
            p_Entries = [p_Entries];


        while (true)
        {
            // Reached end of string
            if (intIndex >= intLength)
                return "";

            
            // Reset boolean
            blnFound = false;


            // Check if character is in array
            for (const Entry of p_Entries)
            {
                if (strText.substring(intIndex).startsWith( (p_CaseSensitive ? Entry : Entry.toLowerCase()) ))
                {
                    intIndex += Entry.length;
                    blnFound = true;
                }
            }


            if (!blnFound) 
                return p_Value.substring(intIndex);
        }
    },



    trimEnd( p_Value:         string,
             p_Entries:       string |string[],
             p_CaseSensitive: boolean = false ): string
    {
        let  intIndex:  number  = 0;
        let  intLength: number  = p_Value.length;
        let  blnFound:  boolean = false;
        const strText:  string  = p_CaseSensitive ? p_Value : p_Value.toLowerCase();


        // Check params
        if (!Array.isArray(p_Entries))
            p_Entries = [p_Entries];

            
        while (true)
        {
            // Reached end of string
            if (intIndex >= intLength)
                return "";

            
            // Reset boolean
            blnFound = false;


            // Check if character is in array
            for (const Entry of p_Entries)
            {
                if (strText.substring(intIndex, intLength).endsWith( (p_CaseSensitive ? Entry : Entry.toLowerCase()) ))
                {
                    intLength -= Entry.length;
                    blnFound = true;
                }
            }


            if (!blnFound) 
                return p_Value.substring(intIndex, intLength);
        }
    }
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------



// Export object
Object.seal( StringLib )
export  { StringLib,
          StringExtractionResult };