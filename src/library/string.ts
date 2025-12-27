import { IStringLib}             from "./interfaces/string.js"
import { DateLib }               from "./date.js";
import { ParsedDate }            from "./../common/parsed-date.js"
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
                    };
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


        return GetRegExp(`^[-+]?\\d{1,3}(${EscapeRegExp(thousandSeparator)}\\d{3})*?$`).test(p_Value);
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
    },



    toBigInt( p_Value:             string,
              p_ThousandSeparator: string = "" ): bigint | undefined
    {
        // Checks if value is a valid integer
        if (StringLib.isInt(p_Value, p_ThousandSeparator))
            return BigInt( p_ThousandSeparator ? 
                                StringLib.replace(p_Value, p_ThousandSeparator, "") :
                                p_Value); 

        return undefined;
    },



    toDate( p_Value:       string,
            p_ParseFormat: string ): Date | undefined
    {
        const objParse: ParsedDate = new ParsedDate(p_Value, p_ParseFormat, StringLib);

        if (!objParse.Invalid)
            return objParse.toDate();


        return undefined;
    },



    toDateString( p_Value: string,
                  p_ParseFormat: string,
                  p_ResultFormat: string ): string | undefined
    {
        const dtmDate: Date | undefined = StringLib.toDate(p_Value, p_ParseFormat);

        return "undefined" != typeof dtmDate ? 
                    DateLib.toString(dtmDate, p_ResultFormat) :
                    undefined;
    },



    toDecimal( p_Value:           string,
               decimalSeparator:  string = ".",
               thousandSeparator: string = "" ): number | undefined
    {
        // Checks if value is a valid number
        if (StringLib.isNumber(p_Value, thousandSeparator, decimalSeparator))
        {
            if (thousandSeparator !== "")
                p_Value = StringLib.replace(p_Value, thousandSeparator, "");

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
        if (StringLib.isInt(p_Value, p_ThousandSeparator))
            return parseInt( p_ThousandSeparator ? 
                                StringLib.replace(p_Value, p_ThousandSeparator, "") :
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
                    p_Entries, p_CaseSensitive),
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