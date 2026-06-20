import { XT } from "../../../src/library/index";
import { WeekDays } from "../../../src/common/index";

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



    test("addHours", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21, 1, 0, 0);

        // Adds 4 days in dtmTest
        XT.Date.addHours(dtmTeste, 4)

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(1);
        expect( dtmTeste.getDate())    .toBe(21);
        expect( dtmTeste.getHours())   .toBe(5);

        // Adds 10 days in dtmTest
        XT.Date.addHours(dtmTeste, -10)

        expect( dtmTeste.getFullYear()).toBe(2020);
        expect( dtmTeste.getMonth())   .toBe(1);
        expect( dtmTeste.getDate())    .toBe(20);
        expect( dtmTeste.getHours())   .toBe(19);
    });  



    test("addMilliseconds", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21, 0, 0, 0, 150);

        
        XT.Date.addMilliseconds(dtmTeste, 150)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(21);
        expect( dtmTeste.getHours())       .toBe(0);
        expect( dtmTeste.getMilliseconds()).toBe(300);

        
        XT.Date.addMilliseconds(dtmTeste, -900)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(20);
        expect( dtmTeste.getHours())       .toBe(23);
        expect( dtmTeste.getMilliseconds()).toBe(400);
    });  



    test("addMinutes", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21, 0, 0, 0);

        
        XT.Date.addMinutes(dtmTeste, 15)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(21);
        expect( dtmTeste.getHours())       .toBe(0);
        expect( dtmTeste.getMinutes())     .toBe(15);

        
        XT.Date.addMinutes(dtmTeste, -90)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(20);
        expect( dtmTeste.getHours())       .toBe(22);
        expect( dtmTeste.getMinutes())     .toBe(45);
    });  



    test("addSeconds", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21, 0, 0, 0);

        
        XT.Date.addSeconds(dtmTeste, 25)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(21);
        expect( dtmTeste.getHours())       .toBe(0);
        expect( dtmTeste.getMinutes())     .toBe(0);
        expect( dtmTeste.getSeconds())     .toBe(25);

        
        XT.Date.addSeconds(dtmTeste, -90)

        expect( dtmTeste.getFullYear())    .toBe(2020);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(20);
        expect( dtmTeste.getHours())       .toBe(23);
        expect( dtmTeste.getMinutes())     .toBe(58);
        expect( dtmTeste.getSeconds())     .toBe(55);
    });  



    test("addYears", () =>
    {
        const dtmTeste: Date = new Date(2020, 1, 21, 0, 0, 0);

        
        XT.Date.addYears(dtmTeste, 25)

        expect( dtmTeste.getFullYear())    .toBe(2045);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(21);
        expect( dtmTeste.getHours())       .toBe(0);
        expect( dtmTeste.getMinutes())     .toBe(0);
        expect( dtmTeste.getSeconds())     .toBe(0);

        
        XT.Date.addYears(dtmTeste, -90)

        expect( dtmTeste.getFullYear())    .toBe(1955);
        expect( dtmTeste.getMonth())       .toBe(1);
        expect( dtmTeste.getDate())        .toBe(21);
        expect( dtmTeste.getHours())       .toBe(0);
        expect( dtmTeste.getMinutes())     .toBe(0);
        expect( dtmTeste.getSeconds())     .toBe(0);
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


        // Mocking a negative offset (e.g. UTC+2/Moscow/Paris, returns -120)
        const originalGetTimezoneOffset = Date.prototype.getTimezoneOffset;
        Date.prototype.getTimezoneOffset = () => -120;


        const intTotalMinutesOffset: number = dtmTeste.getTimezoneOffset(),
              intHoursOffset:        number = Math.abs(intTotalMinutesOffset / 60),
              intMinutesOffset:      number = intTotalMinutesOffset % 60;
            
        const strOffset = (intTotalMinutesOffset < 0 ? "-" : "+") +
                          intHoursOffset.toString().padStart(2, "0") + ":" + 
                          intMinutesOffset.toString().padStart(2, "0"); 


        expect( XT.Date.toString(dtmTeste, "DD/MM/YYYY hh:mm:ss:nnn OFFSET") )
        .toBe("21/04/2020 07:04:05:006 " + strOffset);

        Date.prototype.getTimezoneOffset = originalGetTimezoneOffset;
    }); 



    test("toStringISO", () =>
    {
        let dtmTeste: Date;

        dtmTeste = new Date(2020, 3, 21, 3, 4, 5, 6);

        // Mocking a negative offset (e.g. UTC+2/Moscow/Paris, returns -120)
        const originalGetTimezoneOffset = Date.prototype.getTimezoneOffset;
        Date.prototype.getTimezoneOffset = () => -120;


        const intTotalMinutesOffset: number = dtmTeste.getTimezoneOffset(),
              intHoursOffset:        number = Math.abs(intTotalMinutesOffset / 60),
              intMinutesOffset:      number = intTotalMinutesOffset % 60;
            
        const strOffset = (intTotalMinutesOffset < 0 ? "-" : "+") +
                          intHoursOffset.toString().padStart(2, "0") + ":" + 
                          intMinutesOffset.toString().padStart(2, "0"); 


        expect( XT.Date.toStringISO(dtmTeste) )
        .toBe("2020-04-21T05:04:05.006" + strOffset);


        dtmTeste = new Date(2020, 3, 21, 15, 4, 5, 6);
        
        expect( XT.Date.toStringISO(dtmTeste) )
        .toBe("2020-04-21T17:04:05.006" + strOffset);


        Date.prototype.getTimezoneOffset = originalGetTimezoneOffset;

    }); 


    
    test("toTimeString", () =>
    {
        let dtmTeste: Date;
        
        dtmTeste = new Date(2020, 3, 21, 10, 12, 35, 158);

        expect(XT.Date.toTimeString(dtmTeste))
        .toBe("10:12:35.158");
    });  



    test("toWeekEnd", () =>
    {
        let dtmTeste: Date;
            
        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(29);
    


        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.MONDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(30);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.TUESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(31);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.WEDNESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(3);
        expect( dtmTeste.getDate())    .toBe(1);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.THURSDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(26);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.FRIDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(27);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.SATURDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(28);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.SUNDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(29);



        dtmTeste = new Date(2025, 2, 23);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.SUNDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(29);



        dtmTeste = new Date(2025, 2, 24);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.MONDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(30);



        dtmTeste = new Date(2025, 2, 23);
    
        XT.Date.toWeekEnd(dtmTeste, WeekDays.TUESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(24);
    });  
    


    test("toWeekStart", () =>
    {
        let dtmTeste: Date;
            
        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(23);
    


        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.MONDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(24);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.TUESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(25);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.WEDNESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(26);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.THURSDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(20);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.FRIDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(21);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.SATURDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(22);



        dtmTeste = new Date(2025, 2, 26);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.SUNDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(23);



        dtmTeste = new Date(2025, 2, 23);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.SUNDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(23);



        dtmTeste = new Date(2025, 2, 24);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.MONDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(24);



        dtmTeste = new Date(2025, 2, 23);
    
        XT.Date.toWeekStart(dtmTeste, WeekDays.TUESDAY);
    
        expect( dtmTeste.getFullYear()).toBe(2025);
        expect( dtmTeste.getMonth())   .toBe(2);
        expect( dtmTeste.getDate())    .toBe(18);
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



    test("toDateString", () =>
    {
        const dtmTeste = new Date(2020, 3, 21);
        expect(XT.Date.toDateString(dtmTeste)).toBe("2020-04-21");
    });



    test("toString - AM/PM boundary cases", () =>
    {
        // Noon (12:00:00)
        let dtm = new Date(2020, 3, 21, 12, 0, 0);
        expect(XT.Date.toString(dtm, "hh:mm:ss tt")).toBe("12:00:00 AM");

        // Midnight (00:00:00)
        dtm = new Date(2020, 3, 21, 0, 0, 0);
        expect(XT.Date.toString(dtm, "hh:mm:ss tt")).toBe("00:00:00 AM");

        // Afternoon (13:00:00)
        dtm = new Date(2020, 3, 21, 13, 0, 0);
        expect(XT.Date.toString(dtm, "hh:mm:ss tt")).toBe("01:00:00 PM");
    });



    test("toString and toStringISO - negative timezone offset", () =>
    {
        const originalGetTimezoneOffset = Date.prototype.getTimezoneOffset;
        // Mocking a negative offset (e.g. UTC+2/Moscow/Paris, returns -120)
        Date.prototype.getTimezoneOffset = () => -120;

        try
        {
            const dtm = new Date(2020, 3, 21, 5, 4, 5, 6);
            //expect(XT.Date.toString(dtm, "OFFSET")).toBe("-");
            expect(XT.Date.toStringISO(dtm)).toBe("2020-04-21T07:04:05.006-02:00");
        }
        finally
        {
            Date.prototype.getTimezoneOffset = originalGetTimezoneOffset;
        }
    });
});