import { WeekDays } from "../../index__.ts";
import { XT } from "./../../library/index.js"



// ------------------------------------------------------------------------------------------------------------------------------
// #region Date constructor
// ------------------------------------------------------------------------------------------------------------------------------

Date.$_addDays = XT.Date.addDays;



Date.$_addHours = XT.Date.addHours;



Date.$_addMilliseconds = XT.Date.addMilliseconds;



Date.$_addMinutes = XT.Date.addMinutes;



Date.$_addSeconds = XT.Date.addSeconds;



Date.$_addYears = XT.Date.addYears;



Date.$_assertDate = XT.Assert.date;



Date.$_toDateString =XT.Date.toDateString;



Date.$_toMonthEnd = XT.Date.toMonthEnd;



Date.$_toMonthStart = XT.Date.toMonthStart;



Date.$_toString = XT.Date.toString;



Date.$_toStringISO = XT.Date.toStringISO;



Date.$_toTimeString = XT.Date.toTimeString;



Date.$_toWeekEnd = XT.Date.toWeekEnd;



Date.$_toWeekStart = XT.Date.toWeekStart;



Date.$_toYearEnd = XT.Date.toYearEnd;



Date.$_toYearStart = XT.Date.toYearStart;

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------------------------------------
// #region Date extensions
// ------------------------------------------------------------------------------------------------------------------------------

Date.prototype.$_addDays = function(p_Value: number): Date
{
    return XT.Date.addDays(<Date>this,
                           p_Value);
}



Date.prototype.$_addHours = function(p_Value: number): Date
{
    return XT.Date.addHours(<Date>this,
                            p_Value);
}   



Date.prototype.$_addMilliseconds = function(p_Value: number): Date
{
    return XT.Date.addMilliseconds(<Date>this,
                                   p_Value);
}



Date.prototype.$_addMinutes = function(p_Value: number): Date
{
    return XT.Date.addMinutes(<Date>this,
                              p_Value);
}



Date.prototype.$_addSeconds = function(p_Value: number): Date
{
    return XT.Date.addSeconds(<Date>this,
                               p_Value);
}



Date.prototype.$_addYears = function(p_Value: number): Date
{
    return XT.Date.addYears(<Date>this,
                            p_Value);
}



Date.prototype.$_toDateString = function(): string
{
    return XT.Date.toDateString(<Date>this);
}



Date.prototype.$_toMonthEnd = function(): Date
{
    return XT.Date.toMonthEnd(<Date>this);
}



Date.prototype.$_toMonthStart = function(): Date
{
    return XT.Date.toMonthStart(<Date>this);
}



Date.prototype.$_toString = function(p_ResultFormat: string): string
{
    return XT.Date.toString(<Date>this,
                            p_ResultFormat);
}



Date.prototype.$_toStringISO = function(): string
{
    return XT.Date.toStringISO(<Date>this);
}



Date.prototype.$_toTimeString = function(): string
{
    return XT.Date.toTimeString(<Date>this);
}



Date.prototype.$_toWeekEnd = function(firstWeekDay?: WeekDays): Date
{
    if (undefined === firstWeekDay)
        return XT.Date.toWeekEnd(<Date>this);
    else
        return XT.Date.toWeekEnd(<Date>this, firstWeekDay);
}



Date.prototype.$_toWeekStart = function(firstWeekDay?: WeekDays): Date
{
    if (undefined === firstWeekDay)
        return XT.Date.toWeekStart(<Date>this);
    else
        return XT.Date.toWeekStart(<Date>this, firstWeekDay);
}



Date.prototype.$_toYearEnd = function(): Date
{
    return XT.Date.toYearEnd(<Date>this);
}



Date.prototype.$_toYearStart = function(): Date
{
    return XT.Date.toYearStart(<Date>this);
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------