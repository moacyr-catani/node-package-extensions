export * as Constants from "./constants.js";


export type StringExtractionResult = 
{ 
    start: number, 
    end:   number, 
    value: string | undefined
};

export type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

export enum IntegerRepresentations
{
    BufferUInt8       = "BUFFER_UINT8",
    Number            = "NUMBER",
    BigInt            = "BIGINT",
    StringBinary      = "STRING_BINARY",
    StringOctal       = "STRING_OCTAL",
    StringDecimal     = "STRING_DECIMAL",
    StringHexadecimal = "STRING_HEXADECIMAL",
    StringBase36      = "STRING_BASE36",
    StringBase64      = "STRING_BASE64",
    StringBase64Url   = "STRING_BASE64_URL"
}


export enum WeekDays
{
    SUNDAY    = "SUNDAY",
    MONDAY    = "MONDAY",
    TUESDAY   = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY  = "THURSDAY",
    FRIDAY    = "FRIDAY",
    SATURDAY  = "SATURDAY" 
}



