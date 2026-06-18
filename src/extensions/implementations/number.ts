//import * as Crypto from "node:crypto";   
import { Buffer } from "node:buffer";
import { XT } from "./../../library/index.js"
import { DecimalPlaces, IntegerRepresentations } from "../../common/index.js";





// ------------------------------------------------------------------------------------------------------------------------------
// #region Number extensions
// ------------------------------------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------------------------
// #region Constructor
// --------------------------------------------------------------------------------------------------------------------




    // /**
    //  * 
    //  * @param value Asserts a value is, or can be converted to, a valid int8
    //  */
    // int8(value:             string | number): number | null;
    // int8(value:             string | number,
    //      alternativeValue:  number): number;
    // int8(value:             string | number,
    //      alternativeValue?: number): number | null
    // {

    //     return <number | null>assertInt(value, 
    //                                     NumberLib.isInt8,
    //                                     NumberLib.toInt,
    //                                     StringLib.toInt,
    //                                     alternativeValue);
    // }



    // /**
    //  * 
    //  * @param value Asserts a value is, or can be converted to, a valid int16
    //  */
    // int16(value:             string | number): number | null;
    // int16(value:             string | number,
    //       thousandSeparator: string): number | null;
    // int16(value:             string | number,
    //       alternativeValue:  number): number;
    // int16(value:             string | number,
    //       thousandSeparator: string,
    //       alternativeValue:  number): number;
    // int16(value:             string | number,
    //       param2?:           string | number,
    //       param3?:           number): number | null
    // {
    //     return <number | null>assertInt(value, 
    //                                     NumberLib.isInt16,
    //                                     NumberLib.toInt,
    //                                     StringLib.toInt,
    //                                     param2,
    //                                     param3);
    // }

    

    // int32(value:             string | number): number | null;
    // int32(value:             string | number,
    //       thousandSeparator: string): number | null;
    // int32(value:             string | number,
    //       alternativeValue:  number): number;
    // int32(value:             string | number,
    //       thousandSeparator: string,
    //       alternativeValue:  number): number;
    // int32(value:             string | number,
    //       param2?:           string | number,
    //       param3?:           number): number | null
    // {
    //     return <number | null>assertInt(value, 
    //                                     NumberLib.isInt32,
    //                                     NumberLib.toInt,
    //                                     StringLib.toInt,
    //                                     param2,
    //                                     param3);
    // }


    // int64(value:             string | number | bigint): bigint | null;
    // int64(value:             string,
    //       thousandSeparator: string): bigint | null;
    // int64(value:             string | number | bigint,
    //       alternativeValue:  bigint): bigint;
    // int64(value:             string,
    //       thousandSeparator: string,
    //       alternativeValue:  bigint): bigint;
    // int64(value:             string | number | bigint,
    //       param2?:           string | bigint,
    //       param3?:           bigint): bigint | null
    // {
    //     return <bigint | null>assertInt(value, 
    //                                     NumberLib.isInt64,
    //                                     NumberLib.toBigInt,
    //                                     StringLib.toBigInt,
    //                                     param2,
    //                                     param3);
    // }



    // uint8(value:             string | number): number | null;
    // uint8(value:             string | number,
    //       alternativeValue:  number): number;
    // uint8(value:             string | number,
    //       alternativeValue?: number): number | null
    // {
    //     return <number | null>assertInt(value, 
    //                           NumberLib.isUInt8,
    //                           NumberLib.toInt,
    //                           StringLib.toInt,
    //                           alternativeValue);
    // }




    // uint16(value:             string | number): number | null;
    // uint16(value:             string | number,
    //       thousandSeparator: string): number | null;
    // uint16(value:             string | number,
    //        alternativeValue:  number): number;
    // uint16(value:             string | number,
    //        thousandSeparator: string,
    //        alternativeValue:  number): number;
    // uint16(value:             string | number,
    //        param2?:           string | number,
    //        param3?:           number): number | null
    // {
    //     return <number | null>assertInt(value, 
    //                                     NumberLib.isUInt16,
    //                                     NumberLib.toInt,
    //                                     StringLib.toInt,
    //                                     param2,
    //                                     param3);
    // }




Number.$_assertUint32 = function(p_value:             string | number,
                                 p_param2?:           string | number,
                                 p_param3?:           number): number | null
{
    return XT.Assert.uint32(p_value, 
                            p_param2, 
                            p_param3);
}




Number.$_assertUint64 = function(p_value:             string | number | bigint,
                                 p_param2?:           string | bigint,
                                 p_param3?:           bigint): bigint | null
{
    return XT.Assert.uint64(p_value, 
                            p_param2, 
                            p_param3);
}





