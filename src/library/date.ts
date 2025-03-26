//import { StringLib } from "./string";
import { IDateLib } from "./interfaces/date.js";
import { Constants, WeekDays } from "./../common/index.js" 








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
        let strAMPM:   string = "",
            intHour:   number = p_Value.getHours(),
            strOffset: string = "";


        // Includes AM/PM indicator
        if ( p_ResultFormat.indexOf("tt") > -1)
        {
            if (intHour > 12)
            {
                intHour -= 12;
                strAMPM = "PM";
            }
            else
                strAMPM = "AM";

            p_ResultFormat = p_ResultFormat.replace(/tt/g, strAMPM)
        }


        // Include Offset from UTC
        if ( p_ResultFormat.indexOf("OFFSET") > -1)
        {
            const intTotalMinutesOffset: number = p_Value.getTimezoneOffset(),
                  intHoursOffset:        number = intTotalMinutesOffset / 60,
                  intMinutesOffset:      number = intTotalMinutesOffset % 60;
            
            strOffset = intTotalMinutesOffset < 0 ? "-" : "+" +
                        intHoursOffset.toString().padStart(2, "0") + ":" + 
                        intMinutesOffset.toString().padStart(2, "0"); 

            p_ResultFormat = p_ResultFormat.replace(/OFFSET/g, strOffset);
        }


        return p_ResultFormat.replace(/YYYY/g, p_Value.getFullYear()    .toString())
                             .replace(/YY/g,   p_Value.getFullYear()    .toString().substring(2))
                             .replace(/MM/g,  (p_Value.getMonth() + 1)  .toString().padStart(2, "0"))
                             .replace(/DD/g,   p_Value.getDate()        .toString().padStart(2, "0"))
                             .replace(/hh/g,   intHour                  .toString().padStart(2, "0"))
                             .replace(/mm/g,   p_Value.getMinutes()     .toString().padStart(2, "0"))
                             .replace(/ss/g,   p_Value.getSeconds()     .toString().padStart(2, "0"))
                             .replace(/nnn/g,  p_Value.getMilliseconds().toString().padStart(3, "0"));
    },



    toStringISO(p_Value: Date): string
    {
        return DateLib.toString(p_Value, Constants.DATETIME_FORMAT_ISO);
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
export  { DateLib };