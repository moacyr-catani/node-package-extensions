import "../../../src/extensions/index";


describe("Date extensions", () => 
{
    test(".$_addDays", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21);

        expect(dtmTeste.$_addDays(4).$_toDateString())
        .toBe("2020-02-25");

        expect(dtmTeste.$_addDays(10).$_toDateString())
        .toBe("2020-03-06");

        expect(dtmTeste.$_addDays(-2).$_toDateString())
        .toBe("2020-03-04");
    });  


    test(".$_toMonthEnd", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21);

        expect(dtmTeste.$_toMonthEnd().$_toDateString())
        .toBe("2020-02-29");
    });  


    test(".$_toMonthStart", () =>
    {
        const dtmTeste: Date = new Date(2020, 3, 21);

        expect(dtmTeste.$_toMonthStart().$_toDateString())
        .toBe("2020-04-01");
    });                                                 


    test(".$_toTimeString", () =>
    {
        const dtmTeste: Date = new Date(2020, 3, 21, 10, 12, 35, 158);

        expect(dtmTeste.$_toTimeString())
        .toBe("10:12:35.158");
    });  

    
    test(".$_toYearEnd", () =>
    {
        const dtmTeste: Date = new Date(2020, 3, 21);

        expect(dtmTeste.$_toYearEnd().$_toDateString())
        .toBe("2020-12-31");
    });  


    test(".$_toYearStart", () =>    
    {
        const dtmTeste: Date = new Date(2020, 3, 21);

        expect(dtmTeste.$_toYearStart().$_toDateString())
        .toBe("2020-01-01");
    });              
    
    
    test(".$_toYearStart", () =>
    {
        const dtmValue: Date | undefined = "2010-01-02T01:10:20".$_toDate("YYYY-MM-DD hh:mm:ss");

        expect( dtmValue!.$_toString("DD/MM/YYYY hh:mm:ss:nnn"))
        .toBe("02/01/2010 01:10:20:000");
    }); 
    
});
