import { XT } from "./../../library/index.js"



// ------------------------------------------------------------------------------------------------------------------------------
// #region Date extensions
// ------------------------------------------------------------------------------------------------------------------------------

Date.prototype.$_addDays = function(p_Value: number): Date
{
    return XT.Date.addDays(<Date>this,
                           p_Value);

    // (<Date>this).setDate((<Date>this).getDate() + p_Value);

    // return this;
}



Date.prototype.$_toDateString = function(): string
{
    return XT.Date.toDateString(<Date>this);

    // return (<Date>this).$_toString("YYYY-MM-DD");
}



Date.prototype.$_toMonthEnd = function(): Date
{
    return XT.Date.toMonthEnd(<Date>this);

    // (<Date>this).setMonth((<Date>this).getMonth() + 1); // Go to next month
    // (<Date>this).$_toMonthStart();                      // Go to first day in next month
    // (<Date>this).$_addDays(-1);                         // Go to previous day

    // return this;
}



Date.prototype.$_toMonthStart = function(): Date
{
    return XT.Date.toMonthStart(<Date>this);

    // (<Date>this).setDate(1);

    // return this;
}



Date.prototype.$_toString = function(p_ResultFormat: string): string
{
    return XT.Date.toString(<Date>this,
                            p_ResultFormat);

    // // Adjust for timezone
    // // const userTimezoneOffset: number = this.getTimezoneOffset() * 60000;
    // // const dtmValue:           Date   = new Date(this.getTime() + userTimezoneOffset);
    // const dtmValue:           Date   = new Date(this.getTime() );


    // return p_ResultFormat.replace(/YYYY/g, dtmValue.getFullYear()    .toString())
    //                      .replace(/YY/g,   dtmValue.getFullYear()    .toString().substring(2))
    //                      .replace(/MM/g,  (dtmValue.getMonth() + 1)  .toString().padStart(2, "0"))
    //                      .replace(/DD/g,   dtmValue.getDate()        .toString().padStart(2, "0"))
    //                      .replace(/hh/g,   dtmValue.getHours()       .toString().padStart(2, "0"))
    //                      .replace(/mm/g,   dtmValue.getMinutes()     .toString().padStart(2, "0"))
    //                      .replace(/ss/g,   dtmValue.getSeconds()     .toString().padStart(2, "0"))
    //                      .replace(/nnn/g,  dtmValue.getMilliseconds().toString().padStart(3, "0"));
}



Date.prototype.$_toTimeString = function(): string
{
    return XT.Date.toTimeString(<Date>this);
    // return (<Date>this).$_toString("hh:mm:ss.nnn");
}



Date.prototype.$_toYearEnd = function(): Date
{
    return XT.Date.toYearEnd(<Date>this);
    // (<Date>this).setMonth(11);
    // (<Date>this).setDate(31);

    // return this;
}



Date.prototype.$_toYearStart = function(): Date
{
    return XT.Date.toYearStart(<Date>this);
    // (<Date>this).setMonth(0);
    // (<Date>this).setDate(1);

    // return this;
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------