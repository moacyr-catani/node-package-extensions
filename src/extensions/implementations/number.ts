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

Number.$_changeIntegerRepresentation = function(p_Value:               number | bigint | string | Buffer,
                                                p_toRepresentation:    IntegerRepresentations,
                                                p_fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer
{
    return XT.Number.changeIntegerRepresentation(p_Value,
                                                 p_toRepresentation,
                                                 p_fromRepresentation);
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