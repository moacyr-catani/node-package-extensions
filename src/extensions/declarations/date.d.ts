import { WeekDays } from "../../common/enums.ts";



// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface DateConstructor
    {
        /**
         * Adds the specified number of days to the provided date.
         * @param value Date to update.
         * @param days Number of days to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = XT.Date.addDays(new Date("2026-06-19"), 5);
         */
        $_addDays(value: Date,
                  days:  number): Date;



        /**
         * Adds the specified number of hours to the provided date.
         * @param value Date to update.
         * @param hours Number of hours to add.
         * @returns The same `Date` instance updated in place.
         */
        $_addHours(value: Date,
                   hours: number): Date;



        /**
         * Adds the specified number of milliseconds to the provided date.
         * @param value Date to update.
         * @param milliseconds Number of milliseconds to add.
         * @returns The same `Date` instance updated in place.
         */
        $_addMilliseconds(value:        Date,
                          milliseconds: number): Date;



        /**
         * Adds the specified number of minutes to the provided date.
         * @param value Date to update.
         * @param minutes Number of minutes to add.
         * @returns The same `Date` instance updated in place.
         */
        $_addMinutes(value:   Date,
                     minutes: number): Date;



        /**
         * Adds the specified number of seconds to the provided date.
         * @param value Date to update.
         * @param seconds Number of seconds to add.
         * @returns The same `Date` instance updated in place.
         */
        $_addSeconds(value:   Date,
                     seconds: number): Date;



        /**
         * Adds the specified number of years to the provided date.
         * @param value Date to update.
         * @param years Number of years to add.
         * @returns The same `Date` instance updated in place.
         */
        $_addYears(value: Date,
                   years: number): Date;



        /**
         * Asserts the provided value is a valid datetime.
         * @param value Value to be checked. If it is a string, it will be parsed as ISO format.
         * @returns A `Date` when valid, otherwise `null`.
         * @example
         * const parsed = XT.Assert.date("2026-06-19");
         */
        $_assertDate(value: Date | number | string): Date | null;



        /**
         * Asserts the provided string value is a valid datetime using a custom parse format.
         * @param value String to be checked.
         * @param parseFormat Representation of how date/time is formatted. Valid tokens are `YYYY`, `YY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
         * @returns A `Date` when valid, otherwise `null`.
         * @example
         * const parsed = XT.Assert.date("19/06/2026", "DD/MM/YYYY");
         */
        $_assertDate(value:       string,
                     parseFormat: string): Date | null;



        /**
         * Asserts the provided value is a valid datetime.
         * @param value Value to be checked. If it is a string, it will be parsed as ISO format.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns The parsed `Date` when valid, otherwise the alternative value.
         */
        $_assertDate(value:            Date | number | string,
                     alternativeValue: Date): Date;



        /**
         * Asserts the provided string value is a valid datetime using a custom parse format.
         * @param value String to be checked.
         * @param parseFormat Representation of how date/time is formatted. Valid tokens are `YYYY`, `YY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
         * @param alternativeValue Value returned when the input is not valid.
         * @returns The parsed `Date` when valid, otherwise the alternative value.
         */
        $_assertDate(value:            string,
                     parseFormat:      string,
                     alternativeValue: Date): Date;



        /**
         * Converts the provided date to a `YYYY-MM-DD` date string.
         * @param value Date to format.
         * @returns The formatted date string.
         */
        $_toDateString(value: Date): string;



        /**
         * Returns the last day of the month for the provided date.
         * @param value Date to evaluate.
         * @returns The same `Date` instance updated to the end of the month.
         */
        $_toMonthEnd(value: Date): Date;



        /**
         * Returns the first day of the month for the provided date.
         * @param value Date to evaluate.
         * @returns The same `Date` instance updated to the start of the month.
         */
        $_toMonthStart(value: Date): Date;



        /**
         * Formats the provided date using the requested format.
         * @param value Date to format.
         * @param resultFormat Format string with tokens such as `YYYY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
         * @returns The formatted date string.
         * @example
         * const result = XT.Date.toString(new Date("2026-06-19T12:30:00"), "YYYY-MM-DD hh:mm:ss");
         */
        $_toString(value: Date,
                   resultFormat: string): string;



        /**
         * Converts the provided date to ISO extended format.
         * @param value Date to format.
         * @returns The ISO formatted date string.
         */
        $_toStringISO(value: Date): string;



        /**
         * Formats the provided date as a time string.
         * @param value Date to format.
         * @returns The formatted time string.
         */
        $_toTimeString(value: Date): string;



        /**
         * Returns the last day of the week containing the provided date.
         * @param value Date to evaluate.
         * @returns The same `Date` instance updated to the end of the week.
         */
        $_toWeekEnd(value: Date): Date;



        /**
         * Returns the last day of the week containing the provided date.
         * @param value Date to evaluate.
         * @param firstWeekDay First day of the week.
         * @returns The same `Date` instance updated to the end of the week.
         */
        $_toWeekEnd(value: Date,
                    firstWeekDay: WeekDays): Date;



        /**
         * Returns the first day of the week containing the provided date.
         * @param value Date to evaluate.
         * @returns The same `Date` instance updated to the start of the week.
         */
        $_toWeekStart(value: Date): Date;



        /**
         * Returns the first day of the week containing the provided date.
         * @param value Date to evaluate.
         * @param firstWeekDay First day of the week.
         * @returns The same `Date` instance updated to the start of the week.
         */
        $_toWeekStart(value: Date,
                      firstWeekDay: WeekDays): Date;



        /**
         * Moves the provided date to the beginning of the year.
         * @param value Date to update.
         * @returns The same `Date` instance updated to the start of the year.
         */
        $_toYearStart(value: Date): Date;



        /**
         * Moves the provided date to the end of the year.
         * @param value Date to update.
         * @returns The same `Date` instance updated to the end of the year.
         */
        $_toYearEnd(value: Date): Date;
    }



    interface Date
    {
        /**
         * Adds the specified number of days to this date.
         * @param days Number of days to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addDays(5);
         */
        $_addDays(days: number): Date;



        /**
         * Adds the specified number of hours to this date.
         * @param days Number of hours to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addHours(10);
         */
        $_addHours(hours: number): Date;



        /**
         * Adds the specified number of milliseconds to this date.
         * @param days Number of milliseconds to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addMilliseconds(110);
         */
        $_addMilliseconds(milliseconds: number): Date;



        /**
         * Adds the specified number of minutes to this date.
         * @param days Number of minutes to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addMinutes(-20);
         */
        $_addMinutes(minutes: number): Date;



        /**
         * Adds the specified number of seconds to this date.
         * @param days Number of seconds to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addSeconds(25);
         */
        $_addSeconds(seconds: number): Date;



        /**
         * Adds the specified number of years to this date.
         * @param days Number of years to add.
         * @returns The same `Date` instance updated in place.
         * @example
         * const result = new Date("2026-06-19").$_addYears(-1);
         */
        $_addYears(years: number): Date;



        /**
         * Converts this date to a `YYYY-MM-DD` date string.
         * @returns The formatted date string.
         */
        $_toDateString(): string;



        /**
         * Returns the last day of the month for this date.
         * @returns The same `Date` instance updated to the end of the month.
         */
        $_toMonthEnd(): Date;



        /**
         * Returns the first day of the month for this date.
         * @returns The same `Date` instance updated to the start of the month.
         */
        $_toMonthStart(): Date;



        /**
         * Formats this date using the requested format.
         * @param resultFormat Format string with tokens such as `YYYY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
         * @returns The formatted date string.
         * @example
         * const result = new Date("2026-06-19T12:30:00").$_toString("YYYY-MM-DD hh:mm:ss");
         */
        $_toString(resultFormat: string): string;



        /**
         * Formats this date using the ISO standard.
         * @returns The formatted date string.
         * @example
         * const result = new Date("2026-06-19T12:30:00").$_toISOString();
         */
        $_toStringISO(): string;



        /**
         * Converts this date to ISO extended format.
         * @returns The ISO formatted date string.
         */
        $_toTimeString(): string;



        /**
         * Moves this date to the end of the week.
         * @returns The same `Date` instance updated to the end of the week.
         */
        $_toWeekEnd(): Date;


        /**
         * Moves this date to the end of the week.
         * @param firstWeekDay First day of the week.
         * @returns The same `Date` instance updated to the end of the week.
         */
        $_toWeekEnd(firstWeekDay: WeekDays): Date;



        /**
         * Moves this date to the start of the week.
         * @returns The same `Date` instance updated to the start of the week.
         */
        $_toWeekStart(): Date;


        /**
         * Moves this date to the start of the week.
         * @param firstWeekDay First day of the week.
         * @returns The same `Date` instance updated to the start of the week.
         */
        $_toWeekStart(firstWeekDay: WeekDays): Date;



        /**
         * Moves this date to the end of the year.
         * @returns The same `Date` instance updated to the end of the year.
         */
        $_toYearEnd(): Date;



        /**
         * Moves this date to the start of the year.
         * @returns The same `Date` instance updated to the start of the year.
         */
        $_toYearStart(): Date;
    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------

// Needed to set this file as a module
export {};