import "../../../src/extensions/index.ts";
import { WeekDays } from "../../../src/common/index.ts";


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
    
    
    test(".$_toString", () =>
    {
        const dtmValue: Date  = new Date(2010, 0, 2, 1, 10,20)

        expect( dtmValue.$_toString("DD/MM/YYYY hh:mm:ss:nnn"))
        .toBe("02/01/2010 01:10:20:000");

        expect( dtmValue.$_toString("DD/MM/YYYY hh:mm tt"))
        .toBe("02/01/2010 01:10 AM");

        expect( dtmValue.$_addHours(12).$_toString("DD/MM/YYYY hh:mm tt"))
        .toBe("02/01/2010 01:10 PM");
    }); 


    test(".$_addHours (prototype)", () =>
    {
        const dtmTeste = new Date(2020, 1, 21, 5, 0, 0);
        expect(dtmTeste.$_addHours(4).getHours()).toBe(9);
    });


    test(".$_toWeekStart and .$_toWeekEnd with and without firstWeekDay parameter (prototype)", () =>
    {
        const dtmTeste = new Date(2025, 2, 26); // Wednesday
        
        // Without parameters (default Sunday start)
        const weekStartDefault = dtmTeste.$_toWeekStart();
        expect(weekStartDefault.$_toDateString()).toBe("2025-03-23");
        
        const weekEndDefault = dtmTeste.$_toWeekEnd();
        expect(weekEndDefault.$_toDateString()).toBe("2025-03-29");

        // With parameters (Monday start)
        const dtmTeste2 = new Date(2025, 2, 26); // Wednesday
        const weekStartMonday = dtmTeste2.$_toWeekStart(WeekDays.MONDAY);
        expect(weekStartMonday.$_toDateString()).toBe("2025-03-24");
        
        const weekEndMonday = dtmTeste2.$_toWeekEnd(WeekDays.MONDAY);
        expect(weekEndMonday.$_toDateString()).toBe("2025-03-30");


        // With parameters (Tuesday start)
        const dtmTeste3 = new Date(2025, 2, 26); // Wednesday
        const weekStartTuesday = dtmTeste3.$_toWeekStart(WeekDays.TUESDAY);
        expect(weekStartTuesday.$_toDateString()).toBe("2025-03-25");
        
        const weekEndTuesday = dtmTeste3.$_toWeekEnd(WeekDays.TUESDAY);
        expect(weekEndTuesday.$_toDateString()).toBe("2025-03-31");


        // With parameters (Wednesday start)
        const dtmTeste4 = new Date(2025, 2, 26); // Wednesday
        const weekStartWednesday = dtmTeste4.$_toWeekStart(WeekDays.WEDNESDAY);
        expect(weekStartWednesday.$_toDateString()).toBe("2025-03-26");
        
        const weekEndWednesday = dtmTeste4.$_toWeekEnd(WeekDays.WEDNESDAY);
        expect(weekEndWednesday.$_toDateString()).toBe("2025-04-01");


        // With parameters (Wednesday start)
        const dtmTeste5 = new Date(2025, 2, 26); // Wednesday
        const weekStartThursday = dtmTeste5.$_toWeekStart(WeekDays.THURSDAY);
        expect(weekStartThursday.$_toDateString()).toBe("2025-03-20");
        
        const weekEndThursday = dtmTeste5.$_toWeekEnd(WeekDays.THURSDAY);
        expect(weekEndThursday.$_toDateString()).toBe("2025-03-26");


        // With parameters (Wednesday start)
        const dtmTeste6 = new Date(2025, 2, 26); // Wednesday
        const weekStartFriday = dtmTeste6.$_toWeekStart(WeekDays.FRIDAY);
        expect(weekStartFriday.$_toDateString()).toBe("2025-03-21");
        
        const weekEndFriday = dtmTeste6.$_toWeekEnd(WeekDays.FRIDAY);
        expect(weekEndFriday.$_toDateString()).toBe("2025-03-27");


        // With parameters (Wednesday start)
        const dtmTeste7 = new Date(2025, 2, 26); // Wednesday
        const weekStartSaturday = dtmTeste7.$_toWeekStart(WeekDays.SATURDAY);
        expect(weekStartSaturday.$_toDateString()).toBe("2025-03-22");
        
        const weekEndSaturday = dtmTeste7.$_toWeekEnd(WeekDays.SATURDAY);
        expect(weekEndSaturday.$_toDateString()).toBe("2025-03-28");


        // With parameters (Wednesday start)
        const dtmTeste8 = new Date(2025, 2, 26); // Wednesday
        const weekStartSunday = dtmTeste8.$_toWeekStart(WeekDays.SUNDAY);
        expect(weekStartSunday.$_toDateString()).toBe("2025-03-23");
        
        const weekEndSunday = dtmTeste8.$_toWeekEnd(WeekDays.SUNDAY);
        expect(weekEndSunday.$_toDateString()).toBe("2025-03-29");


        // With parameters (Wednesday start)
        const dtmTeste9 = new Date(2025, 2, 1); // Saturday
        const weekStartSaturday2 = dtmTeste9.$_toWeekStart(WeekDays.TUESDAY);
        expect(weekStartSaturday2.$_toDateString()).toBe("2025-02-25");
        
        const weekEndSaturday2 = dtmTeste9.$_toWeekEnd(WeekDays.TUESDAY);
        expect(weekEndSaturday2.$_toDateString()).toBe("2025-03-03");
    });


    test("Static Date.$_... methods", () =>
    {
        const originalGetTimezoneOffset = Date.prototype.getTimezoneOffset;
        // Mocking a negative offset (e.g. UTC+2/Moscow/Paris, returns -120)
        Date.prototype.getTimezoneOffset = () => -120;




        const dtm: Date | undefined = "2020-02-21 05:30:00:150".$_toDate("YYYY-MM-DD hh:mm:ss:nnn")!;

        expect(Date.$_addDays(new Date(dtm), 4).getDate()).toBe(25);
        expect(Date.$_addHours(new Date(dtm), 4).getHours()).toBe(9);
        expect(Date.$_addMilliseconds(new Date(dtm), 500).getMilliseconds()).toBe(650);
        expect(Date.$_addMinutes(new Date(dtm), 30).getMinutes()).toBe(0);
        expect(Date.$_addSeconds(new Date(dtm), 30).getSeconds()).toBe(30);
        expect(Date.$_addYears(new Date(dtm), 5).getFullYear()).toBe(2025);
        
        expect(Date.$_assertDate("2020-02-21")).toBeInstanceOf(Date);
        expect(Date.$_toDateString(dtm)).toBe("2020-02-21");
        expect(Date.$_toMonthEnd(new Date(dtm)).getDate()).toBe(29);
        expect(Date.$_toMonthStart(new Date(dtm)).getDate()).toBe(1);
        expect(Date.$_toString(dtm, "DD/MM/YYYY")).toBe("21/02/2020");
        expect(Date.$_toString(dtm, "DD/MM/YYYY hh:mm:ss:nnn")).toBe("21/02/2020 05:30:00:150");
        expect(Date.$_toStringISO(dtm)).toBe("2020-02-21T07:30:00.150-02:00");
        expect(Date.$_toTimeString(dtm)).toBe("05:30:00.150");
        
        expect(Date.$_toWeekEnd(new Date(dtm), WeekDays.SUNDAY).getDate()).toBe(22);
        expect(Date.$_toWeekStart(new Date(dtm), WeekDays.SUNDAY).getDate()).toBe(16);
        expect(Date.$_toYearEnd(new Date(dtm)).getMonth()).toBe(11);
        expect(Date.$_toYearStart(new Date(dtm)).getMonth()).toBe(0);



        const dtm2 = new Date(2020, 1, 21, 5, 30, 0, 150);

        expect(dtm2.$_addDays(4).getDate()).toBe(25);
        expect(dtm2.$_addHours(4).getHours()).toBe(9);
        expect(dtm2.$_addMilliseconds(500).getMilliseconds()).toBe(650);
        expect(dtm2.$_addMinutes(30).getMinutes()).toBe(0);
        expect(dtm2.$_addSeconds(30).getSeconds()).toBe(30);
        expect(dtm2.$_addYears(5).getFullYear()).toBe(2025);
        

        expect(dtm2.$_toDateString()).toBe("2025-02-25");
        expect(dtm2.$_toMonthEnd().getDate()).toBe(28);
        expect(dtm2.$_toMonthStart().getDate()).toBe(1);
        expect(dtm2.$_toString("DD/MM/YYYY")).toBe("01/02/2025");
        expect(dtm2.$_toStringISO()).toContain("2025-02-01T12:00:30.650-02:00");
        expect(dtm2.$_toTimeString()).toBe("10:00:30.650");
        
        expect(dtm2.$_toWeekEnd(WeekDays.SUNDAY).getDate()).toBe(1);
        expect(dtm2.$_toWeekStart(WeekDays.SUNDAY).getDate()).toBe(26);
        expect(dtm2.$_toYearEnd().getMonth()).toBe(11);
        expect(dtm2.$_toYearStart().getMonth()).toBe(0);


        Date.prototype.getTimezoneOffset = originalGetTimezoneOffset;



    });
});
