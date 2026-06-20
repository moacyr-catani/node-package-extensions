import { StringExtractionResult} from "./../../common/index.js"

export interface IStringLib
{
    /**
     * Extracts text between specified start and end strings.
     * @param value Source string.
     * @param start One or more strings that appear before the target text.
     * @param end One or more strings that appear after the target text.
     * @param words When `true`, matches must be whole words.
     * @returns A `StringExtractionResult` with extracted text and indexes.
     * @example
     * const procedure = `CREATE PROCEDURE sp_Test\nAS\nSELECT * FROM [TABLE]`;
     * const procName = XT.String.extractBetween(procedure, ["PROCEDURE", "PROC"], "", true).value;
     */
    extractBetween(value:  string,
                   start?: string | string[] | undefined,
                   end?:   string | string[] | undefined,
                   words?: boolean): StringExtractionResult;

    /**
     * Decodes a Base64Url-encoded string.
     * @param value Base64Url string to decode.
     * @returns Decoded string.
     */
    fromBase64Url(value: string): string;

    /**
     * Checks whether the string is a valid integer.
     * @param value String to check.
     * @returns `true` when the string contains a valid integer.
     */
    isInt(value: string): boolean;

    /**
     * Checks whether the string is a valid integer using a thousand separator.
     * @param value String to check.
     * @param thousandSeparator Separator used between thousands.
     * @returns `true` when the string contains a valid integer.
     */
    isInt(value:             string,
          thousandSeparator: string): boolean;

    /**
     * Checks whether the string is a valid decimal number.
     * @param value String to check.
     * @returns `true` when the string contains a valid number.
     */
    isNumber(value: string): boolean;

    /**
     * Checks whether the string is a valid decimal number using custom separators.
     * @param value String to check.
     * @param thousandSeparator Separator used between thousands.
     * @param decimalSeparator Separator used for the decimal part.
     * @returns `true` when the string contains a valid number.
     */
    isNumber(value:             string,
             thousandSeparator: string,
             decimalSeparator:  string): boolean;

    /**
     * Replaces all occurrences of a search string with a new value.
     * @param value Source string.
     * @param search Search string.
     * @param newValue Replacement string.
     * @param caseInsensitive When true, search is case-insensitive.
     * @returns Updated string.
     */
    replace(value:            string,
            search:           string,
            newValue:         string,
            caseInsensitive?: boolean): string;

    /**
     * Replaces all occurrences of any search strings with a new value.
     * @param value Source string.
     * @param search Array of search strings.
     * @param newValue Replacement string.
     * @param caseInsensitive When true, search is case-insensitive.
     * @returns Updated string.
     */
    replace(value:            string,
            search:           string[],
            newValue:         string,
            caseInsensitive?: boolean): string;

    /**
     * Removes consecutive duplicate Latin letters.
     * @param value Input string.
     * @returns String with sequential Latin letters collapsed.
     * @example
     * const result = XT.String.removeSequentialLatinLetters("immediately");
     */
    removeSequentialLatinLetters(value: string): string;

    /**
     * Encodes a string as Base64Url.
     * @param value Input string.
     * @returns Base64Url-encoded string.
     */
    toBase64Url(value: string): string;

    /**
     * Converts extended Latin characters to basic Latin letters.
     * @param value Input string.
     * @returns Normalized string containing basic Latin letters.
     * @example
     * const text = XT.String.toBasicLatinLetters("á ô ç ñ");
     */
    toBasicLatinLetters(value: string): string;

    /**
     * Parses a string into a BigInt.
     * @param value Input string.
     * @returns Parsed BigInt when valid, otherwise `undefined`.
     */
    toBigInt(value: string): bigint | undefined;

    /**
     * Parses a string into a BigInt using a thousand separator.
     * @param value Input string.
     * @param thousandSeparator Separator used between thousands.
     * @returns Parsed BigInt when valid, otherwise `undefined`.
     */
    toBigInt(value:             string,
             thousandSeparator: string): bigint | undefined;

    /**
     * Parses a string into a Date using the specified format.
     * @param value Input string.
     * @param parseFormat Format with tokens such as `YYYY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
     * @returns Parsed Date when valid, otherwise `undefined`.
     */
    toDate(value:       string,
           parseFormat: string): Date | undefined;

    /**
     * Converts a datetime string from one format to another.
     * @param value Input string.
     * @param parseFormat Format used to parse the string.
     * @param resultFormat Format used to build the output string.
     * @returns Formatted datetime string when parsing succeeds, otherwise `undefined`.
     */
    toDateString(value:        string,
                 parseFormat:  string,
                 resultFormat: string): string | undefined;

    /**
     * Parses a numeric string to a decimal number.
     * @param value Input string.
     * @returns Parsed number when valid, otherwise `undefined`.
     */
    toDecimal(value: string): number | undefined;

    /**
     * Parses a numeric string to a decimal number using a custom decimal separator.
     * @param value Input string.
     * @param decimalSeparator Separator used for the decimal part.
     * @returns Parsed number when valid, otherwise `undefined`.
     */
    toDecimal(value:            string,
              decimalSeparator: string): number | undefined;

    /**
     * Parses a numeric string to a decimal number using custom separators.
     * @param value Input string.
     * @param decimalSeparator Separator used for the decimal part.
     * @param thousandSeparator Separator used between thousands.
     * @returns Parsed number when valid, otherwise `undefined`.
     */
    toDecimal(value:             string,
              decimalSeparator:  string,
              thousandSeparator: string): number | undefined;

    /**
     * Parses a string to an integer.
     * @param value Input string.
     * @returns Parsed integer when valid, otherwise `undefined`.
     */
    toInt(value: string): number | undefined;

    /**
     * Parses a string to an integer using a thousand separator.
     * @param value Input string.
     * @param thousandSeparator Separator used between thousands.
     * @returns Parsed integer when valid, otherwise `undefined`.
     */
    toInt(value:             string,
          thousandSeparator: string): number | undefined;

    /**
     * Trims the specified entries from both ends of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @returns Trimmed string.
     */
    trim(value:   string,
         entries: string | string[]): string;

    /**
     * Trims the specified entries from both ends of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @param caseSensitive When true, comparisons respect case.
     * @returns Trimmed string.
     */
    trim(value:          string,
         entries:        string | string[],
         caseSensitive?: boolean): string;

    /**
     * Trims the specified entries from the end of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @returns Trimmed string.
     */
    trimEnd(value:   string,
            entries: string | string[]): string;

    /**
     * Trims the specified entries from the end of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @param caseSensitive When true, comparisons respect case.
     * @returns Trimmed string.
     */
    trimEnd(value:          string,
            entries:        string | string[],
            caseSensitive?: boolean): string;

    /**
     * Trims the specified entries from the start of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @returns Trimmed string.
     */
    trimStart(value:   string,
              entries: string | string[]): string;

    /**
     * Trims the specified entries from the start of a string.
     * @param value Input string.
     * @param entries String or strings to remove.
     * @param caseSensitive When true, comparisons respect case.
     * @returns Trimmed string.
     */
    trimStart(value:          string,
              entries:        string | string[],
              caseSensitive?: boolean): string;
}
