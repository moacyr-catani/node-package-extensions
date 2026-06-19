import { Buffer } from "node:buffer";
import { XT } from "./../../library/index.js"
import { DecimalPlaces, IntegerRepresentations } from "../../common/index.js";





// ------------------------------------------------------------------------------------------------------------------------------
// #region Number extensions
// ------------------------------------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------------------------
// #region Constructor
// --------------------------------------------------------------------------------------------------------------------

Number.$_assertDecimal = XT.Assert.decimal;



Number.$_assertInt8 = XT.Assert.int8;



Number.$_assertInt16 = XT.Assert.int16;



Number.$_assertInt32 = XT.Assert.int32;



Number.$_assertInt64 = XT.Assert.int64;



Number.$_assertUint8 = XT.Assert.uint8;



Number.$_assertUint16 = XT.Assert.uint16;



Number.$_assertUint32 = XT.Assert.uint32;



Number.$_assertUint64 = XT.Assert.uint64;



Number.$_changeIntegerRepresentation = XT.Number.changeIntegerRepresentation;



Number.$_isInt = XT.Number.isInt;



Number.$_isInt8 = XT.Number.isInt8;



Number.$_isInt16 = XT.Number.isInt16;



Number.$_isInt32 = XT.Number.isInt32;



Number.$_isInt64 = XT.Number.isInt64;



Number.$_isUInt8 = XT.Number.isUInt8;



Number.$_isUInt16 = XT.Number.isUInt16;



Number.$_isUInt32 = XT.Number.isUInt32;



Number.$_isUInt64 = XT.Number.isUInt64;



Number.$_isValid = XT.Number.isValid;



Number.$_toDecimal = XT.Number.toDecimal;



Number.$_toDecimalString = XT.Number.toDecimalString;



Number.$_toInt = XT.Number.toInt;



Number.$_toIntString = XT.Number.toIntString;



Number.$_randomInt = XT.Number.createRandomInt;

// #endregion
// --------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------------------------
// #region Prototype
// --------------------------------------------------------------------------------------------------------------------

Number.prototype.$_assertInt8 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.int8(<number>this)
    else
        return XT.Assert.int8(<number>this,
                               p_alternativeValue);
}



Number.prototype.$_assertInt16 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.int16(<number>this)
    else
        return XT.Assert.int16(<number>this,
                               p_alternativeValue);
}



Number.prototype.$_assertInt32 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.int32(<number>this)
    else
        return XT.Assert.int32(<number>this,
                               p_alternativeValue);
}



Number.prototype.$_assertUint8 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.uint8(<number>this)
    else
        return XT.Assert.uint8(<number>this,
                                p_alternativeValue);
}



Number.prototype.$_assertUint16 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.uint16(<number>this)
    else
        return XT.Assert.uint16(<number>this,
                                p_alternativeValue);
}



Number.prototype.$_assertUint32 = function(p_alternativeValue?: number): any
{
    if (undefined === p_alternativeValue)
        return XT.Assert.uint32(<number>this)
    else
        return XT.Assert.uint32(<number>this,
                                p_alternativeValue);
}



Number.prototype.$_changeIntegerRepresentation = function(p_toRepresentation:    IntegerRepresentations): number | bigint | string | Buffer
{
    return XT.Number.changeIntegerRepresentation(<number>this,
                                                 p_toRepresentation,
                                                 IntegerRepresentations.Number);
}


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