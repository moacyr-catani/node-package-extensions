import { IAssertLib } from "./interfaces/assert.js";
import { Constants } from "./../common/index.js" 
import { StringLib } from "./string.js";
import { NumberLib } from "./number.js";






function assertInt(value:         string | number | bigint,
                   fnCheckInt:    Function,
                   fnToInt:       Function,
                   fnStringToInt: Function,
                   param2?:       string | number | bigint,
                   param3?:       number | bigint): number | bigint | null
    {
        let intValue:            number | bigint | undefined = undefined,
            intAlternativeValue: number | bigint | null      = null;

            

        // Alternative value
        if ("number" === typeof param2 || "bigint" === typeof param2)
            intAlternativeValue = param2;

        else if ("number" === typeof param3 || "bigint" === typeof param3)
            intAlternativeValue = param3;



        // Get value
        if ("string" === typeof value)
        {
            let strThousandSeparator: string = "";

            if ("string" === typeof param2)
                strThousandSeparator = param2;

            intValue = fnStringToInt(value, strThousandSeparator);
        }
        else if (NumberLib.isInt(value))
            intValue = fnToInt(value);



        // Check if value is in expected range
        if ("undefined" !== typeof intValue)
            intValue = fnCheckInt(intValue) ? intValue : undefined;



        // Check if alternative value is valid
        if ("undefined" === typeof intValue && 
            null !== intAlternativeValue && 
            !fnCheckInt(intAlternativeValue))
            throw new Error("Alternative value is not valid");


        return "undefined" !== typeof intValue ? intValue : intAlternativeValue;
    }




// ------------------------------------------------------------------------------------------------------------------------------
// #region Assert extensions
// ------------------------------------------------------------------------------------------------------------------------------

class AssertLibClass implements IAssertLib 
{
    date(value:            Date | number | string): Date | null;
    date(value:            string,
         parseFormat:      string): Date | null;
    date(value:            Date | number | string,
         alternativeValue: Date): Date;
    date(value:            string,
         parseFormat:      string,
         alternativeValue: Date): Date;
    date(value:            Date | number | string,
         param2?:          string | Date,
         param3?:          Date): Date | null
    {
        let dtmValue:            Date | undefined = undefined,
            dtmAlternativeValue: Date | null      = null;



        // Alternative value
        if (param2 instanceof Date)
            dtmAlternativeValue = param2;
        else if (param3 instanceof Date)
            dtmAlternativeValue = param3;


        // Get date value
        if ("string" === typeof value)
        {
            let strParseFormat: string = "string" === typeof param2 ? param2 : Constants.DATETIME_FORMAT_ISO;

            dtmValue = StringLib.toDate(value, strParseFormat);
        }
        else if ("number" === typeof value)
        {
            if (!isNaN(value) && isFinite(value))
                dtmValue = new Date(value);
        }
        else if (!isNaN(value.getDate()))
            dtmValue = value;



        // Check if alternative value is valid
        if ("undefined" === typeof dtmValue && 
            null !== dtmAlternativeValue && 
            !NumberLib.isValid(dtmAlternativeValue.getDate()))
            throw new Error("Alternative value is not valid");



        return "undefined" !== typeof dtmValue ? dtmValue : dtmAlternativeValue;
    }





    decimal(value:             string | number): number | null;
    decimal(value:             string,
            decimalSeparator:  string): number | null;
    decimal(value:             string,
            decimalSeparator:  string,      
            thousandSeparator: string): number | null;
    decimal(value:             string | number,
            alternativeValue:  number): number;
    decimal(value:             string,
            decimalSeparator:  string,
            alternativeValue:  number): number;
    decimal(value:             string,
            decimalSeparator:  string,      
            thousandSeparator: string,      
            alternativeValue:  number): number;
    decimal(value:             string | number,
            param2?:           string | number,      
            param3?:           string | number,      
            param4?:           number): number | null
    {

        let intValue: number | undefined,
            intAlternativeValue: number | null = null;


        // Alternative value
        if ("number" === typeof param2)
            intAlternativeValue = param2;

        else if ("number" === typeof param3)
            intAlternativeValue = param3;

        else if ("number" === typeof param4)
            intAlternativeValue = param4;

 

        // Get value
        if ("string" === typeof value)
        {
            let strDecimalSeparator:  string = ".",
                strThousandSeparator: string = ""

            if ("string" === typeof param2)
                strDecimalSeparator = param2;

            if ("string" === typeof param3)
                strThousandSeparator = param3;

            intValue = StringLib.toDecimal(value, strDecimalSeparator, strThousandSeparator);
        }
        else
            intValue = NumberLib.toDecimal(value, 20);



        // Check if alternative value is valid
        if ("undefined" === typeof intValue && 
            null !== intAlternativeValue && 
            !NumberLib.isValid(intAlternativeValue))
            throw new Error("Alternative value is not valid");



        return intValue? intValue : intAlternativeValue;
    }
    



