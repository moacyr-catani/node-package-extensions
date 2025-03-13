export type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
export type StringExtractionResult = {
    start: number;
    end: number;
    value: string;
};
export { IntegerRepresentations } from "./number.js";
import "./array";
import "./date";
import "./number";
import { IntegerRepresentations } from "./number.js";
import "./object";
import "./string";
declare global {
    interface String {
        $_fromBase64Url(): string;
        $_isValidInt(): boolean;
        $_isValidInt8(): boolean;
        $_isValidInt16(): boolean;
        $_isValidInt32(): boolean;
        $_isValidInt64(): boolean;
        $_isValidNumber(): boolean;
        $_replace(p_Search: string | string[], p_NewValue: string, p_CaseInsensitive?: boolean): string;
        $_removeSequentialLetters(): string;
        $_toBase64Url(): string;
        $_toBasicLatinLetters(): string;
        $_toDate(p_ParseFormat: string): Date | undefined;
        $_toDateString(p_ParseFormat: string, p_ResultFormat: string): string | undefined;
        $_toDecimal(p_DecimalPlaces: DecimalPlaces): number | undefined;
        $_toInt(): number | undefined;
        $_trimChar(p_Char: string): string;
        $_trim(entries: string | string[], caseSensitive?: boolean): string;
        $_trimStart(entries: string | string[], caseSensitive?: boolean): string;
        $_trimEnd(entries: string | string[], caseSensitive?: boolean): string;
        $_indexOfAny(...p_Characters: string[]): number;
        $_extractBetween(p_Start?: string | string[] | undefined, p_End?: string | string[] | undefined, p_Words?: boolean): StringExtractionResult | undefined;
    }
    interface Date {
        $_addDays(p_Value: number): Date;
        $_toDateString(): string;
        $_toMonthEnd(): Date;
        $_toMonthStart(): Date;
        $_toString(p_ResultFormat: string): string;
        $_toTimeString(): string;
        $_toYearEnd(): Date;
        $_toYearStart(): Date;
    }
    interface NumberConstructor {
        $_changeIntegerRepresentation(p_Value: number | bigint | string | ArrayBuffer, p_toRepresentation: IntegerRepresentations, p_fromRepresentation?: IntegerRepresentations): number | bigint | string | ArrayBuffer;
        $_randomInt(p_SizeInBytes: number, p_ReturnIn?: IntegerRepresentations): number | bigint | string | ArrayBuffer;
    }
    interface Number {
        $_changeIntegerRepresentation(p_Value: number | bigint | string | ArrayBuffer, p_toRepresentation: IntegerRepresentations): number | bigint | string | ArrayBuffer;
        $_toDecimal(p_DecimalPlaces: DecimalPlaces): number | undefined;
        $_toDecimalString(p_ThousandSeparator: string, p_DecimalPlaces: DecimalPlaces): string;
        $_toInt(): number | undefined;
        $_toIntString(): string | undefined;
    }
    interface ObjectConstructor {
        $_getValue(p_Object: Object, p_Acessor: string): any;
        $_setValue(p_Object: Object, p_Acessor: string, p_Value: any): boolean;
    }
    interface Object {
        $_assertDate(p_Value: any, p_AlternativeValue?: Date | null, p_ParseFormat?: string): Date | null | undefined;
        $_assertDecimal(p_Value: any, p_AlternativeValue: number | null): number | null;
        $_getValue(p_Object: Object, p_Acessor: string): any;
        $_setValue(p_Object: Object, p_Acessor: string, p_Value: any): boolean;
    }
    interface Array<T> {
        $_removeDuplicates(): Array<any>;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map