// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface Date
    {
        $_addDays(p_Value: number):         Date;
        $_toDateString():                   string
        $_toMonthEnd():                     Date;
        $_toMonthStart():                   Date;
        $_toString(p_ResultFormat: string): string;
        $_toTimeString():                   string
        $_toYearEnd():                      Date;
        $_toYearStart():                    Date;
    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};