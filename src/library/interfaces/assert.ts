export interface IAssertLib
{
    /**
     * Asserts the provided value is (or represents) a valid datetime.
     * @overload
     * @param {Date | number | string} value Value to be checked. If value is a string, it will be parsed for ISO format
     * @returns A datetime from the first param (if it is valid) or null, otherwise
     */
    date(value: Date | number | string): Date | null;


    /**
     * Asserts the provided value is (or represents) a valid datetime.
     * @overload
     * @param {string} value Value to be checked.
     * @param {string} parsedFormat Representation of how datetime value is written in the string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
     * @returns A datetime from the first param (if it is valid) or null, otherwise
     */
    date(value:       string,
         parseFormat: string): Date | null;

    /**
     * Asserts the provided value is (or represents) a valid datetime.
     * @overload
     * @param {Date | number | string} value Value to be checked. If value is a string, it will be parsed for ISO format
     * @param {Date} alternativeValue Value to be returned case the provided param is not a valid datetime
     * @returns A datetime from the first param (if it is valid) or alternativeValue, otherwise
     */
    date(value:            Date | number | string,
         alternativeValue: Date): Date;

    /**
     * Asserts the provided value is (or represents) a valid datetime.
     * @overload
     * @param {string} value Value to be checked.
     * @param {string} parsedFormat Representation of how datetime value is written in the string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
     * @param {Date} alternativeValue Value to be returned case the provided param is not a valid datetime
     * @returns A datetime from the first param (if it is valid) or null, otherwise
     */
    date(value:            string,
         parseFormat:      string,
         alternativeValue: Date): Date;



    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string | number} value Value to be checked
     * @returns A decimal number or null (if provided value is not a valid decimal)
     */
    decimal(value: string | number): number | null;
    
    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string} value Value to be checked
     * @param {string} decimalSeparator Character used as decimal separator
     * @returns A decimal number or null (if provided value is not a valid decimal)
     */
    decimal(value:            string,
            decimalSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string} value Value to be checked
     * @param {string} decimalSeparator Character used as decimal separator
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A decimal number or null (if provided value is not a valid decimal)
     */
    decimal(value:             string,
            decimalSeparator:  string,      
            thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid decimal
     * @returns A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise
     */
    decimal(value:            string | number,
            alternativeValue: number): number;

    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string | number} value Value to be checked
     * @param {string} decimalSeparator Character used as decimal separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid decimal
     * @returns A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise
     */
    decimal(value:            string,
            decimalSeparator: string,
            alternativeValue: number): number;
    /**
     * Asserts the provided value is (or represents) a valid decimal.
     * @overload
     * @param {string | number} value Value to be checked
     * @param {string} decimalSeparator Character used as decimal separator
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid decimal
     * @returns A decimal number from de first param (if a valid decimal), or alternativeValue, otherwise
     */
    decimal(value:             string,
            decimalSeparator:  string,      
            thousandSeparator: string,      
            alternativeValue:  number): number;



    /**
     * Asserts the provided value is (or represents) a valid 8-bit integer; it i.e. it is in the range -128 (-2⁷) and 127 (2⁷ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns An 8-bit integer from de first param (if valid), or null, otherwise
     */
    int8(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 8-bit integer; i.e. it is in the range -128 (-2⁷) and 127 (2⁷ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 8-bit integer
     * @returns An 8-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int8(value:            string | number,
         alternativeValue: number): number;




    /**
     * Asserts the provided value is (or represents) a valid 16-bit integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns A 16-bit integer from de first param (if valid), or null, otherwise
     */
    int16(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 16-bit integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 16-bit integer from de first param (if valid), or null, otherwise
     */
    int16(value:             string,
          thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 16 bits integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns An 16 bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int16(value:             string | number,
          alternativeValue:  number): number;

    /**
     * Asserts the provided value is (or represents) a valid 16 bits integer; i.e. it is in the range -32,768 (-2¹⁵) and 32,767 (2¹⁵ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns An 16 bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int16(value:             string,
          thousandSeparator: string,
          alternativeValue:  number): number;






    /**
     * Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns A 32-bit integer from de first param (if valid), or null, otherwise
     */
    int32(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 32-bit integer from de first param (if valid), or null, otherwise
     */
    int32(value:             string,
          thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 32-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int32(value:             string | number,
          alternativeValue:  number): number;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit integer; i.e. it is in the range -2,147,483,648 (-2³¹) and 2,147,483,647 (2³¹ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 32-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int32(value:             string,
          thousandSeparator: string,
          alternativeValue:  number): number;






    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
     * @overload
     * @param {string | number | bigint} value Value to be checked
     * @returns A 64-bit integer from de first param (if valid), or null, otherwise
     */
    int64(value: string | number | bigint): bigint | null;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 64-bit integer from de first param (if valid), or null, otherwise
     */
    int64(value:             string,
          thousandSeparator: string): bigint | null;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 64-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int64(value:             string | number | bigint,
          alternativeValue:  bigint): bigint;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range -9,223,372,036,854,775,808 (-2⁶³) and 9,223,372,036,854,775,807 (2⁶³ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {bigint} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 64-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    int64(value:             string,
          thousandSeparator: string,
          alternativeValue:  bigint): bigint;





    /**
     * Asserts the provided value is (or represents) a valid 8-bit unsigned integer; it i.e. it is in the range 0 and 255 (2⁸ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns An 8-bit unsigned integer from de first param (if valid), or null, otherwise
     */
    uint8(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 8-bit unsigned integer; it i.e. it is in the range 0 and 255 (2⁸ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 8-bit integer
     * @returns An 8-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint8(value:            string | number,
          alternativeValue: number): number;






    /**
     * Asserts the provided value is (or represents) a valid 16-bit unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns A 16-bit unsigned integer from de first param (if valid), or null, otherwise
     */
    uint16(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 16-bit unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 16-bit unsigned integer from de first param (if valid), or null, otherwise
     */
    uint16(value:             string,
           thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 16 unsigned bits integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns A 16-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint16(value:             string | number,
           alternativeValue:  number): number;

    /**
     * Asserts the provided value is (or represents) a valid 16 bits unsigned integer; i.e. is in the range 0 and 65,535 (2¹⁶ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns A 16-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint16(value:             string,
           thousandSeparator: string,
           alternativeValue:  number): number;







    /**
     * Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @returns A 32-bit unsigned integer from de first param (if valid), or null, otherwise
     */
    uint32(value: string | number): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 32-bit unsigned integer from de first param (if valid), or null, otherwise
     */
    uint32(value:             string,
           thousandSeparator: string): number | null;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns A 32-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint32(value:             string | number,
           alternativeValue:  number): number;

    /**
     * Asserts the provided value is (or represents) a valid 32-bit unsigned integer; i.e. it is in the range 0 and 4,294,967,295 (2³² - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 16-bit integer
     * @returns A 32-bit unsigned integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint32(value:             string,
           thousandSeparator: string,
           alternativeValue:  number): number;




    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
     * @overload
     * @param {string | number | bigint} value Value to be checked
     * @returns A 64-bit integer from de first param (if valid), or null, otherwise
     */
    uint64(value: string | number | bigint): bigint | null;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @returns A 64-bit integer from de first param (if valid), or null, otherwise
     */
    uint64(value:             string,
           thousandSeparator: string): bigint | null;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
     * @overload
     * @param {string | number} value Value to be checked
     * @param {number} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 64-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint64(value:             string | number | bigint,
           alternativeValue:  bigint): bigint;

    /**
     * Asserts the provided value is (or represents) a valid 64-bit integer; i.e. it is in the range 0 and 18,446,744,073,709,551,615 (2⁶⁴ - 1).
     * @overload
     * @param {string} value Value to be checked
     * @param {string} thousandSeparator Character used as thousand separator
     * @param {bigint} alternativeValue Value to be returned case the provided param is not a valid 32-bit integer
     * @returns A 64-bit integer from de first param (if valid), or alternativeValue, otherwise
     */
    uint64(value:             string,
           thousandSeparator: string,
           alternativeValue:  bigint): bigint;
}