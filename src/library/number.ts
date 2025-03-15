import { StringLib } from "./string";


import * as Crypto from "node:crypto";   
import { Buffer } from "node:buffer";

export type DecimalPlaces = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
export enum IntegerRepresentations
{
    BufferUInt8       = "BUFFER_UINT8",
    Number            = "NUMBER",
    BigInt            = "BIGINT",
    StringBinary      = "STRING_BINARY",
    StringOctal       = "STRING_OCTAL",
    StringDecimal     = "STRING_DECIMAL",
    StringHexadecimal = "STRING_HEXADECIMAL",
    StringBase36      = "STRING_BASE36",
    StringBase64      = "STRING_BASE64",
    StringBase64Url   = "STRING_BASE64_URL"
}

const INTEGER_REPRESENTATIONS: string[] = Object.values(IntegerRepresentations);





// ------------------------------------------------------------------------------------------------------------------------------
// #region Private functions
// ------------------------------------------------------------------------------------------------------------------------------

function _convertIntFromBase(p_value: string, 
                             p_radix: number): bigint
{ 
    // Asset value is string
    p_value = p_value.toString();

    const intSize:   number   = 10;
    const intFactor: bigint   = BigInt(p_radix ** intSize);
    let   intA:      number   = p_value.length % intSize || intSize;
    const arrParts:  string[] = [ p_value.slice(0, intA) ];

    while (intA < p_value.length)
    {
        arrParts.push(p_value.slice(intA, intA += intSize));
    }

    return arrParts.reduce((r, v) => r * intFactor + BigInt(parseInt(v, p_radix)), 0n);
}



function _convertIntToBuffer(p_value: number | bigint): Buffer
{
    let   intValue: bigint = BigInt(p_value);       // Assert bigint
    const arrBytes: Array<number> = [];

    while (intValue > 0n) 
    {
        arrBytes.push(Number(intValue & 0xFFn))
        intValue >>= 8n;
    }

    return Buffer.from(arrBytes.reverse());
}



