//import { StringLib } from "./string";




interface IDateLib
{
    addDays(p_Value: Date, 
            p_Days:  number): Date;


    toDateString( p_Value: Date ): string
    
    
    toMonthEnd( p_Value: Date ): Date;
    
    
    toMonthStart( p_Value: Date ): Date;
    
    
    toString( p_Value: Date,
              p_ResultFormat: string ): string;
    
    
    toTimeString( p_Value: Date ): string


    toYearEnd( p_Value: Date ): Date;


    toYearStart( p_Value: Date ): Date;
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



    toDateString( p_Value: Date ): string
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
        // Adjust for timezone
        // const userTimezoneOffset: number = this.getTimezoneOffset() * 60000;
        // const dtmValue:           Date   = new Date(this.getTime() + userTimezoneOffset);
        //const dtmValue: Date = new Date(p_Value.getTime() );


        return p_ResultFormat.replace(/YYYY/g, p_Value.getFullYear()    .toString())
                             .replace(/YY/g,   p_Value.getFullYear()    .toString().substring(2))
                             .replace(/MM/g,  (p_Value.getMonth() + 1)  .toString().padStart(2, "0"))
                             .replace(/DD/g,   p_Value.getDate()        .toString().padStart(2, "0"))
                             .replace(/hh/g,   p_Value.getHours()       .toString().padStart(2, "0"))
                             .replace(/mm/g,   p_Value.getMinutes()     .toString().padStart(2, "0"))
                             .replace(/ss/g,   p_Value.getSeconds()     .toString().padStart(2, "0"))
                             .replace(/nnn/g,  p_Value.getMilliseconds().toString().padStart(3, "0"));
    },



    toTimeString( p_Value: Date ): string
    {
        return DateLib.toString(p_Value, "hh:mm:ss.nnn");
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