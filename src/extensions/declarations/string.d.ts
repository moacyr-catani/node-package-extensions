import { StringExtractionResult } from "../../common/index.js";



// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface String
    {
        /**
         * Extracts text between specified start and end strings.
         * @param start One or more strings that appear before the target text.
         * @param end One or more strings that appear after the target text.
         * @param words When `true`, matches must be whole words.
         * @returns A `StringExtractionResult` with extracted text and indexes.
         * @example
         * const procedure = `CREATE PROCEDURE sp_Test\nAS\nSELECT * FROM [TABLE]`;
         * const procName = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
         */
        $_extractBetween(start?: string | string[] | undefined,
                         end?:   string | string[] | undefined,
                         words?: boolean): StringExtractionResult;

        /**
         * Decodes a Base64Url-encoded string.
         * @returns Decoded string.
         */
        $_fromBase64Url(): string;

        /**
         * Checks whether the string is a valid integer.
         * @returns `true` when the string contains a valid integer.
         */
        $_isInt(): boolean;

        /**
         * Checks whether the string is a valid integer using a thousand separator.
         * @param thousandSeparator Separator used between thousands.
         * @returns `true` when the string contains a valid integer.
         */
        $_isInt(thousandSeparator: string): boolean;

        /**
         * Checks whether the string is a valid decimal number.
         * @returns `true` when the string contains a valid number.
         */
        $_isNumber(): boolean;

        /**
         * Checks whether the string is a valid decimal number using custom separators.
         * @param thousandSeparator Separator used between thousands.
         * @param decimalSeparator Separator used for the decimal part.
         * @returns `true` when the string contains a valid number.
         */
        $_isNumber(thousandSeparator: string,
                   decimalSeparator:  string): boolean;

        /**
         * Replaces all occurrences of a search string with a new value.
         * @param search Search string.
         * @param newValue Replacement string.
         * @param caseInsensitive When true, search is case-insensitive.
         * @returns Updated string.
         */
        $_replace(search:           string,
                  newValue:         string,
                  caseInsensitive?: boolean): string;

        /**
         * Replaces all occurrences of any search strings with a new value.
         * @param search Array of search strings.
         * @param newValue Replacement string.
         * @param caseInsensitive When true, search is case-insensitive.
         * @returns Updated string.
         */
        $_replace(search:           string[],
                  newValue:         string,
                  caseInsensitive?: boolean): string;

        /**
         * Removes consecutive duplicate Latin letters.
         * @returns String with sequential Latin letters collapsed.
         * @example
         * const result = "immediately".$_removeSequentialLatinLetters();
         */
        $_removeSequentialLatinLetters(): string;

        /**
         * Encodes the string as Base64Url.
         * @returns Base64Url-encoded string.
         */
        $_toBase64Url(): string;

        /**
         * Converts extended Latin characters to basic Latin letters.
         * @returns Normalized string containing basic Latin letters.
         * @example
         * const text = "á ô ç ñ".$_toBasicLatinLetters();
         */
        $_toBasicLatinLetters(): string;

        /**
         * Parses the string into a BigInt.
         * @returns Parsed BigInt when valid, otherwise `undefined`.
         */
        $_toBigInt(): bigint | undefined;

        /**
         * Parses the string into a BigInt using a thousand separator.
         * @param thousandSeparator Separator used between thousands.
         * @returns Parsed BigInt when valid, otherwise `undefined`.
         */
        $_toBigInt(thousandSeparator: string): bigint | undefined;

        /**
         * Parses the string into a Date using the specified format.
         * @param parseFormat Format with tokens such as `YYYY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
         * @returns Parsed Date when valid, otherwise `undefined`.
         */
        $_toDate(parseFormat: string): Date | undefined;

        /**
         * Converts the string from one datetime format to another.
         * @param parseFormat Format used to parse the input string.
         * @param resultFormat Format used for the output string.
         * @returns Formatted datetime string when parsing succeeds, otherwise `undefined`.
         */
        $_toDateString(parseFormat:  string,
                       resultFormat: string): string | undefined;

        /**
         * Parses the string to a decimal number.
         * @returns Parsed number when valid, otherwise `undefined`.
         */
        $_toDecimal(): number | undefined;

        /**
         * Parses the string to a decimal number using a custom decimal separator.
         * @param decimalSeparator Separator used for the decimal part.
         * @returns Parsed number when valid, otherwise `undefined`.
         */
        $_toDecimal(decimalSeparator: string): number | undefined;

        /**
         * Parses the string to a decimal number using custom separators.
         * @param decimalSeparator Separator used for the decimal part.
         * @param thousandSeparator Separator used between thousands.
         * @returns Parsed number when valid, otherwise `undefined`.
         */
        $_toDecimal(decimalSeparator: string,
                    thousandSeparator:  string): number | undefined;

        /**
         * Parses the string to an integer.
         * @returns Parsed integer when valid, otherwise `undefined`.
         */
        $_toInt(): number | undefined;

        /**
         * Parses the string to an integer using a thousand separator.
         * @param thousandSeparator Separator used between thousands.
         * @returns Parsed integer when valid, otherwise `undefined`.
         */
        $_toInt(thousandSeparator: string): number | undefined;

        /**
         * Trims the specified entries from both ends of the string.
         * @param entries String or strings to remove.
         * @returns Trimmed string.
         */
        $_trim(entries: string | string[]): string;

        /**
         * Trims the specified entries from both ends of the string.
         * @param entries String or strings to remove.
         * @param caseSensitive When true, comparisons respect case.
         * @returns Trimmed string.
         */
        $_trim(entries: string | string[], caseSensitive?: boolean): string;

        /**
         * Trims the specified entries from the end of the string.
         * @param entries String or strings to remove.
         * @returns Trimmed string.
         */
        $_trimEnd(entries: string | string[]): string;

        /**
         * Trims the specified entries from the end of the string.
         * @param entries String or strings to remove.
         * @param caseSensitive When true, comparisons respect case.
         * @returns Trimmed string.
         */
        $_trimEnd(entries: string | string[], caseSensitive?: boolean): string;

        /**
         * Trims the specified entries from the start of the string.
         * @param entries String or strings to remove.
         * @returns Trimmed string.
         */
        $_trimStart(entries: string | string[]): string;

        /**
         * Trims the specified entries from the start of the string.
         * @param entries String or strings to remove.
         * @param caseSensitive When true, comparisons respect case.
         * @returns Trimmed string.
         */
        $_trimStart(entries: string | string[], caseSensitive?: boolean): string;
    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};