import "../../../src/index";


describe("Number extensions", () => 
{
    //Number(1).x
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



    test(".$_toInt -> valid", () =>
    {
        expect(Number(123.123).$_toInt())
        .toBe(123.0);
        
        expect(Number(-42.0000000012).$_toInt())
        .toBe(-42.0);
    });                                                 



    test(".$_toDecimal -> invalid", () =>
    {
        expect(Infinity.$_toInt())
        .toBeUndefined();

        expect((10/0).$_toInt())
        .toBeUndefined();
    });                                                 

});
