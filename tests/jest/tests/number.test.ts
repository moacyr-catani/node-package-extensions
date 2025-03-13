import "../../../src/index";
import { IntegerRepresentations } from "../../../src/index";


declare global {
    interface BigInt {
        toJSON(): string;
    }
}

BigInt.prototype.toJSON = function () { return this.toString() }




describe("Number extensions", () => 
{
    test(".$_changeIntegerRepresentation -> valid", () =>
    {
        expect(Number.$_changeIntegerRepresentation(12345679, 
                                                    IntegerRepresentations.StringBinary))
        .toBe("101111000110000101001111");

        expect(Number.$_changeIntegerRepresentation("0b101111000110000101001111", 
                                                    IntegerRepresentations.Number,
                                                    IntegerRepresentations.StringBinary))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation("101111000110000101001111", 
                                                    IntegerRepresentations.Number,
                                                    IntegerRepresentations.StringBinary))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation(12345679, 
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe("bc614f");

        expect(Number.$_changeIntegerRepresentation("0xbc614f", 
                                                    IntegerRepresentations.Number,
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation("bc614f", 
                                                    IntegerRepresentations.Number,
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation(12345679, 
                                                    IntegerRepresentations.StringOctal))
        .toBe("57060517");

        expect(Number.$_changeIntegerRepresentation("0o57060517",
                                                    IntegerRepresentations.Number, 
                                                    IntegerRepresentations.StringOctal))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation("57060517",
                                                    IntegerRepresentations.Number, 
                                                    IntegerRepresentations.StringOctal))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                    IntegerRepresentations.BigInt))
        .toBe(932813181816876619725749033491n);

        expect(Number.$_changeIntegerRepresentation("bc614faa872dc46efdf3f1a13", 
                                                    IntegerRepresentations.BigInt,
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe(932813181816876619725749033491n);

        expect(Number.$_changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe("0xbc614faa872dc46efdf3f1a13");


        expect(Number.$_changeIntegerRepresentation(932813181816876619725749033491n, 
                                                    IntegerRepresentations.StringHexadecimal))
        .toBe("bc614faa872dc46efdf3f1a13");

    });                                                 



    test(".$_changeIntegerRepresentation -> invalid", () =>
    {
        expect( () => Number.$_changeIntegerRepresentation(12345679, <IntegerRepresentations>"invalid"))
        .toThrow();

        expect( () => Number.$_changeIntegerRepresentation(12345679, IntegerRepresentations.StringBase64, <IntegerRepresentations>"invalid"))
        .toThrow();
    });     



    test(".$_toDecimal -> valid", () =>
    {
        expect(Number(123.123).$_toDecimal(2))
        .toBe(123.12);

        expect(Number(123).$_toDecimal(2))
        .toBe(123.0);
    });                                                 


    
    test(".$_toDecimal -> invalid", () =>
    {
        expect(Infinity.$_toDecimal(2))
        .toBeUndefined();

        expect((10/0).$_toDecimal(1))
        .toBeUndefined();
    });                                                 



    test(".$_toDecimalString -> valid", () =>
    {
        expect((1234.1234).$_toDecimalString(0))
        .toBe("1234");

        expect((1234.1234).$_toDecimalString())
        .toBe("1234.12");

        expect((12345678.1234).$_toDecimalString(2, ",", "."))
        .toBe("12.345.678,12");

        expect((123456781234.1234).$_toDecimalString(5, ".", ","))
        .toBe("123,456,781,234.12340");

        expect((1234.1234).$_toDecimalString(2, ",", "."))
        .toBe("1.234,12");

        expect((1234.1234).$_toDecimalString(3))
        .toBe("1234.123");
    });       
    


    test(".$_toDecimalString -> invalid", () =>
    {
        expect((10/0).$_toDecimalString())
        .toBeUndefined();

        expect(Infinity.$_toDecimalString(2, ",", "."))
        .toBeUndefined();
    });    

    

    test(".$_toInt -> valid", () =>
    {
        expect(Number(123.73).$_toInt())
        .toBe(123.0);

        expect(Number(123.123).$_toInt())
        .toBe(123.0);
        
        expect(Number(-42.0000000012).$_toInt())
        .toBe(-42.0);
    });                                                 



    test(".$_toInt -> invalid", () =>
    {
        expect( (10/0).$_toInt())
        .toBeUndefined();

        expect( Infinity.$_toInt())
        .toBeUndefined();
    });                                                 



    test(".$_toIntString -> valid", () =>
    {

        expect(Number(-5).$_toIntString())
        .toBe("-5");

        expect(Number(123.73).$_toIntString())
        .toBe("123");

        expect(Number(123456789).$_toIntString("."))
        .toBe("123.456.789");

        expect(Number(23456789).$_toIntString("_"))
        .toBe("23_456_789");

    });                                                 



    test(".$_toIntString -> invalid", () =>
    {
        expect( (10/0).$_toIntString())
        .toBeUndefined();

        expect( Infinity.$_toIntString())
        .toBeUndefined();
    });                                                 



    test(".$_randomInt - valid", () =>
    {
        expect(typeof Number.$_randomInt(6, IntegerRepresentations.Number))
        .toBe("number");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.BigInt))
        .toBe("bigint");

        expect(typeof Number.$_randomInt(8, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof Number.$_randomInt(8, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringBase36))
        .toBe("string");

        expect(typeof Number.$_randomInt(8, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringDecimal))
        .toBe("string");

        expect(typeof Number.$_randomInt(8, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof Number.$_randomInt(12, IntegerRepresentations.StringOctal))
        .toBe("string");

        expect(Number.$_randomInt(8, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);

        expect(Number.$_randomInt(12, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);
    });



    test(".$_randomInt - invalid", () =>
    {
        expect(() => Number.$_randomInt(7, IntegerRepresentations.Number))
        .toThrow();

        expect(() => Number.$_randomInt(-1, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => Number.$_randomInt(129, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => Number.$_randomInt(10, <IntegerRepresentations>"invalid"))
        .toThrow();
    });       
});
