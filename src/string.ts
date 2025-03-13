export type StringExtractionResult = 
{ 
    start: number, 
    end: number, 
    value: string | undefined
};
type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;





// ------------------------------------------------------------------------------------------------------------------------------
// #region Private members and helpers
// ------------------------------------------------------------------------------------------------------------------------------

const m_RECache: Record<string, RegExp> = {};


function GetRegExp(p_Pattern: string,
                   p_Flags:   string = ""): RegExp
{
    const strKey: string = p_Flags + " " + p_Pattern;

    // Check for cache, create if doesn't exist
    if ( !(strKey in m_RECache) )
    {
        m_RECache[strKey] = new RegExp(p_Pattern, p_Flags)
    }


    return m_RECache[strKey];
}



function EscapeRegExp(p_String: string): string
{
    return p_String.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------------------------
// #region String extensions
// ------------------------------------------------------------------------------------------------------------------------------

String.prototype.$_extractBetween = function(p_Start: string | string[] | undefined,
                                             p_End:   string | string[] | undefined = undefined,
                                             p_Words: boolean = false): StringExtractionResult
{
    // Check inputs
    if // Start
    ("undefined" === typeof p_Start || null === p_Start)
        p_Start = "^";

    else
    {
        // Check arrays
        if (!Array.isArray(p_Start))
            p_Start = [p_Start];
    
        p_Start = p_Start.map( strElement => EscapeRegExp(strElement) + (p_Words ? "\\W+" : "") );
        p_Start = p_Start.join('|');
    }


    if // End
    ("undefined" === typeof p_End || null === p_End)
        p_End = "$";

    else
    {
        // Check arrays
        if (!Array.isArray(p_End))
            p_End = [p_End];
    
        p_End = p_End.map( strElement => (p_Words ? "\\W+" : "") + EscapeRegExp(strElement) );
        p_End = p_End.join('|');
    }



    
    // Create regexp
    const objRE:   RegExp                  = new RegExp(`(?<=${p_Start}).*?(?=${p_End})`, 'isgd');
    const arrExec: RegExpMatchArray | null = objRE.exec(this as string);
    
    
    // Check if found
    if (arrExec !== null)
        return { 
                   value: arrExec[0],
                   start: arrExec.index || 0,
                   end:   (arrExec.index || 0) + arrExec[0].length
               };
    else
        return { 
                    value: undefined,
                    start: -1,
                    end:   -1
                };;
} 



String.prototype.$_fromBase64Url = function(): string
{
    return Buffer.from(this, 'base64url').toString('utf-8');
}



String.prototype.$_isInt = function(thousandSeparator: string = ""): boolean
{
    // Check params
    if (thousandSeparator.length > 1)
        throw new Error("Invalid thousand separator");


    return GetRegExp(`^-?\\d{1,3}(${thousandSeparator}\\d{3})*?$`).test(this as string);
}



String.prototype.$_isNumber = function(thousandSeparator: string = "",
                                       decimalSeparator:  string = "."): boolean
{
    // Check params
    if (thousandSeparator.length > 1)
        throw new Error("Invalid thousand separator");
    if (decimalSeparator.length > 1)
        throw new Error("Invalid decimal separator");


    return GetRegExp(`^-?\\d{1,3}(${thousandSeparator}\\d{3})*(\\${decimalSeparator}\\d+)?$`).test(this as string);
}



String.prototype.$_replace = function(p_Search:           string | string[],
                                      p_NewValue:         string,
                                      p_CaseInsensitive : boolean = false): string
{
    // Check param
    if (!Array.isArray(p_Search))
        p_Search = [ p_Search ];


    p_Search = p_Search
              .map( strElement => EscapeRegExp(strElement) )
              .join('|');


    return (<string>this).replace(GetRegExp(p_Search, `g${p_CaseInsensitive ? "i" : ""}`), p_NewValue);
}



String.prototype.$_removeSequentialLatinLetters = function(): string
{
    return (<string>this).replace(GetRegExp("([a-zA-Z])\\1+", "gi"), "$1");
}                   



String.prototype.$_toBase64Url = function(): string
{
    return Buffer.from(this).toString('base64url');
}



String.prototype.$_toBasicLatinLetters = function(): string
{
    const arrAUpper: string[] = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ā", "Ă", "Ą"];
    const arrALower: string[] = ["à", "á", "â", "ã", "ä", "å", "æ", "ā", "ă", "ą"];
    const arrCUpper: string[] = ["Ç", "Ć", "Ĉ", "Ċ", "Č"];
    const arrCLower: string[] = ["ç", "ć", "ĉ", "ċ", "č"];
    const arrDUpper: string[] = ["Ď", "Đ"];
    const arrDLower: string[] = ["ď", "đ"];
    const arrEUpper: string[] = ["È", "É", "Ê", "Ë", "Ē", "Ĕ", "Ė", "Ę", "Ě"];
    const arrELower: string[] = ["è", "é", "ê", "ë", "ē", "ĕ", "ė", "ę", "ě"];
    const arrGUpper: string[] = ["Ĝ", "Ğ", "Ġ", "Ģ"];
    const arrGLower: string[] = ["ĝ", "ğ", "ġ", "ģ"];
    const arrHUpper: string[] = ["Ĥ", "Ħ"];
    const arrHLower: string[] = ["ĥ", "ħ"];
    const arrIUpper: string[] = ["Ì", "Í", "Î", "Ï", "Ĩ", "Ī", "Ĭ", "Į", "İ", "Ĳ"];
    const arrILower: string[] = ["ì", "í", "î", "ï", "ĩ", "ī", "ĭ", "į", "ı", "ĳ"];
    const arrJUpper: string[] = ["Ĵ"];
    const arrJLower: string[] = ["ĵ"];
    const arrKUpper: string[] = ["Ķ"];  
    const arrKLower: string[] = ["ķ", "ĸ"];
    const arrLUpper: string[] = ["Ĺ", "Ļ", "Ľ", "Ŀ", "Ł"];
    const arrLLower: string[] = ["ĺ", "ļ", "ľ", "ŀ", "ł"];
    const arrNUpper: string[] = ["Ñ", "Ń", "Ņ", "Ň"];
    const arrNLower: string[] = ["ñ", "ń", "ņ", "ň"];
    const arrOUpper: string[] = ["Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ō", "Ŏ", "Ő", "Œ"];
    const arrOLower: string[] = ["ò", "ó", "ô", "õ", "ö", "ø", "ō", "ŏ", "ő", "œ"];
    const arrRUpper: string[] = ["Ŕ", "Ŗ", "Ř"];
    const arrRLower: string[] = ["ŕ", "ŗ", "ř"];
    const arrSUpper: string[] = ["Ś", "Ŝ", "Ş", "Š"];
    const arrSLower: string[] = ["ś", "ŝ", "ş", "š", "ß", "ſ"];
    const arrTUpper: string[] = ["Ţ", "Ť", "Ŧ"];
    const arrTLower: string[] = ["ţ", "ť", "ŧ"];
    const arrUUpper: string[] = ["Ù", "Ú", "Û", "Ü", "Ũ", "Ū", "Ŭ", "Ů", "Ű", "Ų"];
    const arrULower: string[] = ["ù", "ú", "û", "ü", "ũ", "ū", "ŭ", "ů", "ű", "ų"];
    const arrWUpper: string[] = ["Ŵ"];
    const arrWLower: string[] = ["ŵ"];
    const arrYUpper: string[] = ["Ý", "Ŷ", "Ÿ"];
    const arrYLower: string[] = ["ý", "ŷ", "ÿ"];
    const arrZUpper: string[] = ["Ź", "Ż", "Ž"];
    const arrZLower: string[] = ["ź", "ż", "ž"];


    return this.$_replace(arrALower, "a")
               .$_replace(arrAUpper, "A")
               .$_replace(arrCLower, "c")
               .$_replace(arrCUpper, "C")
               .$_replace(arrDLower, "d")
               .$_replace(arrDUpper, "D")
               .$_replace(arrELower, "e")
               .$_replace(arrEUpper, "E")
               .$_replace(arrGLower, "g")
               .$_replace(arrGUpper, "G")
               .$_replace(arrHLower, "h")
               .$_replace(arrHUpper, "H")
               .$_replace(arrILower, "i")
               .$_replace(arrIUpper, "I")
               .$_replace(arrJLower, "j")
               .$_replace(arrJUpper, "J")
               .$_replace(arrKLower, "k")
               .$_replace(arrKUpper, "K")
               .$_replace(arrLLower, "l")
               .$_replace(arrLUpper, "L")
               .$_replace(arrNLower, "n")
               .$_replace(arrNUpper, "N")
               .$_replace(arrOLower, "o")
               .$_replace(arrOUpper, "O")
               .$_replace(arrRLower, "r")
               .$_replace(arrRUpper, "R")
               .$_replace(arrSLower, "s")
               .$_replace(arrSUpper, "S")
               .$_replace(arrTLower, "t")
               .$_replace(arrTUpper, "T")
               .$_replace(arrULower, "u")
               .$_replace(arrUUpper, "U")
               .$_replace(arrWLower, "w")
               .$_replace(arrWUpper, "W")
               .$_replace(arrYLower, "y")
               .$_replace(arrYUpper, "Y")
               .$_replace(arrZLower, "z")
               .$_replace(arrZUpper, "Z");
}



String.prototype.$_toDate = function(p_ParseFormat: string): Date | undefined
{
    const value = String(this);
    const objDateParts: any = 
    {
        YYYY:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       NaN  // If not present, throws error
        },
        YY:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       NaN  // If not present, throws error
        },
        MM:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       NaN  // If not present, throws error
        },
        DD:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       NaN  // If not present, throws error
        },
        hh:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       0  // If not present, defaults to 0
        },
        mm:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       0  // If not present, defaults to 0
        },
        ss:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       0  // If not present, defaults to 0
        },
        nnn:
        {
            inde$_start: -1,
            inde$_end:   -1,
            value:       0  // If not present, defaults to 0
        }
    }


    // Scans string for value holders
    for (const strDatePart in objDateParts)
    {
        objDateParts[strDatePart].inde$_start = p_ParseFormat.indexOf(strDatePart);
        objDateParts[strDatePart].inde$_end   = objDateParts[strDatePart].inde$_start + strDatePart.length;

        if (objDateParts[strDatePart].inde$_start >= 0)
        {
            // Get substring from date part position
            const strValue: string = value
                                     .substring(objDateParts[strDatePart].inde$_start,
                                                objDateParts[strDatePart].inde$_end)
                                     .trim();

            // Tries to convert to int only if string represents a valid integer
            if (strValue.$_isInt())
            {
                objDateParts[strDatePart].value = strValue.$_toInt();
            }

            // "Removes" parsed part
            p_ParseFormat.replace(strDatePart, "*".repeat(strDatePart.length));
        }
    }


    // Validate values
    let intDayMax:   number  = 0;
    let blnLeapYear: boolean = (objDateParts.YYYY.value % 4 == 0);


    // Defines maximum day number for every month, including February on leap years
    if ( 1 == objDateParts.MM.value ||
         3 == objDateParts.MM.value ||
         5 == objDateParts.MM.value ||
         7 == objDateParts.MM.value ||
         8 == objDateParts.MM.value ||
        10 == objDateParts.MM.value ||
        12 == objDateParts.MM.value)
    {
        intDayMax = 31;
    }
    else if (2 == objDateParts.MM.value)
    {
        intDayMax = 28 + (blnLeapYear ? 1 : 0);
    }
    else
    {
        intDayMax = 30;
    }

    // Month
    if (objDateParts.MM.value < 1 || objDateParts.MM.value > 12)
    {
        return undefined;
    }

    // Day
    if (objDateParts.DD.value < 1 || objDateParts.DD.value > intDayMax)
    {
        return undefined;
    }

    // Hours
    if (objDateParts.hh.value < 0 || objDateParts.hh.value > 23)
    {
        return undefined;
    }

    // Minutes
    if (objDateParts.mm.value < 0 || objDateParts.mm.value > 59)    
    {
        return undefined;
    }

    // Seconds
    if (objDateParts.ss.value < 0 || objDateParts.ss.value > 59)
    {
        return undefined;
    }

    // Milliseconds. It is not needed to check, since all values in range are valid (0 - 999)



    // Create new date value
    const dtmResult: Date = new Date(objDateParts.YYYY.value,
                                     objDateParts.MM.value - 1, // Javascript defines it this way... January = 0
                                     objDateParts.DD.value,
                                     objDateParts.hh.value,
                                     objDateParts.mm.value,
                                     objDateParts.ss.value,
                                     objDateParts.nnn.value);

    // Checks if date is valid
    if (dtmResult instanceof Date && !isNaN(dtmResult.getTime()))
    {
        // Adjust for timezone
        //const userTimezoneOffset: number = dtmResult.getTimezoneOffset() * 60000;
        //return new Date(dtmResult.getTime() - userTimezoneOffset);

        return dtmResult;    
    }


    return undefined;
}



