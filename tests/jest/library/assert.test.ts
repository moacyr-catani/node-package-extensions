import { XT } from "../../../src/library/index";


describe("Assert library", () => 
{
    test("date", () =>
    {
        // Valid
        expect(XT.Assert.date(new Date(522135132)))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date("2021-01-01"))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date("2021-01-01"))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date(5221984321))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date("04/10/2021", "MM/DD/YYYY"))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date("30/02/2021", "MM/DD/YYYY", new Date()))
        .toBeInstanceOf(Date);



        // Invalid, no alternative value
        expect(XT.Assert.date("2021-01-32"))
        .toBeNull();

        expect(XT.Assert.date("30/02/2021", "MM/DD/YYYY"))
        .toBeNull();

        expect(XT.Assert.date(Infinity))
        .toBeNull();

        expect(XT.Assert.date(NaN))
        .toBeNull();

        expect(XT.Assert.date(new Date(Infinity)))
        .toBeNull();

        expect(XT.Assert.date(new Date(NaN)))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.date("30/02/2021", 
                              "MM/DD/YYYY", 
                              new Date()))
        .toBeInstanceOf(Date);

        expect(XT.Assert.date(new Date(Infinity), 
                              new Date()))
        .toBeInstanceOf(Date);



        // Invalid, with invalid alternative value
        expect(() => XT.Assert.date("30/02/2021", 
                                    "MM/DD/YYYY", 
                                    new Date(NaN)))
        .toThrow();
    });  



    test("decimal", () =>
    {
        // Valid
        expect(XT.Assert.decimal(0.1))
        .toBe(0.1);

        expect(XT.Assert.decimal("0.1"))
        .toBe(0.1);

        expect(XT.Assert.decimal("0,1", ","))
        .toBe(0.1);

        expect(XT.Assert.decimal("10112.01"))
        .toBe(10112.01);

        expect(XT.Assert.decimal("10.112,01", ",", "."))
        .toBe(10112.01);



        // Invalid, no alternative value
        expect(XT.Assert.decimal("10.112,01", ".", ","))
        .toBeNull();

        expect(XT.Assert.decimal(Infinity))
        .toBeNull();

        expect(XT.Assert.decimal("error"))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.decimal("10.11.2", ".", 1.1))
        .toBe(1.1);

        expect(XT.Assert.decimal("10.112,01", ".", ",", 1.1))
        .toBe(1.1);

        expect(XT.Assert.decimal(Infinity, 1.2))
        .toBe(1.2);

        expect(XT.Assert.decimal("error", 1.3))
        .toBe(1.3);



        // Invalid, with invalid alternative value
        expect(() => XT.Assert.decimal("error", NaN))
        .toThrow();
    });  


    test("int8", () =>
    {
        // Valid
        expect(XT.Assert.int8(10))
        .toBe(10);

        expect(XT.Assert.int8(127))
        .toBe(127);

        expect(XT.Assert.int8(-128))
        .toBe(-128);

        expect(XT.Assert.int8("10"))
        .toBe(10);


        // Invalid, no alternative value
        expect(XT.Assert.int8(128))
        .toBeNull();

        expect(XT.Assert.int8("10112"))
        .toBeNull();

        expect(XT.Assert.int8(Infinity))
        .toBeNull();

        expect(XT.Assert.int8("error"))
        .toBeNull();


        // Invalid, with alternative value
        expect(XT.Assert.int8(128, 0))
        .toBe(0);

        expect(XT.Assert.int8("10112", 2))
        .toBe(2);

        expect(XT.Assert.int8(Infinity, 3))
        .toBe(3);

        expect(XT.Assert.int8("error", 4))
        .toBe(4);
    });  



    test("int16", () =>
    {
        // Valid
        expect(XT.Assert.int16(10))
        .toBe(10);

        expect(XT.Assert.int16(32_767))
        .toBe(32_767);

        expect(XT.Assert.int16(-32_768))
        .toBe(-32_768);

        expect(XT.Assert.int16("1001"))
        .toBe(1001);

        expect(XT.Assert.int16("1,001", ","))
        .toBe(1001);

        expect(XT.Assert.int16("1.003", "."))
        .toBe(1003);



        // Invalid, no alternative value
        expect(XT.Assert.int16(32_768))
        .toBeNull();

        expect(XT.Assert.int16(-32_769))
        .toBeNull();

        expect(XT.Assert.int16(Infinity))
        .toBeNull();

        expect(XT.Assert.int16("error"))
        .toBeNull();

        expect(XT.Assert.int16("1.001"))
        .toBeNull();

        expect(XT.Assert.int16("1.003", ","))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.int16(32_768, 1))
        .toBe(1);

        expect(XT.Assert.int16(-32_769, 2))
        .toBe(2);

        expect(XT.Assert.int16(Infinity, 3))
        .toBe(3);

        expect(XT.Assert.int16("error", 4))
        .toBe(4);

        expect(XT.Assert.int16("1.001", 5))
        .toBe(5);

        expect(XT.Assert.int16("1.003", ",", 6))
        .toBe(6);
    });  



    test("int32", () =>
    {
        // Valid
        expect(XT.Assert.int32(10))
        .toBe(10);

        expect(XT.Assert.int32(2_147_483_647))
        .toBe(2_147_483_647);

        expect(XT.Assert.int32(-2_147_483_648))
        .toBe(-2_147_483_648);

        expect(XT.Assert.int32("100132152"))
        .toBe(100132152);

        expect(XT.Assert.int32("1,001,012", ","))
        .toBe(1001012);

        expect(XT.Assert.int32("1.003.123.658", "."))
        .toBe(1003123658);



        // Invalid, no alternative value
        expect(XT.Assert.int32(2_147_483_649))
        .toBeNull();

        expect(XT.Assert.int32(-2_147_483_649))
        .toBeNull();

        expect(XT.Assert.int32(Infinity))
        .toBeNull();

        expect(XT.Assert.int32("error"))
        .toBeNull();

        expect(XT.Assert.int32("1.001"))
        .toBeNull();

        expect(XT.Assert.int32("1.003", ","))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.int32(2_147_483_649, 1))
        .toBe(1);

        expect(XT.Assert.int32(-2_147_483_649, 2))
        .toBe(2);

        expect(XT.Assert.int32(Infinity, 3))
        .toBe(3);

        expect(XT.Assert.int32("error", 4))
        .toBe(4);

        expect(XT.Assert.int32("1.001", 5))
        .toBe(5);

        expect(XT.Assert.int32("1.003", ",", 6))
        .toBe(6);



        // Invalid, with invalid alternative value
        expect( () => XT.Assert.int32(2_147_483_649, 2_147_483_650))
        .toThrow();
    });  



    test("int64", () =>
    {
        // Valid
        expect(XT.Assert.int64(10))
        .toBe(10n);

        expect(XT.Assert.int64(9_223_372_036_854_775_807n))
        .toBe(9_223_372_036_854_775_807n);

        expect(XT.Assert.int64(-9_223_372_036_854_775_808n))
        .toBe(-9_223_372_036_854_775_808n);

        expect(XT.Assert.int64("100132152"))
        .toBe(100132152n);

        expect(XT.Assert.int64("1,001,012", ","))
        .toBe(1001012n);

        expect(XT.Assert.int64("1.003.123.658.877.685.654", "."))
        .toBe(1003123658877685654n);



        // Invalid, no alternative value
        expect(XT.Assert.int64(9_223_372_036_854_775_809n))
        .toBeNull();

        expect(XT.Assert.int64(-9_223_372_036_854_775_809n))
        .toBeNull();

        expect(XT.Assert.int64(Infinity))
        .toBeNull();

        expect(XT.Assert.int64("error"))
        .toBeNull();

        expect(XT.Assert.int64("1.001"))
        .toBeNull();

        expect(XT.Assert.int64("1.003", ","))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.int64(9_223_372_036_854_775_809n, 1n))
        .toBe(1n);

        expect(XT.Assert.int64(-9_223_372_036_854_775_809n, 2n))
        .toBe(2n);

        expect(XT.Assert.int64(Infinity, 3n))
        .toBe(3n);

        expect(XT.Assert.int64("error", 4n))
        .toBe(4n);

        expect(XT.Assert.int64("1.001", 5n))
        .toBe(5n);

        expect(XT.Assert.int64("1.003", ",", 6n))
        .toBe(6n);



        // Invalid, with invalid alternative value
        expect( () => XT.Assert.int64(9_223_372_036_854_775_809n, 9_223_372_036_854_775_810n))
        .toThrow();
    });  



    test("uint8", () =>
    {
        // Valid
        expect(XT.Assert.uint8(10))
        .toBe(10);

        expect(XT.Assert.uint8(255))
        .toBe(255);

        expect(XT.Assert.uint8(0))
        .toBe(0);

        expect(XT.Assert.uint8("10"))
        .toBe(10);



        // Invalid, no alternative value
        expect(XT.Assert.uint8(256))
        .toBeNull();

        expect(XT.Assert.uint8(-256))
        .toBeNull();

        expect(XT.Assert.uint8("10112"))
        .toBeNull();

        expect(XT.Assert.uint8(Infinity))
        .toBeNull();

        expect(XT.Assert.uint8("error"))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.uint8(256, 0))
        .toBe(0);

        expect(XT.Assert.uint8("10112", 2))
        .toBe(2);

        expect(XT.Assert.uint8(Infinity, 3))
        .toBe(3);

        expect(XT.Assert.uint8("error", 4))
        .toBe(4);



       // Invalid, with invalid alternative value
       expect( () => XT.Assert.uint8(256, 257))
       .toThrow();

       expect( () => XT.Assert.uint8(256, -2))
       .toThrow();

    });  



    test("uint16", () =>
    {
        // Valid
        expect(XT.Assert.uint16(10))
        .toBe(10);

        expect(XT.Assert.uint16(65_535))
        .toBe(65_535);

        expect(XT.Assert.uint16(0))
        .toBe(0);




        // Invalid, no alternative value
        expect(XT.Assert.uint16(65_536))
        .toBeNull();

        expect(XT.Assert.uint16(-65_536))
        .toBeNull();

        expect(XT.Assert.uint16(Infinity))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.uint16(65_536, 1))
        .toBe(1);

        expect(XT.Assert.uint16(-65_536, 2))
        .toBe(2);

        expect(XT.Assert.uint16(Infinity, 3))
        .toBe(3);



        // Invalid, with invalid alternative value
        expect( () => XT.Assert.int16(65_536, 65_537))
        .toThrow();
    });  



    test("uint32", () =>
    {
        // Valid
        expect(XT.Assert.uint32(10))
        .toBe(10);

        expect(XT.Assert.uint32(4_294_967_295))
        .toBe(4_294_967_295);

        expect(XT.Assert.uint32(0))
        .toBe(0);




        // Invalid, no alternative value
        expect(XT.Assert.uint32(4_294_967_296))
        .toBeNull();

        expect(XT.Assert.uint32(-4_294_967_296))
        .toBeNull();

        expect(XT.Assert.uint32(Infinity))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.uint32(4_294_967_297, 1))
        .toBe(1);

        expect(XT.Assert.uint32(-4_294_967_297, 2))
        .toBe(2);

        expect(XT.Assert.uint32(Infinity, 3))
        .toBe(3);



        // Invalid, with invalid alternative value
        expect( () => XT.Assert.uint32(4_294_967_297, 4_294_967_298))
        .toThrow();
    });  



    test("uint64", () =>
    {
        // Valid
        expect(XT.Assert.uint64(10))
        .toBe(10n);

        expect(XT.Assert.uint64(18_446_744_073_709_551_615n))
        .toBe(18_446_744_073_709_551_615n);

        expect(XT.Assert.uint64(0))
        .toBe(0n);




        // Invalid, no alternative value
        expect(XT.Assert.uint64(18_446_744_073_709_551_616n))
        .toBeNull();

        expect(XT.Assert.uint64(-18_446_744_073_709_551_616n))
        .toBeNull();

        expect(XT.Assert.uint64(Infinity))
        .toBeNull();



        // Invalid, with alternative value
        expect(XT.Assert.uint64(18_446_744_073_709_551_616n, 1n))
        .toBe(1n);

        expect(XT.Assert.uint64(-18_446_744_073_709_551_616n, 2n))
        .toBe(2n);

        expect(XT.Assert.uint64(Infinity, 3n))
        .toBe(3n);



        // Invalid, with invalid alternative value
        expect( () => XT.Assert.uint64(18_446_744_073_709_551_616n, 18_446_744_073_709_551_617n))
        .toThrow();
    });  


});