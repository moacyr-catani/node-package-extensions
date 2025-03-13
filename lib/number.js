import * as Crypto from "node:crypto";
import { Buffer } from "node:buffer";
export var IntegerRepresentations;
(function (IntegerRepresentations) {
    IntegerRepresentations["BufferUInt8"] = "BUFFER_UINT8";
    IntegerRepresentations["Number"] = "NUMBER";
    IntegerRepresentations["BigInt"] = "BIGINT";
    IntegerRepresentations["StringBinary"] = "STRING_BINARY";
    IntegerRepresentations["StringOctal"] = "STRING_OCTAL";
    IntegerRepresentations["StringDecimal"] = "STRING_DECIMAL";
    IntegerRepresentations["StringHexadecimal"] = "STRING_HEXADECIMAL";
    IntegerRepresentations["StringBase36"] = "STRING_BASE36";
    IntegerRepresentations["StringBase64"] = "STRING_BASE64";
    IntegerRepresentations["StringBase64Url"] = "STRING_BASE64_URL";
})(IntegerRepresentations || (IntegerRepresentations = {}));
const INTEGER_REPRESENTATIONS = Object.values(IntegerRepresentations);
function ConvertIntFromBase(p_value, p_radix) {
    p_value = p_value.toString();
    const intSize = 10;
    const intFactor = BigInt(p_radix ** intSize);
    let intA = p_value.length % intSize || intSize;
    const arrParts = [p_value.slice(0, intA)];
    while (intA < p_value.length) {
        arrParts.push(p_value.slice(intA, intA += intSize));
    }
    return arrParts.reduce((r, v) => r * intFactor + BigInt(parseInt(v, p_radix)), 0n);
}
function ConvertIntToBuffer(p_value) {
    let intValue = BigInt(p_value);
    const arrBytes = [];
    while (intValue > 0n) {
        arrBytes.push(Number(intValue & 0xffn));
        intValue >>= 8n;
    }
    return Buffer.from(arrBytes.reverse());
}
Number.$_changeIntegerRepresentation = function (p_Value, p_toRepresentation, p_fromRepresentation) {
    if ("undefined" === typeof p_fromRepresentation) {
        if ("string" === typeof p_Value) {
            if (p_Value.length >= 3) {
                const strPrefix = p_Value.substring(0, 2).toLowerCase();
                if ("0x" === strPrefix) {
                    p_fromRepresentation = IntegerRepresentations.StringHexadecimal;
                }
                else if ("0b" === strPrefix) {
                    p_fromRepresentation = IntegerRepresentations.StringBinary;
                }
                else if ("0o" === strPrefix) {
                    p_fromRepresentation = IntegerRepresentations.StringOctal;
                }
            }
            else {
                if (p_Value.$_isValidInt()) {
                    p_fromRepresentation = IntegerRepresentations.StringDecimal;
                }
            }
        }
        else if ("number" === typeof p_Value) {
            p_fromRepresentation = IntegerRepresentations.Number;
        }
        else if ("bigint" === typeof p_Value) {
            p_fromRepresentation = IntegerRepresentations.BigInt;
        }
        else if (p_Value instanceof Buffer) {
            p_fromRepresentation = IntegerRepresentations.BufferUInt8;
        }
    }
    if ("undefined" === typeof p_fromRepresentation ||
        !INTEGER_REPRESENTATIONS.includes(p_fromRepresentation)) {
        throw new Error(`Invalid integer representation: '${p_fromRepresentation}'`);
    }
    if (!INTEGER_REPRESENTATIONS.includes(p_toRepresentation)) {
        throw new Error(`Invalid integer representation: '${p_toRepresentation}'`);
    }
    if (p_toRepresentation === p_fromRepresentation) {
        return p_Value;
    }
    let intValue;
    switch (p_fromRepresentation) {
        case IntegerRepresentations.BigInt:
            intValue = p_Value;
            break;
        case IntegerRepresentations.BufferUInt8:
            intValue = BigInt(`0x${p_Value.toString('hex')}`);
            break;
        case IntegerRepresentations.Number:
        case IntegerRepresentations.StringBinary:
        case IntegerRepresentations.StringDecimal:
        case IntegerRepresentations.StringHexadecimal:
        case IntegerRepresentations.StringOctal:
            intValue = BigInt(p_Value);
            break;
        case IntegerRepresentations.StringBase36:
            intValue = ConvertIntFromBase(p_Value, 36);
            break;
        case IntegerRepresentations.StringBase64:
            intValue = BigInt(`0x${Buffer.from(p_Value, 'base64').toString('hex')}`);
            break;
        case IntegerRepresentations.StringBase64Url:
            intValue = BigInt(`0x${Buffer.from(p_Value, 'base64url').toString('hex')}`);
            break;
        default:
            throw new Error("Something while generating random integer.");
    }
    switch (p_toRepresentation) {
        case IntegerRepresentations.BigInt:
            return intValue;
        case IntegerRepresentations.Number:
            try {
                return Number(intValue);
            }
            catch (p_Exception) {
                throw new Error("Value cannot be represented in number type");
            }
        case IntegerRepresentations.BufferUInt8:
            return ConvertIntToBuffer(intValue);
        case IntegerRepresentations.StringBase36:
            return intValue.toString(36);
        case IntegerRepresentations.StringBase64:
            return ConvertIntToBuffer(intValue).toString('base64');
        case IntegerRepresentations.StringBase64Url:
            return ConvertIntToBuffer(intValue).toString('base64url');
        case IntegerRepresentations.StringBinary:
            return intValue.toString(2);
        case IntegerRepresentations.StringDecimal:
            return intValue.toString();
        case IntegerRepresentations.StringHexadecimal:
            return intValue.toString(16);
        case IntegerRepresentations.StringOctal:
            return intValue.toString(8);
        default:
            throw new Error("Something while generating random integer.");
    }
};
Number.prototype.$_toDecimal = function (p_DecimalPlaces) {
    if (isFinite(Number(this))) {
        return parseFloat(this.toFixed(p_DecimalPlaces));
    }
    return undefined;
};
Number.prototype.$_toDecimalString = function (p_ThousandSeparator, p_DecimalPlaces) {
    p_ThousandSeparator = p_ThousandSeparator || ".";
    p_DecimalPlaces = p_DecimalPlaces || 2;
    throw new Error("Not implemented");
};
Number.prototype.$_toInt = function () {
    if (isFinite(Number(this))) {
        return Math.round(Number(this));
    }
    return undefined;
};
Number.prototype.$_toIntString = function () {
    const intNumber = Number(this).$_toInt();
    if ("undefined" != typeof intNumber) {
        return intNumber.toString();
    }
    return undefined;
};
Number.$_randomInt = function (p_SizeInBytes, p_ReturnIn = IntegerRepresentations.BigInt) {
    p_SizeInBytes = Math.round(p_SizeInBytes);
    if (isNaN(p_SizeInBytes) || (p_SizeInBytes < 1 ||
        p_SizeInBytes > 128)) {
        throw "Size of random number in bytes must be a positive integer between 1 and 128";
    }
    let strHex = "";
    let strBin = "";
    let bufBytes;
    if (p_SizeInBytes >= 9) {
        bufBytes = Buffer.alloc(p_SizeInBytes);
        Crypto.getRandomValues(bufBytes);
        strHex = `0x${bufBytes.toString('hex')}`;
    }
    else {
        const intSize = p_SizeInBytes * 8;
        const arrBits = new Array(intSize);
        for (let intA = 0; intA < intSize; intA++) {
            arrBits[intA] = Math.round(Math.random());
        }
        strBin = `0b${arrBits.join("")}`;
    }
    switch (p_ReturnIn) {
        case IntegerRepresentations.BigInt:
            return BigInt(strBin || strHex);
        case IntegerRepresentations.BufferUInt8:
            if (p_SizeInBytes >= 9) {
                return bufBytes;
            }
            else {
                return ConvertIntToBuffer(BigInt(strBin));
            }
        case IntegerRepresentations.StringBase36:
            return BigInt(strBin || strHex).toString(36);
        case IntegerRepresentations.StringBase64:
            if (p_SizeInBytes >= 9) {
                return bufBytes.toString('base64');
            }
            else {
                return ConvertIntToBuffer(BigInt(strBin)).toString('base64');
            }
        case IntegerRepresentations.StringBase64Url:
            if (p_SizeInBytes >= 9) {
                return bufBytes.toString('base64url');
            }
            else {
                return ConvertIntToBuffer(BigInt(strBin)).toString('base64url');
            }
        case IntegerRepresentations.StringBinary:
            if (p_SizeInBytes < 9) {
                return strBin.substring(2);
            }
            else {
                return BigInt(strHex).toString(2);
            }
        case IntegerRepresentations.StringDecimal:
            return BigInt(strBin || strHex).toString();
        case IntegerRepresentations.StringOctal:
            return BigInt(strBin || strHex).toString(8);
        case IntegerRepresentations.StringHexadecimal:
            if (p_SizeInBytes >= 9) {
                return strHex.substring(2);
            }
            else {
                return BigInt(strBin).toString(16);
            }
        default:
            throw new Error("Something while generating random integer.");
    }
};
//# sourceMappingURL=number.js.map