String.prototype.$_toDateString = function(p_ParseFormat: string,
                                           p_ResultFormat: string): string | undefined
{
    const dtmDate: Date | undefined = this.$_toDate(p_ParseFormat);

    return "undefined" != typeof dtmDate ? 
                dtmDate.$_toString(p_ResultFormat) :
                undefined;
}



String.prototype.$_toDecimal = function(p_DecimalPlaces: DecimalPlaces): number | undefined
{
    // Checks if value is a valid number
    if (this.$_isNumber())
    {
        return parseFloat(parseFloat(String(this))
                        .toFixed(p_DecimalPlaces));
    }

    return undefined;
}


String.prototype.$_toInt = function(): number | undefined
{
    // Checks if value is a valid integer
    if (this.$_isInt())
    {
        return parseInt(String(this));
    }

    return undefined;
}


// String.prototype.$_trimChar = function(p_Char: string): string
// {
//     p_Char = EscapeRegExp(p_Char);

//     return this.replace(new RegExp(`^[${p_Char}]+|[${p_Char}]+$`, "g"),
//                         "");
// }


String.prototype.$_trim = function (entries:       string | string[],
                                    caseSensitive: boolean): string
{
    return this.$_trimStart(entries, caseSensitive)
               .$_trimEnd(entries, caseSensitive);
}



