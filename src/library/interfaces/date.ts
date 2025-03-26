import { WeekDays } from "./../../common/index.js" 


export interface IDateLib
{
    addDays(value: Date, 
            days:  number): Date;

    addHours(value: Date, 
             hours: number): Date;

    addMilliseconds(value:        Date, 
                    milliseconds: number): Date;

    addMinutes(value:   Date, 
               minutes: number): Date;

    addSeconds(value:   Date, 
               seconds: number): Date;

    addYears(value: Date, 
             years: number): Date;

    toDateString( value: Date ): string
    

    toMonthEnd( value: Date ): Date;
    
    
    toMonthStart( value: Date ): Date;
    
    
    toString( value: Date,
              resultFormat: string ): string;
    

    toStringISO( value: Date ): string

    
    toTimeString( value: Date ): string


    toWeekEnd( value: Date, firstWeekDay: WeekDays ): Date;


    toWeekStart( value: Date, firstWeekDay: WeekDays ): Date;


    toYearEnd( value: Date ): Date;


    toYearStart( value: Date ): Date;
}