Number.$_changeIntegerRepresentation = function(p_Value:               number | bigint | string | Buffer,
                                                p_toRepresentation:    IntegerRepresentations,
                                                p_fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer
{
    return XT.Number.changeIntegerRepresentation(p_Value,
                                                 p_toRepresentation,
                                                 p_fromRepresentation);
}





Number.$_isInt = function(p_Value: number | bigint): boolean
{
    return XT.Number.isInt(p_Value);
}



Number.$_isInt8 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isInt8(p_Value);
}



Number.$_isInt16 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isInt16(p_Value);
}



Number.$_isInt32 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isInt32(p_Value);
}



Number.$_isInt64 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isInt64(p_Value);
}



Number.$_isUInt8 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isUInt8(p_Value);
}



Number.$_isUInt16 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isUInt16(p_Value);
}



Number.$_isUInt32 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isUInt32(p_Value);
}



Number.$_isUInt64 = function(p_Value: number | bigint): boolean
{
    return XT.Number.isUInt64(p_Value);
}



Number.$_isValid = function(p_Value: number): boolean 
{
    return XT.Number.isValid(p_Value);
},



Number.$_toDecimal = function(p_Value:         number,
                              p_DecimalPlaces: DecimalPlaces): number | undefined
{
    return XT.Number.toDecimal(p_Value,
                               p_DecimalPlaces);
}



Number.$_toDecimalString = function(p_Value:             number,
                                    p_DecimalPlaces:     DecimalPlaces = 2,
                                    p_DecimalSeparator:  string = ".",
                                    p_ThousandSeparator: string = ""): string | undefined
{
    return XT.Number.toDecimalString(p_Value,
                                     p_DecimalPlaces,
                                     p_DecimalSeparator,
                                     p_ThousandSeparator);
}



Number.$_toInt = function(p_Value: number): number | undefined
{
    return XT.Number.toInt(p_Value);
}



Number.$_toIntString = function(p_Value:             number,
                                p_ThousandSeparator: string = ""): string | undefined
{
    return XT.Number.toIntString(p_Value,
                                 p_ThousandSeparator);
}











Number.$_randomInt = function(p_SizeInBytes: number, 
                              p_ReturnIn:    IntegerRepresentations = IntegerRepresentations.BigInt): number | bigint | string | Buffer<ArrayBuffer>
{
    return XT.Number.createRandomInt(p_SizeInBytes,
                                     p_ReturnIn);
}

// #endregion
// --------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------------------------
// #region Prototype
// --------------------------------------------------------------------------------------------------------------------


Number.prototype.$_isInt = function(): boolean
{
    return XT.Number.isInt(<number>this);
}



Number.prototype.$_isInt8 = function(): boolean
{
    return XT.Number.isInt8(<number>this);
}



Number.prototype.$_isInt16 = function(): boolean
{
    return XT.Number.isInt16(<number>this);
}



Number.prototype.$_isInt32 = function(): boolean
{
    return XT.Number.isInt32(<number>this);
}



Number.prototype.$_isInt64 = function(): boolean
{
    return XT.Number.isInt64(<number>this);
}



Number.prototype.$_isUInt8 = function(): boolean
{
    return XT.Number.isUInt8(<number>this);
}



Number.prototype.$_isUInt16 = function(): boolean
{
    return XT.Number.isUInt16(<number>this);
}



Number.prototype.$_isUInt32 = function(): boolean
{
    return XT.Number.isUInt32(<number>this);
}



Number.prototype.$_isUInt64 = function(): boolean
{
    return XT.Number.isUInt64(<number>this);
}



Number.prototype.$_isValid = function(): boolean 
{
    return XT.Number.isValid(<number>this);
},



Number.prototype.$_toDecimal = function(p_DecimalPlaces: DecimalPlaces): number | undefined
{
    return XT.Number.toDecimal(<number>this,
                               p_DecimalPlaces);
}



Number.prototype.$_toDecimalString = function(p_DecimalPlaces:     DecimalPlaces = 2,
                                              p_DecimalSeparator:  string = ".",
                                              p_ThousandSeparator: string = ""): string | undefined
{
    return XT.Number.toDecimalString(<number>this,
                                    p_DecimalPlaces,
                                    p_DecimalSeparator,
                                    p_ThousandSeparator);
}



Number.prototype.$_toInt = function(): number | undefined
{
    return XT.Number.toInt(<number>this);
}



Number.prototype.$_toIntString = function(p_ThousandSeparator: string = ""): string | undefined
{
    return XT.Number.toIntString(<number>this,
                                 p_ThousandSeparator);
}

// #endregion
// --------------------------------------------------------------------------------------------------------------------


// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------