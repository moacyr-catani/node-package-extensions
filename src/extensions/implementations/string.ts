import { XT } from "./../../library/index.js"

export type StringExtractionResult = 
{ 
    start: number, 
    end: number, 
    value: string | undefined
};





// ------------------------------------------------------------------------------------------------------------------------------
// #region String extensions
// ------------------------------------------------------------------------------------------------------------------------------

String.prototype.$_extractBetween = function(p_Start: string | string[] | undefined,
                                             p_End:   string | string[] | undefined = undefined,
                                             p_Words: boolean = false): StringExtractionResult
{
    return XT.String.extractBetween(this as string,
                                    p_Start,
                                    p_End,
                                    p_Words);
} 



String.prototype.$_fromBase64Url = function(): string
{
    return XT.String.fromBase64Url(this as string);
}



String.prototype.$_isInt = function(thousandSeparator: string = ""): boolean
{
    return XT.String.isInt(this as string, 
                           thousandSeparator);
}



String.prototype.$_isNumber = function(thousandSeparator: string = "",
                                       decimalSeparator:  string = "."): boolean
{
    return XT.String.isNumber(this as string,
                              thousandSeparator,
                              decimalSeparator);
}



String.prototype.$_replace = function(p_Search:           string | string[],
                                      p_NewValue:         string,
                                      p_CaseInsensitive : boolean = false): string
{
    // Check param
    if (!Array.isArray(p_Search))
        p_Search = [ p_Search ];


    return XT.String.replace(this as string, 
                             p_Search, 
                             p_NewValue, 
                             p_CaseInsensitive);
}



String.prototype.$_removeSequentialLatinLetters = function(): string
{
    return XT.String.removeSequentialLatinLetters(this as string);
}                   



String.prototype.$_toBase64Url = function(): string
{
    return XT.String.toBase64Url(this as string);
}



String.prototype.$_toBasicLatinLetters = function(): string
{
    return XT.String.toBasicLatinLetters(this as string);
}



String.prototype.$_toBigInt = function(p_ThousandSeparator: string = ""): bigint | undefined
{
    return XT.String.toBigInt(this as string,
                              p_ThousandSeparator);
}



String.prototype.$_toDate = function(p_ParseFormat: string): Date | undefined
{

    return XT.String.toDate(this as string, 
                            p_ParseFormat);
}



String.prototype.$_toDateString = function(p_ParseFormat: string,
                                           p_ResultFormat: string): string | undefined
{
    return XT.String.toDateString(this as string,
                                  p_ParseFormat,
                                  p_ResultFormat);
}



String.prototype.$_toDecimal = function(decimalSeparator:  string = ".",
                                        thousandSeparator: string = ""): number | undefined
{
    return XT.String.toDecimal(this as string,
                               decimalSeparator,
                               thousandSeparator);
}



String.prototype.$_toInt = function(p_ThousandSeparator: string = ""): number | undefined
{
    return XT.String.toInt(this as string,
                           p_ThousandSeparator);
}



String.prototype.$_trim = function (entries:       string | string[],
                                    caseSensitive: boolean = false): string
{
    return XT.String.trim(this as string,
                          entries,
                          caseSensitive);
}



String.prototype.$_trimStart = function (entries:       string | string[],
                                         caseSensitive: boolean = false): string
{
    return XT.String.trimStart(this as string,
                               entries,
                               caseSensitive);
}



String.prototype.$_trimEnd = function (entries:       string |string[],
                                       caseSensitive: boolean = false): string
{
    return XT.String.trimEnd(this as string,
                             entries,
                             caseSensitive);
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// Needed to set this file as a module
export {};