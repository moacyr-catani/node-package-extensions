import { XT } from "../../../src/library/index";
import { IntegerRepresentations } from "../../../src/common/index";
//import { XT, IntegerRepresentations } from "../../../lib/index";


declare global {
    interface BigInt {
        toJSON(): string;
    }
}

BigInt.prototype.toJSON = function () { return this.toString() }




describe("Number library", () => 
{
    test("changeIntegerRepresentation -> valid", () =>
    {
        expect( XT.Number.changeIntegerRepresentation(12345679, 
                                                      IntegerRepresentations.StringBinary))
        .toBe("101111000110000101001111");


        expect( XT.Number.changeIntegerRepresentation("0b101111000110000101001111", 
                                                       IntegerRepresentations.Number,
                                                       IntegerRepresentations.StringBinary))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("101111000110000101001111", 
                                                       IntegerRepresentations.Number,
                                                       IntegerRepresentations.StringBinary))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("0b101111000110000101001111", 
                                                       IntegerRepresentations.Number))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("12345679", 
                                                       IntegerRepresentations.StringBinary))
        .toBe("101111000110000101001111");


        expect( XT.Number.changeIntegerRepresentation("101111000110000101001111", 
                                                      IntegerRepresentations.Number,
                                                      IntegerRepresentations.StringBinary))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation(12345679, 
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe("bc614f");


        expect( XT.Number.changeIntegerRepresentation("0xbc614f", 
                                                      IntegerRepresentations.Number,
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("bc614f", 
                                                      IntegerRepresentations.Number,
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation(12345679, 
                                                      IntegerRepresentations.StringOctal))
        .toBe("57060517");


        expect( XT.Number.changeIntegerRepresentation("0o57060517",
                                                      IntegerRepresentations.Number, 
                                                      IntegerRepresentations.StringOctal))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("57060517",
                                                      IntegerRepresentations.Number, 
                                                      IntegerRepresentations.StringOctal))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("0o57060517",
                                                      IntegerRepresentations.Number))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("57060517",
                                                      IntegerRepresentations.Number, 
                                                      IntegerRepresentations.StringOctal))
        .toBe(12345679);


        expect( XT.Number.changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                      IntegerRepresentations.BigInt))
        .toBe(932813181816876619725749033491n);


        expect( XT.Number.changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                      IntegerRepresentations.StringDecimal))
        .toBe("932813181816876619725749033491");


        expect( XT.Number.changeIntegerRepresentation("bc614faa872dc46efdf3f1a13", 
                                                      IntegerRepresentations.BigInt,
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe(932813181816876619725749033491n);


        expect( XT.Number.changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe("0xbc614faa872dc46efdf3f1a13");


        expect( XT.Number.changeIntegerRepresentation(932813181816876619725749033491n, 
                                                      IntegerRepresentations.StringHexadecimal))
        .toBe("bc614faa872dc46efdf3f1a13");


        expect( XT.Number.changeIntegerRepresentation(9328131818168766197257490334591n, 
                                                      IntegerRepresentations.StringBase64))
        .toBe("dbzRypR8msVeuHcDfw==");


        expect( XT.Number.changeIntegerRepresentation("dbzRypR8msVeuHcDfw==", 
                                                      IntegerRepresentations.BigInt,
                                                      IntegerRepresentations.StringBase64))
        .toBe(9328131818168766197257490334591n);


        expect( XT.Number.changeIntegerRepresentation(932813181816876619725749033491n, 
                                                      IntegerRepresentations.StringBase64Url))
        .toBe("C8YU-qhy3Ebv3z8aEw");


        expect( XT.Number.changeIntegerRepresentation("C8YU-qhy3Ebv3z8aEw", 
                                                      IntegerRepresentations.BigInt,
                                                      IntegerRepresentations.StringBase64Url))
        .toBe(932813181816876619725749033491n);


        expect( XT.Number.changeIntegerRepresentation("C8YU-qhy3Ebv3z8aEw", 
                                                      IntegerRepresentations.StringBase36,
                                                      IntegerRepresentations.StringBase64Url))
        .toBe("2ifrat1mfib4p9c1e0b7");


        expect( XT.Number.changeIntegerRepresentation("2ifrat1mfib4p9c1e0b7", 
                                                      IntegerRepresentations.BigInt,
                                                      IntegerRepresentations.StringBase36))
        .toBe(932813181816876619725749033491n);


        const objBuffer: Buffer = Buffer.from([98, 112])
        expect( XT.Number.changeIntegerRepresentation(objBuffer, 
                                                      IntegerRepresentations.Number))
        .toBe(25_200);


        expect( XT.Number.changeIntegerRepresentation(objBuffer, 
                                                      IntegerRepresentations.Number,
                                                      IntegerRepresentations.BufferUInt8))
        .toBe(25_200);


        const objBuffer2: Buffer = <Buffer>XT.Number.changeIntegerRepresentation(25_200, 
                                                                                 IntegerRepresentations.BufferUInt8)
        expect( objBuffer2[0] )
        .toBe(98)

        expect( objBuffer2[1] )
        .toBe(112)
    });                                                 



    test("changeIntegerRepresentation -> invalid", () =>
    {
        expect( () => XT.Number.changeIntegerRepresentation(12345679, <IntegerRepresentations>"invalid"))
        .toThrow();

        expect( () => XT.Number.changeIntegerRepresentation(12345679, IntegerRepresentations.StringBase64, <IntegerRepresentations>"invalid"))
        .toThrow();

        expect( () => XT.Number.changeIntegerRepresentation("C8YU-qhy3Ebv3z8aEw", 
                                                            IntegerRepresentations.Number,
                                                            IntegerRepresentations.StringBase64Url))
        .toThrow();
    });     



    test("createRandomInt - valid", () =>
    {
        expect(typeof XT.Number.createRandomInt(6, IntegerRepresentations.Number))
        .toBe("number");

        expect(typeof XT.Number.createRandomInt(8, IntegerRepresentations.BigInt))
        .toBe("bigint");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.BigInt))
        .toBe("bigint");

        expect(typeof XT.Number.createRandomInt(8, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(8, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringBase36))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(8, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringDecimal))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(8, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof XT.Number.createRandomInt(12, IntegerRepresentations.StringOctal))
        .toBe("string");

        expect( XT.Number.createRandomInt(8, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);

        expect( XT.Number.createRandomInt(12, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);
    });



    test("createRandomInt - invalid", () =>
    {
        expect(() => XT.Number.createRandomInt(7, IntegerRepresentations.Number))
        .toThrow();

        expect(() => XT.Number.createRandomInt(-1, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => XT.Number.createRandomInt(129, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => XT.Number.createRandomInt(10, <IntegerRepresentations>"invalid"))
        .toThrow();
    });   



    test("isInt", () =>
    {
        expect( XT.Number.isInt(123_123))
        .toBe(true);

        expect( XT.Number.isInt(123_123.0))
        .toBe(true);

        expect( XT.Number.isInt(123_123.1))
        .toBe(false);

        expect( XT.Number.isInt(12345654321354312353120131n))
        .toBe(true);

        expect( XT.Number.isInt(-12345654321354312353120131n))
        .toBe(true);

        expect( XT.Number.isInt(0.00001))
        .toBe(false);

        expect( XT.Number.isInt(10/0))
        .toBe(false);

        expect( XT.Number.isInt(NaN))
        .toBe(false);

        expect( XT.Number.isInt(Infinity))
        .toBe(false);
    });                                                 



    test("isInt8", () =>
    {
        expect( XT.Number.isInt8(123))
        .toBe(true);

        expect( XT.Number.isInt8(128))
        .toBe(false);

        expect( XT.Number.isInt8(-128))
        .toBe(true);

        expect( XT.Number.isInt8(10.0001))
        .toBe(false);

        expect( XT.Number.isInt8(10/0))
        .toBe(false);

        expect( XT.Number.isInt8(NaN))
        .toBe(false);

        expect( XT.Number.isInt8(Infinity))
        .toBe(false);
    });                                                 



    test("isInt16", () =>
    {
        expect( XT.Number.isInt16(32_000))
        .toBe(true);

        expect( XT.Number.isInt16(32_768))
        .toBe(false);

        expect( XT.Number.isInt16(-32_768))
        .toBe(true);

        expect( XT.Number.isInt16(-32_769))
        .toBe(false);

        expect( XT.Number.isInt16(10.0001))
        .toBe(false);
    });                                                 



    test("isInt32", () =>
    {
        expect( XT.Number.isInt32(1_532_145))
        .toBe(true);

        expect( XT.Number.isInt32(2_147_483_648))
        .toBe(false);

        expect( XT.Number.isInt32(-2_147_483_648))
        .toBe(true);

        expect( XT.Number.isInt32(2_147_483_645))
        .toBe(true);

        expect( XT.Number.isInt32(-2_147_483_649))
        .toBe(false);
    });                                                 



    test("isInt64", () =>
    {
        expect( XT.Number.isInt64(9_223_372_036_854_775_807n))
        .toBe(true);

        expect( XT.Number.isInt64(9_223_372_036_854_775_808n))
        .toBe(false);

        expect( XT.Number.isInt64(-9_223_372_036_854_775_808n))
        .toBe(true);

        expect( XT.Number.isInt64(2_147_483_645))
        .toBe(true);

        expect( XT.Number.isInt64(-9_223_372_036_854_775_809n))
        .toBe(false);
    });                                                 



    test("isUInt8", () =>
    {
        expect( XT.Number.isUInt8(0))
        .toBe(true);

        expect( XT.Number.isUInt8(123))
        .toBe(true);

        expect( XT.Number.isUInt8(255))
        .toBe(true);

        expect( XT.Number.isUInt8(256))
        .toBe(false);

        expect( XT.Number.isUInt8(-128))
        .toBe(false);

        expect( XT.Number.isUInt8(10.0001))
        .toBe(false);

        expect( XT.Number.isUInt8(10/0))
        .toBe(false);

        expect( XT.Number.isUInt8(NaN))
        .toBe(false);

        expect( XT.Number.isUInt8(Infinity))
        .toBe(false);
    });                                                 



    test("isUInt16", () =>
    {
        expect( XT.Number.isUInt16(32_000))
        .toBe(true);

        expect( XT.Number.isUInt16(65_535))
        .toBe(true);

        expect( XT.Number.isUInt16(-32_768))
        .toBe(false);

        expect( XT.Number.isUInt16(65_536))
        .toBe(false);
    });                                                 



    test("isUInt32", () =>
    {
        expect( XT.Number.isUInt32(1_532_145))
        .toBe(true);

        expect( XT.Number.isUInt32(-2))
        .toBe(false);

        expect( XT.Number.isUInt32(4_294_967_295))
        .toBe(true);

        expect( XT.Number.isUInt32(4_294_967_296))
        .toBe(false);
    });                                                 



    test("isUInt64", () =>
    {
        expect( XT.Number.isUInt64(10))
        .toBe(true);

        expect( XT.Number.isUInt64(-1))
        .toBe(false);

        expect( XT.Number.isUInt64(-9_223_372_036_854_775_808n))
        .toBe(false);

        expect( XT.Number.isUInt64(18_446_744_073_709_551_615n))
        .toBe(true);

        expect( XT.Number.isUInt64(18_446_744_073_709_551_616n))
        .toBe(false);
    });   



    test("toBigInt -> valid", () =>
    {
        expect( XT.Number.toBigInt(123.73))
        .toBe(123n);

        expect( XT.Number.toBigInt(123.123))
        .toBe(123n);
        
        expect( XT.Number.toBigInt(-42000000001213216n))
        .toBe(-42000000001213216n);

        expect( XT.Number.toBigInt(4200000000121321665482132488512354n))
        .toBe(4200000000121321665482132488512354n);

        expect( XT.Number.toBigInt(NaN))
        .toBeUndefined();

    });    



    test("toDecimal -> valid", () =>
    {
        expect( XT.Number.toDecimal(123.123, 2))
        .toBe(123.12);

        expect( XT.Number.toDecimal(123, 2))
        .toBe(123.0);
    });                                                 


    
    test("toDecimal -> invalid", () =>
    {
        expect( XT.Number.toDecimal(Infinity, 2))
        .toBeUndefined();

        expect( XT.Number.toDecimal(10/0, 1))
        .toBeUndefined();
    });                                                 



    test("toDecimalString -> valid", () =>
    {
        expect( XT.Number.toDecimalString(1234.1234, 0))
        .toBe("1234");

        expect( XT.Number.toDecimalString(1234.1234))
        .toBe("1234.12");

        expect( XT.Number.toDecimalString(12345678.1234, 2, ",", "."))
        .toBe("12.345.678,12");

        expect( XT.Number.toDecimalString(123456781234.1234, 5, ".", ","))
        .toBe("123,456,781,234.12340");

        expect( XT.Number.toDecimalString(1234.1234, 2, ",", "."))
        .toBe("1.234,12");

        expect( XT.Number.toDecimalString(1234.1234, 3))
        .toBe("1234.123");
    });       
    


    test("toDecimalString -> invalid", () =>
    {
        expect( XT.Number.toDecimalString(10/0, 2))
        .toBeUndefined();

        expect(XT.Number.toDecimalString(Infinity, 2, ",", "."))
        .toBeUndefined();
    });    

    

    test("toInt -> valid", () =>
    {
        expect( XT.Number.toInt(123.73))
        .toBe(123.0);

        expect( XT.Number.toInt(123.123))
        .toBe(123.0);
        
        expect( XT.Number.toInt(-42.0000000012))
        .toBe(-42.0);
    });                                                 



    test("toInt -> invalid", () =>
    {
        expect( XT.Number.toInt(10/0))
        .toBeUndefined();

        expect( XT.Number.toInt(Infinity))
        .toBeUndefined();
    });                                                 



    test("toIntString -> valid", () =>
    {

        expect( XT.Number.toIntString(-5))
        .toBe("-5");

        expect( XT.Number.toIntString(123.73))
        .toBe("123");

        expect( XT.Number.toIntString(123456789, "."))
        .toBe("123.456.789");

        expect( XT.Number.toIntString(23456789, "_"))
        .toBe("23_456_789");
    });                                                 



    test("toIntString -> invalid", () =>
    {
        expect( XT.Number.toIntString(10/0))
        .toBeUndefined();

        expect( XT.Number.toIntString(Infinity))
        .toBeUndefined();
    });                                                  
});