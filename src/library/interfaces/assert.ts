export interface IAssertLib
{
    date(value:            Date | number): Date | null;

    date(value:            Date | number,
         alternativeValue: Date): Date;

    date(value:            string,
         parseFormat:      string): Date | null;

    date(value:            string,
         parseFormat:      string,
         alternativeValue: Date): Date;

    decimal(value: string | number): number | null;

    decimal(value:            string | number,
            alternativeValue: number): number;

    int8(value:            string | number,
         alternativeValue: number): number;

    int16(value:            string | number,
          alternativeValue: number): number;

    int16(value:             string | number,
          thousandSeparator: string,
          alternativeValue:  number): number;

    int32(value:            string | number,
          alternativeValue: number): number;

    int32(value:             string | number,
          thousandSeparator: string,
          alternativeValue:  number): number;

    int64(value:            string | number,
          alternativeValue: number): number;

    int64(value:             string | number,
          thousandSeparator: string,
          alternativeValue:  number): number;

    uint8(value:            string | number,
          alternativeValue: number): number;

    uint16(value:            string | number,
           alternativeValue: number): number;

    uint16(value:             string | number,
           thousandSeparator: string,
           alternativeValue:  number): number;

    uint32(value:            string | number,
           alternativeValue: number): number;

    uint32(value:             string | number,
           thousandSeparator: string,
           alternativeValue:  number): number;

    uint64(value:            string | number,
           alternativeValue: number): number;

    uint64(value:             string | number,
           thousandSeparator: string,
           alternativeValue:  number): number;
}