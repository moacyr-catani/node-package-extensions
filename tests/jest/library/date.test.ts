import { XT } from "../../../src/index";


describe("Date library", () => 
{
    test("addDays", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21);

        // Adds 4 days in dtmTest
        XT.Date.addDays(dtmTeste, 4)

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(1);
        expect( dtmTeste.getDate())    .toBe(25);


        // Adds 10 days in dtmTest
        XT.Date.addDays(dtmTeste, 10)

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(6);


        // Subtracts 2 days in dtmTest
        XT.Date.addDays(dtmTeste, -2)

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(4);
    });  



    test("toMonthEnd", () =>
    {
        let dtmTeste: Date 
        
        dtmTeste = new Date(2020, 1, 21);

        XT.Date.toMonthEnd(dtmTeste);

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(1);
        expect( dtmTeste.getDate())     .toBe(29);


        dtmTeste = new Date(2024, 2, 21);

        XT.Date.toMonthEnd(dtmTeste);

        expect( dtmTeste.getFullYear()).toBe(2024);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())     .toBe(31);
    });  



    test("toMonthStart", () =>
    {
        let dtmTeste: Date 
        
        dtmTeste = new Date(2020, 3, 21);

        XT.Date.toMonthStart(dtmTeste);

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(3);
        expect( dtmTeste.getDate())    .toBe(1);
    });                                                 

    

    test("toString", () =>
    {
        let dtmTeste: Date;


        dtmTeste = new Date(2020, 3, 21, 3, 4, 5, 6);

        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn") )
        .toBe("21/04/2020 03:04:05:006");


        dtmTeste = new Date(2020, 3, 21, 15, 4, 5, 6);
        
        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn") )
        .toBe("21/04/2020 15:04:05:006");


        dtmTeste = new Date(2020, 3, 21, 15, 4, 5, 6);
        
        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn tt") )
        .toBe("21/04/2020 03:04:05:006 PM");


        dtmTeste = new Date(2020, 3, 21, 5, 4, 5, 6);
        
        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn tt") )
        .toBe("21/04/2020 05:04:05:006 AM");



        const intTotalMinutesOffset: number = dtmTeste.getTimezoneOffset(),
              intHoursOffset:        number = intTotalMinutesOffset / 60,
              intMinutesOffset:      number = intTotalMinutesOffset % 60;
            
        const strOffset = intTotalMinutesOffset < 0 ? "-" : "+" +
                          intHoursOffset.toString().padStart(2, "0") + ":" + 
                          intMinutesOffset.toString().padStart(2, "0"); 


        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn OFFSET") )
        .toBe("21/04/2020 05:04:05:006 " + strOffset);
    }); 



    test("toStringISO", () =>
    {
        let dtmTeste: Date;

        dtmTeste = new Date(2020, 3, 21, 3, 4, 5, 6);

        const intTotalMinutesOffset: number = dtmTeste.getTimezoneOffset(),
              intHoursOffset:        number = intTotalMinutesOffset / 60,
              intMinutesOffset:      number = intTotalMinutesOffset % 60;
            
        const strOffset = intTotalMinutesOffset < 0 ? "-" : "+" +
                          intHoursOffset.toString().padStart(2, "0") + ":" + 
                          intMinutesOffset.toString().padStart(2, "0"); 


        expect( XT.Date.toStringISO(dtmTeste) )
        .toBe("2020-04-21T03:04:05.006" + strOffset);


        dtmTeste = new Date(2020, 3, 21, 15, 4, 5, 6);
        
        expect( XT.Date.toStringISO(dtmTeste) )
        .toBe("2020-04-21T15:04:05.006" + strOffset);
    }); 


    
    test("toTimeString", () =>
    {
        let dtmTeste: Date;
        
        dtmTeste = new Date(2020, 3, 21, 10, 12, 35, 158);

        expect(XT.Date.toTimeString(dtmTeste))
        .toBe("10:12:35.158");
    });  


    
    test("toYearEnd", () =>
    {
        let dtmTeste: Date;
        
        dtmTeste = new Date(2020, 3, 21);

        XT.Date.toYearEnd(dtmTeste);

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(11);
        expect( dtmTeste.getDate())    .toBe(31);

        expect(XT.Date.toDateString(dtmTeste))
        .toBe("2020-12-31");
    });  



    test("toYearStart", () =>    
    {
        let dtmTeste: Date;
        dtmTeste = new Date(2020, 3, 21);

        XT.Date.toYearStart(dtmTeste);

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(0);
        expect( dtmTeste.getDate())    .toBe(1);


        expect( XT.Date.toDateString(dtmTeste))
        .toBe("2020-01-01");
    });              
});