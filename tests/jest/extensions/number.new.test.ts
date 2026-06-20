import "../../../src/extensions/index.ts";
import { IntegerRepresentations } from "../../../src/common/index.ts";
import { Buffer } from "node:buffer";


describe("Number extensions", () =>
{
    test("Number.$_assertDecimal -> valid and fallback", () =>
    {
        expect(Number.$_assertDecimal("123.45"))
        .toBe(123.45);

        expect(Number.$_assertDecimal("1,234.56", ".", ","))
        .toBe(1234.56);

        expect(Number.$_assertDecimal("invalid", 0))
        .toBe(0);
    });


    test("Number.$_assertInt8 / $_assertInt16 / $_assertInt32 / $_assertInt64 -> valid and fallback", () =>
    {
        expect(Number.$_assertInt8("127"))
        .toBe(127);

        expect(Number.$_assertInt8("128", -1))
        .toBe(-1);

        expect(Number.$_assertInt16("32767"))
        .toBe(32767);

        expect(Number.$_assertInt16("32.767", "."))
        .toBe(32767);

        expect(Number.$_assertInt16("invalid", 0))
        .toBe(0);

        expect(Number.$_assertInt32("2147483647"))
        .toBe(2147483647);

        expect(Number.$_assertInt32("2.147.483.647", "."))
        .toBe(2147483647);

        expect(Number.$_assertInt32("invalid", 0))
        .toBe(0);

        expect(Number.$_assertInt64(1234567890123456789n))
        .toBe(1234567890123456789n);

        expect(Number.$_assertInt64("1_234_567_890_123_456_789", "_"))
        .toBe(1234567890123456789n);

        expect(Number.$_assertInt64("invalid", 0n))
        .toBe(0n);
    });


    test("Number.$_assertUint8 / $_assertUint16 / $_assertUint32 / $_assertUint64 -> valid and fallback", () =>
    {
        expect(Number.$_assertUint8("255"))
        .toBe(255);

        expect(Number.$_assertUint8("256", 0))
        .toBe(0);

        expect(Number.$_assertUint16("65535"))
        .toBe(65535);

        expect(Number.$_assertUint16("65.535", "."))
        .toBe(65535);

        expect(Number.$_assertUint16("invalid", 0))
        .toBe(0);

        expect(Number.$_assertUint32("4294967295"))
        .toBe(4294967295);

        expect(Number.$_assertUint32("4.294.967.295", "."))
        .toBe(4294967295);

        expect(Number.$_assertUint32("invalid", 0))
        .toBe(0);

        expect(Number.$_assertUint64("18446744073709551615"))
        .toBe(18446744073709551615n);

        expect(Number.$_assertUint64("invalid", 0n))
        .toBe(0n);
    });


    test("Number.$_changeIntegerRepresentation -> conversions", () =>
    {
        expect(Number.$_changeIntegerRepresentation(12345679,
                                                   IntegerRepresentations.StringBinary))
        .toBe("101111000110000101001111");

        expect(Number.$_changeIntegerRepresentation("0xbc614f",
                                                   IntegerRepresentations.Number,
                                                   IntegerRepresentations.StringHexadecimal))
        .toBe(12345679);

        expect(Number.$_changeIntegerRepresentation("0xbc614faa872dc46efdf3f1a13",
                                                   IntegerRepresentations.BigInt))
        .toBe(932813181816876619725749033491n);

        const buffer = Buffer.from([0x01, 0x00]);
        expect(Number.$_changeIntegerRepresentation(buffer,
                                                   IntegerRepresentations.Number))
        .toBe(256);
    });


    test("Number.$_changeIntegerRepresentation -> invalid", () =>
    {
        expect(() => Number.$_changeIntegerRepresentation(12345679,
                                                          <IntegerRepresentations>"invalid"))
        .toThrow();

        expect(() => Number.$_changeIntegerRepresentation(12345679,
                                                          IntegerRepresentations.StringBase64,
                                                          <IntegerRepresentations>"invalid"))
        .toThrow();
    });


    test("Number.$_randomInt -> valid and invalid", () =>
    {
        expect(typeof Number.$_randomInt(6, IntegerRepresentations.Number))
        .toBe("number");

        expect(typeof Number.$_randomInt(8, IntegerRepresentations.BigInt))
        .toBe("bigint");

        expect(Number.$_randomInt(8, IntegerRepresentations.BufferUInt8))
        .toBeInstanceOf(Buffer);

        expect(() => Number.$_randomInt(-1, IntegerRepresentations.Number))
        .toThrow();

        expect(() => Number.$_randomInt(129, IntegerRepresentations.BigInt))
        .toThrow();
    });


    test("Number.$_isInt / $_isInt8 / $_isInt16 / $_isInt32 / $_isInt64 / $_isUInt* / $_isValid", () =>
    {
        expect(Number.$_isInt(123_123))
        .toBe(true);

        expect(Number.$_isInt("123"))
        .toBe(true);

        expect(Number.$_isInt(123_123.1))
        .toBe(false);

        expect(Number.$_isInt8(127))
        .toBe(true);

        expect(Number.$_isInt8(128))
        .toBe(false);

        expect(Number.$_isInt16(32_000))
        .toBe(true);

        expect(Number.$_isInt16(32_768))
        .toBe(false);

        expect(Number.$_isInt32(1_532_145))
        .toBe(true);

        expect(Number.$_isInt32(4_294_967_296))
        .toBe(false);

        expect(Number.$_isInt64(9_223_372_036_854_775_807n))
        .toBe(true);

        expect(Number.$_isUInt8(255))
        .toBe(true);

        expect(Number.$_isUInt8(256))
        .toBe(false);

        expect(Number.$_isUInt16(65_535))
        .toBe(true);

        expect(Number.$_isUInt32(4_294_967_295))
        .toBe(true);

        expect(Number.$_isUInt64(18_446_744_073_709_551_615n))
        .toBe(true);

        expect(Number.$_isValid(10))
        .toBe(true);

        expect(Number.$_isValid(NaN))
        .toBe(false);
    });


    test("Number.$_toDecimal / $_toDecimalString / $_toInt / $_toIntString -> conversions", () =>
    {
        expect(Number.$_toDecimal(123.123, 2))
        .toBe(123.12);

        expect(Number.$_toDecimalString(1234.1234, 0))
        .toBe("1234");

        expect(Number.$_toDecimalString(12345678.1234, 2, ",", "."))
        .toBe("12.345.678,12");

        expect(Number.$_toInt(123.73))
        .toBe(123.0);

        expect(Number.$_toIntString(123456789, "."))
        .toBe("123.456.789");
    });


    test("Number.$_toDecimalString / $_toIntString -> invalid", () =>
    {
        expect(Number.$_toDecimalString(Infinity, 2, ",", "."))
        .toBeUndefined();

        expect(Number.$_toIntString(10 / 0))
        .toBeUndefined();
    });


    test(".$_assertInt8 / $_assertInt16 / $_assertInt32 / $_assertInt64 -> prototype assertions", () =>
    {
        expect((123).$_assertInt8())
        .toBe(123);

        expect((128).$_assertInt8(0))
        .toBe(0);

        expect((32_000).$_assertInt16())
        .toBe(32000);

        expect((32_768).$_assertInt16(0))
        .toBe(0);

        expect((1_532_145).$_assertInt32())
        .toBe(1532145);

        expect((2_147_483_648).$_assertInt32(0))
        .toBe(0);

        // expect((123).$_assertInt64())
        // .toBe(123n);

        // expect((123).$_assertInt64(0n))
        // .toBe(123n);
    });


    test(".$_assertUint8 / $_assertUint16 / $_assertUint32 / $_assertUint64 -> prototype assertions", () =>
    {
        expect((255).$_assertUint8())
        .toBe(255);

        expect((256).$_assertUint8(0))
        .toBe(0);

        expect((65_535).$_assertUint16())
        .toBe(65535);

        expect((65_536).$_assertUint16(0))
        .toBe(0);

        expect((4_294_967_295).$_assertUint32())
        .toBe(4294967295);

        expect((4_294_967_296).$_assertUint32(0))
        .toBe(0);

        // expect((123).$_assertUint64())
        // .toBe(123n);

        // expect((123).$_assertUint64(0n))
        // .toBe(123n);
    });


    test(".$_changeIntegerRepresentation -> prototype conversions", () =>
    {
        expect((123).$_changeIntegerRepresentation(IntegerRepresentations.StringHexadecimal))
        .toBe("7b");

        expect((123).$_changeIntegerRepresentation(IntegerRepresentations.BigInt))
        .toBe(123n);
    });


    test(".$_isInt / $_isInt8 / $_isInt16 / $_isInt32 / $_isInt64 / $_isUInt* / $_isValid -> prototype checks", () =>
    {
        expect((123).$_isInt())
        .toBe(true);

        expect((123.1).$_isInt())
        .toBe(false);

        expect((127).$_isInt8())
        .toBe(true);

        expect((128).$_isInt8())
        .toBe(false);

        expect((32_000).$_isInt16())
        .toBe(true);

        expect((32_768).$_isInt16())
        .toBe(false);

        expect((1_532_145).$_isInt32())
        .toBe(true);

        expect((2_147_483_648).$_isInt32())
        .toBe(false);

        expect((123).$_isInt64())
        .toBe(true);

        expect((255).$_isUInt8())
        .toBe(true);

        expect((256).$_isUInt8())
        .toBe(false);

        expect((65_535).$_isUInt16())
        .toBe(true);

        expect((4_294_967_295).$_isUInt32())
        .toBe(true);

        expect((123).$_isUInt64())
        .toBe(true);

        expect((123).$_isValid())
        .toBe(true);
    });


    test(".$_toDecimal / $_toDecimalString / $_toInt / $_toIntString -> prototype conversions", () =>
    {
        expect((123.456).$_toDecimal(2))
        .toBe(123.46);

        expect((123.456).$_toDecimalString())
        .toBe("123.46");

        expect((1234567.89).$_toDecimalString(2, ",", "."))
        .toBe("1.234.567,89");

        expect((123.73).$_toInt())
        .toBe(123.0);

        expect((1234567).$_toIntString("_"))
        .toBe("1_234_567");
    });


    test(".$_toDecimalString / $_toIntString -> prototype invalid", () =>
    {
        expect((Infinity).$_toDecimalString(2))
        .toBeUndefined();

        expect((Infinity).$_toIntString())
        .toBeUndefined();
    });
});
