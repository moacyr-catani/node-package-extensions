//import { StringLib } from "./string";

import { Constants, WeekDays } from "./../common/index.js" 


interface IDateLib
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
    

    toDateStringISO( value: Date ): string


    toMonthEnd( value: Date ): Date;
    
    
    toMonthStart( value: Date ): Date;
    
    
    toString( value: Date,
              resultFormat: string ): string;
    
    
    toTimeString( value: Date ): string


    toWeekEnd( value: Date, firstWeekDay: WeekDays ): Date;


    toWeekStart( value: Date, firstWeekDay: WeekDays ): Date;


    toYearEnd( value: Date ): Date;


    toYearStart( value: Date ): Date;
}






// ------------------------------------------------------------------------------------------------------------------------------
// #region Date extensions
// ------------------------------------------------------------------------------------------------------------------------------

const DateLib: IDateLib = 
{
    addDays( p_Value: Date,
             p_Days:  number ): Date
    {
        p_Value.setDate(p_Value.getDate() + p_Days);

        return p_Value;
    },



    addHours(p_Value: Date, 
             p_Hours: number): Date
    {
        p_Value.setHours(p_Value.getHours() + p_Hours);

        return p_Value;
    },


    
    addMilliseconds(p_Value:        Date, 
                    p_Milliseconds: number): Date
    {
        p_Value.setMilliseconds(p_Value.getMilliseconds() + p_Milliseconds);

        return p_Value;
    },



    addMinutes(p_Value:   Date, 
               p_Minutes: number): Date
    {
        p_Value.setMinutes(p_Value.getMinutes() + p_Minutes);

        return p_Value;
    },



    addSeconds(p_Value:   Date, 
               p_Seconds: number): Date
    {
        p_Value.setSeconds(p_Value.getSeconds() + p_Seconds);

        return p_Value;
    },



    addYears(p_Value: Date, 
             p_Years: number): Date
    {
        p_Value.setFullYear(p_Value.getFullYear() + p_Years);

        return p_Value;
    },



    toDateString(p_Value: Date): string
    {
        return DateLib.toString(p_Value, "YYYY-MM-DD");
    },



    toDateStringISO(p_Value: Date): string
    {
        return DateLib.toString(p_Value, Constants.DATETIME_FORMAT_ISO);
    },



    toMonthEnd( p_Value: Date ): Date
    {
        p_Value.setMonth(p_Value.getMonth() + 1); // Go to next month
        DateLib.toMonthStart(p_Value);            // Go to first day in next month
        DateLib.addDays(p_Value, -1);             // Go to previous day

        return p_Value;
    },



    toMonthStart( p_Value: Date ): Date
    {
        p_Value.setDate(1);

        return p_Value;
    },



    toString( p_Value:        Date,
              p_ResultFormat: string ): string
    {
        // Adjust for timezone
        // const userTimezoneOffset: number = this.getTimezoneOffset() * 60000;
        // const dtmValue:           Date   = new Date(this.getTime() + userTimezoneOffset);
        //const dtmValue: Date = new Date(p_Value.getTime() );


        return p_ResultFormat.replace(/YYYY/g, p_Value.getFullYear()    .toString())
                             .replace(/YY/g,   p_Value.getFullYear()    .toString().substring(2))
                             .replace(/MM/g,  (p_Value.getMonth() + 1)  .toString().padStart(2, "0"))
                             .replace(/DD/g,   p_Value.getDate()        .toString().padStart(2, "0"))
                             .replace(/HH/g,   p_Value.getHours()       .toString().padStart(2, "0"))
                             .replace(/hh/g,   p_Value.getHours()       .toString().padStart(2, "0"))
                             .replace(/mm/g,   p_Value.getMinutes()     .toString().padStart(2, "0"))
                             .replace(/ss/g,   p_Value.getSeconds()     .toString().padStart(2, "0"))
                             .replace(/nnn/g,  p_Value.getMilliseconds().toString().padStart(3, "0"));

                            //  return format.replace(/YYYY/g,   this.#DateParts.YYYY.value.toString())
                            //  .replace(/YY/g,     this.#DateParts.YYYY.value.toString().substring(2))
                            //  .replace(/MM/g,     this.#DateParts.MM.value  .toString().padStart(2, "0"))
                            //  .replace(/DD/g,     this.#DateParts.DD.value  .toString().padStart(2, "0"))
                            //  .replace(/hh/g,     this.#DateParts.hh.value  .toString().padStart(2, "0"))
                            //  .replace(/HH/g,     this.#DateParts.HH.value  .toString().padStart(2, "0"))
                            //  .replace(/mm/g,     this.#DateParts.mm.value  .toString().padStart(2, "0"))
                            //  .replace(/ss/g,     this.#DateParts.ss.value  .toString().padStart(2, "0"))
                            //  .replace(/nnn/g,    this.#DateParts.nnn.value .toString().padStart(3, "0"))
                            //  .replace(/tt/g,     this.#DateParts.tt.value)
                            //  .replace(/OFFSET/g, this.#DateParts.OFFSET.value);
    },



    toTimeString( p_Value: Date ): string
    {
        return DateLib.toString(p_Value, "hh:mm:ss.nnn");
    },



    toWeekEnd( value: Date, firstWeekDay: WeekDays ): Date
    {
        console.log(value, firstWeekDay);
        throw new Error("Not implemented");
    },



    toWeekStart( value: Date, firstWeekDay: WeekDays ): Date
    {
        console.log(value, firstWeekDay);
        throw new Error("Not implemented");
    },



    toYearEnd( p_Value: Date ): Date
    {
        p_Value.setMonth(11);
        p_Value.setDate(31);

        return p_Value;
    },



    toYearStart( p_Value: Date ): Date
    {
        p_Value.setMonth(0);
        p_Value.setDate(1);

        return p_Value;
    }
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// Export object
Object.seal(DateLib)
export  { IDateLib, DateLib };