function _formatInteger(p_Value: string,
                        p_ThousandSeparator: string): string
{
    if ("" === p_ThousandSeparator)
        return p_Value;

    let intIndex:  number = 0,
        intSize:   number = p_Value.length % 3,
        strReturn: string = "";

    intSize = 0 === intSize ?
                  3 :
                  intSize;

    while (intIndex < p_Value.length)
    {
        strReturn+= p_Value.substring(intIndex, intIndex + intSize);

        intIndex += intSize;
        intSize  = 3;

        strReturn += intIndex < p_Value.length ?
                         p_ThousandSeparator :
                         "";
    }

    return strReturn;
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------------------------
// #region Interface
// ------------------------------------------------------------------------------------------------------------------------------

export interface INumberLib
{
    changeIntegerRepresentation (value:               number | bigint | string | Buffer,
                                 toRepresentation:    IntegerRepresentations,
                                 fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer ;



    /**
     * Creates a random integer with size from 1 to 128 bytes (extremelly huge number).
     * @param {number} p_SizeInBytes Size of the random integer in bytes (from 1 to 128)
     * @param {IntegerRepresentations} p_ReturnIn The format to return the created integer
     * @example
     * // Create a 64 bits (8 bytes) random integer and return it as BigInt
     * const bigNumber: BigInt = Number.$_randomInt(8, IntegerRepresentations.BigInt);
     */
    randomInt (sizeInBytes: number, 
               returnIn:    IntegerRepresentations): number | bigint | string | ArrayBuffer;


    toDecimal (value:         number,
               decimalPlaces: DecimalPlaces): number | undefined;
 

    toDecimalString (value:             number,
                     decimalPlaces:     DecimalPlaces,
                     decimalSeparator:  string,
                     thousandSeparator: string): string | undefined;


    toInt (value: number): number | undefined;



    toIntString (value:             number,
                 thousandSeparator: string): string | undefined;



}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------------------------
// #region Number extensions
// ------------------------------------------------------------------------------------------------------------------------------

const NumberLib: INumberLib = 
{
    changeIntegerRepresentation(p_Value:               number | bigint | string | Buffer,
                                p_toRepresentation:    IntegerRepresentations,
                                p_fromRepresentation?: IntegerRepresentations): number | bigint | string | Buffer
    {
        // Check value representation
        if ("undefined" === typeof p_fromRepresentation)
        {
            if ("string" === typeof p_Value)
            {
                // Adjust to lower case
                p_Value = p_Value.toLowerCase();


                // Tries to get a prefix
                if (p_Value.length >= 3)
                {
                    const strPrefix: string = p_Value.substring(0, 2).toLowerCase();
                    
                    if ("0x" === strPrefix)
                        p_fromRepresentation = IntegerRepresentations.StringHexadecimal;

                    else if ("0b" === strPrefix)
                        p_fromRepresentation = IntegerRepresentations.StringBinary;

                    else if ("0o" === strPrefix)
                        p_fromRepresentation = IntegerRepresentations.StringOctal;
                }

                // Decimal
                else if ( StringLib.isInt(p_Value) ) // p_Value.$_isInt())
                    p_fromRepresentation = IntegerRepresentations.StringDecimal;
            }

            else if ("number" === typeof p_Value)
                p_fromRepresentation = IntegerRepresentations.Number;

            else if ("bigint" === typeof p_Value)
                p_fromRepresentation = IntegerRepresentations.BigInt;

            else if (p_Value instanceof Buffer)
                p_fromRepresentation = IntegerRepresentations.BufferUInt8;
        }



        // Check if valid 'from' representation found
        if ("undefined" === typeof p_fromRepresentation ||
            !INTEGER_REPRESENTATIONS.includes(p_fromRepresentation))
            throw new Error(`Invalid integer representation: '${p_fromRepresentation}'`);



        // Check for valid 'to' representation
        if (!INTEGER_REPRESENTATIONS.includes(p_toRepresentation))
            throw new Error(`Invalid integer representation: '${p_toRepresentation}'`);



        // Sanity check
        if (p_toRepresentation === p_fromRepresentation)
            return p_Value;



        // Include prefixes for hex, octal or binary
        if (IntegerRepresentations.StringBinary === p_fromRepresentation &&
            (<string>p_Value).substring(0, 2) !== "0b")
            p_Value = "0b" + p_Value;

        else if (IntegerRepresentations.StringHexadecimal === p_fromRepresentation &&
                (<string>p_Value).substring(0, 2) !== "0x")
            p_Value = "0x" + p_Value;

        else if (IntegerRepresentations.StringOctal === p_fromRepresentation &&
                (<string>p_Value).substring(0, 2) !== "0o")
            p_Value = "0o" + p_Value;
        


        // Get intValue (intermediate)
        let intValue: bigint;

        switch (p_fromRepresentation)
        {
            case IntegerRepresentations.BigInt:
                intValue = <bigint>p_Value;
                break;


            case IntegerRepresentations.BufferUInt8:
                intValue = BigInt(`0x${ (<Buffer>p_Value).toString('hex')}`);
                break;


            case IntegerRepresentations.Number:
            case IntegerRepresentations.StringBinary:
            case IntegerRepresentations.StringDecimal:
            case IntegerRepresentations.StringHexadecimal:
            case IntegerRepresentations.StringOctal:
                intValue = BigInt(<string|number>p_Value);
                break;


            case IntegerRepresentations.StringBase36:
                intValue = _convertIntFromBase(<string>p_Value, 36);
                break;


            case IntegerRepresentations.StringBase64:
                intValue = BigInt( `0x${Buffer.from(<string>p_Value, 'base64').toString('hex')}` );
                break;


            case IntegerRepresentations.StringBase64Url:
                intValue = BigInt( `0x${Buffer.from(<string>p_Value, 'base64url').toString('hex')}` );
                break;

            default:
                throw new Error("Something while generating random integer.")
        }


        // Return
        switch (p_toRepresentation)
        {
            case IntegerRepresentations.BigInt:
                return intValue!;
                

            case IntegerRepresentations.Number:
                try
                {
                    return Number(intValue);
                }
                catch (p_Exception)
                {
                    throw new Error("Value cannot be represented in number type");
                }


            case IntegerRepresentations.BufferUInt8:
                return _convertIntToBuffer(intValue!);


            case IntegerRepresentations.StringBase36:
                return intValue!.toString(36);


            case IntegerRepresentations.StringBase64:
                return _convertIntToBuffer(intValue!).toString('base64');


            case IntegerRepresentations.StringBase64Url:
                return _convertIntToBuffer(intValue!).toString('base64url');


            case IntegerRepresentations.StringBinary:
                return intValue!.toString(2);


            case IntegerRepresentations.StringDecimal:
                return intValue!.toString();


            case IntegerRepresentations.StringHexadecimal:
                return intValue!.toString(16);


            case IntegerRepresentations.StringOctal:
                return intValue!.toString(8);

                
            default:
                throw new Error("Something while generating random integer.")
        }
    },



    randomInt (p_SizeInBytes: number, 
               p_ReturnIn:    IntegerRepresentations = IntegerRepresentations.BigInt): number | bigint | string | ArrayBuffer
    {
        // Check params 
        //-------------------------------------------------------------------------------------------------------------

        // Assure it is an integer
        p_SizeInBytes = Math.round(p_SizeInBytes);
        
        if (isNaN(p_SizeInBytes) || (p_SizeInBytes < 1 ||
                                    p_SizeInBytes > 128))
            throw "Size of random number in bytes must be a positive integer between 1 and 128";

        if (p_SizeInBytes > 6 && p_ReturnIn === IntegerRepresentations.Number)
            throw "'Number' type can be used only for 6 bytes or less";
        //-------------------------------------------------------------------------------------------------------------

        

        // Variables
        //let intRandom: bigint;
        let strHex:    string = "";
        let strBin:    string = "";
        let bufBytes:  Buffer;



        // Method 2 (crypto), better for 9 bytes or more ...
        if (p_SizeInBytes >= 9)
        {
            // Generate random bytes
            bufBytes = Buffer.alloc(p_SizeInBytes);
            Crypto.getRandomValues(bufBytes);


            // Get value in hexadecimal
            strHex = `0x${bufBytes.toString('hex')}`;
        }


        // ... Method 2 (bit array), better for 8 bytes or less
        else
        {
            // Variables
            const intSize: number        = p_SizeInBytes * 8;
            const arrBits: Array<number> = new Array(intSize);


            // Creates a random boolean value (0|1) for each spot in string
            for (let intA: number = 0; intA < intSize; intA++)
            {
                arrBits[intA] = Math.round(Math.random());
            }


            // Convert binary string representation to BigInt
            strBin = `0b${arrBits.join("")}`;
        }


        // Return
        switch (p_ReturnIn)
        {
            case IntegerRepresentations.BigInt:
                return BigInt(strBin || strHex);


            case IntegerRepresentations.BufferUInt8:
                if (p_SizeInBytes >= 9)
                    return bufBytes!;

                else
                    return _convertIntToBuffer(BigInt(strBin));

            case IntegerRepresentations.Number:
                return Number(strBin || strHex);


            case IntegerRepresentations.StringBase36:
                return BigInt(strBin || strHex).toString(36);


            case IntegerRepresentations.StringBase64:
                if (p_SizeInBytes >= 9)
                    return bufBytes!.toString('base64');

                else
                    return _convertIntToBuffer(BigInt(strBin)).toString('base64');


            case IntegerRepresentations.StringBase64Url:
                if (p_SizeInBytes >= 9)
                    return bufBytes!.toString('base64url');

                else
                    return _convertIntToBuffer(BigInt(strBin)).toString('base64url');


            case IntegerRepresentations.StringBinary:
                if (p_SizeInBytes < 9)
                    return strBin.substring(2);

                else
                    return BigInt(strHex).toString(2);


            case IntegerRepresentations.StringDecimal:
                return BigInt(strBin || strHex).toString();


            case IntegerRepresentations.StringOctal:
                return BigInt(strBin || strHex).toString(8);


            case IntegerRepresentations.StringHexadecimal:
                if (p_SizeInBytes >= 9)
                    return strHex.substring(2);

                else
                    return BigInt(strBin).toString(16);

            default:
                throw new Error("Something while generating random integer.")
        }
    },



    toDecimal (p_Value:         number,
               p_DecimalPlaces: DecimalPlaces): number | undefined
    {
        if (isNaN(p_Value) || !isFinite(p_Value))
            return undefined;

        return parseFloat(p_Value.toFixed(p_DecimalPlaces));
    },



    toDecimalString (p_Value:             number,
                     p_DecimalPlaces:     DecimalPlaces = 2,
                     p_DecimalSeparator:  string = ".",
                     p_ThousandSeparator: string = ""): string | undefined
    {
        if (isNaN(p_Value) || !isFinite(p_Value))
            return undefined;


        const strValue: string = p_Value.toFixed(p_DecimalPlaces);

        
        if (p_DecimalPlaces === 0)
            return _formatInteger(strValue, p_ThousandSeparator);
        

        const intDecimalPos: number = strValue.indexOf(".");
        const strInteger:    string = _formatInteger(strValue.substring(0, intDecimalPos), p_ThousandSeparator);
        const strDecimal:    string = strValue.substring(intDecimalPos + 1);

        return strInteger + p_DecimalSeparator + strDecimal;
    },



    toInt (p_Value: number): number | undefined
    {
        if (isNaN(p_Value) || !isFinite(p_Value))
            return undefined;

        if (p_Value > 0)
            return Math.floor(p_Value);
        else
            return Math.ceil(p_Value);
    },



    toIntString (p_Value:             number,
                 p_ThousandSeparator: string = ""): string | undefined
    {
        if (isNaN(p_Value) || !isFinite(p_Value))
            return undefined;

        return _formatInteger( NumberLib.toInt(p_Value)!.toString(), // (p_Value).$_toInt()!.toString(), 
                               p_ThousandSeparator);
    }
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// Export object
Object.seal(NumberLib)
export  { NumberLib };