import { XT, IntegerRepresentations } from "../../../src/index";
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

        expect( XT.Number.changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13", 
                                                      IntegerRepresentations.BigInt))
        .toBe(932813181816876619725749033491n);

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
    });                                                 



    test("changeIntegerRepresentation -> invalid", () =>
    {
        expect( () => XT.Number.changeIntegerRepresentation(12345679, <IntegerRepresentations>"invalid"))
        .toThrow();

        expect( () => XT.Number.changeIntegerRepresentation(12345679, IntegerRepresentations.StringBase64, <IntegerRepresentations>"invalid"))
        .toThrow();
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
        expect( XT.Number.toDecimalString(Infinity, 2))
        .toBeUndefined();

        expect( XT.Number.toDecimalString(10/0, 1))
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



    test("randomInt - valid", () =>
    {
        expect(typeof XT.Number.randomInt(6, IntegerRepresentations.Number))
        .toBe("number");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.BigInt))
        .toBe("bigint");

        expect(typeof XT.Number.randomInt(8, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringBase64))
        .toBe("string");

        expect(typeof XT.Number.randomInt(8, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringBase64Url))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringBase36))
        .toBe("string");

        expect(typeof XT.Number.randomInt(8, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringBinary))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringDecimal))
        .toBe("string");

        expect(typeof XT.Number.randomInt(8, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringHexadecimal))
        .toBe("string");

        expect(typeof XT.Number.randomInt(12, IntegerRepresentations.StringOctal))
        .toBe("string");

        expect( XT.Number.randomInt(8, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);

        expect( XT.Number.randomInt(12, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);
    });



    test("randomInt - invalid", () =>
    {
        expect(() => XT.Number.randomInt(7, IntegerRepresentations.Number))
        .toThrow();

        expect(() => XT.Number.randomInt(-1, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => XT.Number.randomInt(129, IntegerRepresentations.BigInt))
        .toThrow();

        expect(() => XT.Number.randomInt(10, <IntegerRepresentations>"invalid"))
        .toThrow();
    });       
});