String.prototype.$_trimStart = function (entries:       string | string[],
                                         caseSensitive: boolean = false): string
{
    let   intIndex:  number  = 0;
    let   intLength: number  = this.length;
    let   blnFound:  boolean = false;
    const strText:   string  = caseSensitive ? this as string : this.toLowerCase();


    // Check params
    if (!Array.isArray(entries))
    {
        entries = [entries];
    }


    while (true)
    {
        // Reached end of string
        if (intIndex >= intLength)
        {
            return "";
        }

        
        // Reset boolean
        blnFound = false;


        // Check if character is in array
        for (const Entry of entries)
        {
            if (strText.substring(intIndex).startsWith( (caseSensitive ? Entry : Entry.toLowerCase()) ))
            {
                intIndex += Entry.length;
                blnFound = true;
            }
        }


        if (!blnFound) 
        {
            return this.substring(intIndex);
        }
    }
}



String.prototype.$_trimEnd = function (entries:       string |string[],
                                       caseSensitive: boolean): string
{
    let  intIndex:  number  = 0;
    let  intLength: number  = this.length;
    let  blnFound:  boolean = false;
    const strText:  string  = caseSensitive ? this as string : this.toLowerCase();


    // Check params
    if (!Array.isArray(entries))
    {
        entries = [entries];
    }

        
    while (true)
    {
        // Reached end of string
        if (intIndex >= intLength)
        {
            return "";
        }

        
        // Reset boolean
        blnFound = false;


        // Check if character is in array
        for (const Entry of entries)
        {
            if (strText.substring(intIndex, intLength).endsWith( (caseSensitive ? Entry : Entry.toLowerCase()) ))
            {
                intLength -= Entry.length;
                blnFound = true;
            }
        }


        if (!blnFound) 
        {
            return this.substring(intIndex, intLength);
        }
    }
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// Needed to set this file as a module
export {};