    int8(value:             string | number): number | null;
    int8(value:             string | number,
         alternativeValue:  number): number;
    int8(value:             string | number,
         alternativeValue?: number): number | null
    {

        return <number | null>assertInt(value, 
                              NumberLib.isInt8,
                              NumberLib.toInt,
                              StringLib.toInt,
                              alternativeValue);
    }




    int16(value:             string | number): number | null;
    int16(value:             string | number,
          thousandSeparator: string): number | null;
    int16(value:             string | number,
          alternativeValue:  number): number;
    int16(value:             string | number,
          thousandSeparator: string,
          alternativeValue:  number): number;
    int16(value:             string | number,
          param2?:           string | number,
          param3?:           number): number | null
    {
        return <number | null>assertInt(value, 
                                        NumberLib.isInt16,
                                        NumberLib.toInt,
                                        StringLib.toInt,
                                        param2,
                                        param3);
    }

    

    int32(value:             string | number): number | null;
    int32(value:             string | number,
          thousandSeparator: string): number | null;
    int32(value:             string | number,
          alternativeValue:  number): number;
    int32(value:             string | number,
          thousandSeparator: string,
          alternativeValue:  number): number;
    int32(value:             string | number,
          param2?:           string | number,
          param3?:           number): number | null
    {
        return <number | null>assertInt(value, 
                                        NumberLib.isInt32,
                                        NumberLib.toInt,
                                        StringLib.toInt,
                                        param2,
                                        param3);
    }


    int64(value:             string | number | bigint): bigint | null;
    int64(value:             string,
          thousandSeparator: string): bigint | null;
    int64(value:             string | number | bigint,
          alternativeValue:  bigint): bigint;
    int64(value:             string,
          thousandSeparator: string,
          alternativeValue:  bigint): bigint;
    int64(value:             string | number | bigint,
          param2?:           string | bigint,
          param3?:           bigint): bigint | null
    {
        return <bigint | null>assertInt(value, 
                                        NumberLib.isInt64,
                                        NumberLib.toBigInt,
                                        StringLib.toBigInt,
                                        param2,
                                        param3);
    }



    uint8(value:             string | number): number | null;
    uint8(value:             string | number,
          alternativeValue:  number): number;
    uint8(value:             string | number,
          alternativeValue?: number): number | null
    {
        return <number | null>assertInt(value, 
                              NumberLib.isUInt8,
                              NumberLib.toInt,
                              StringLib.toInt,
                              alternativeValue);
    }




    uint16(value:             string | number): number | null;
    uint16(value:             string | number,
          thousandSeparator: string): number | null;
    uint16(value:             string | number,
           alternativeValue:  number): number;
    uint16(value:             string | number,
           thousandSeparator: string,
           alternativeValue:  number): number;
    uint16(value:             string | number,
           param2?:           string | number,
           param3?:           number): number | null
    {
        return <number | null>assertInt(value, 
                                        NumberLib.isUInt16,
                                        NumberLib.toInt,
                                        StringLib.toInt,
                                        param2,
                                        param3);
    }




    uint32(value:             string | number): number | null;
    uint32(value:             string | number,
          thousandSeparator: string): number | null;
    uint32(value:             string | number,
           alternativeValue:  number): number;
    uint32(value:             string | number,
           thousandSeparator: string,
           alternativeValue:  number): number;
    uint32(value:             string | number,
           param2?:           string | number,
           param3?:           number): number | null
    {
        return <number | null>assertInt(value, 
                                        NumberLib.isUInt32,
                                        NumberLib.toInt,
                                        StringLib.toInt,
                                        param2,
                                        param3);
    }




    uint64(value:             string | number | bigint): bigint | null;
    uint64(value:             string,
           thousandSeparator: string): bigint | null;
    uint64(value:             string | number | bigint,
           alternativeValue:  bigint): bigint;
    uint64(value:             string,
           thousandSeparator: string,
           alternativeValue:  bigint): bigint;
    uint64(value:             string | number | bigint,
           param2?:           string | bigint,
           param3?:           bigint): bigint | null
    {
        return <bigint | null>assertInt(value, 
                                        NumberLib.isUInt64,
                                        NumberLib.toBigInt,
                                        StringLib.toBigInt,
                                        param2,
                                        param3);
    }

}



const AssertLib = new AssertLibClass();

// Export object
Object.seal(AssertLib)
export  { AssertLib };
