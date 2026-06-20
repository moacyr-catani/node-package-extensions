import { WeekDays } from "./../../common/index.js" 

export interface IDateLib
{
    /**
     * Adds the specified number of days to the provided date.
     * @param value Date to update.
     * @param days Number of days to add.
     * @returns The same `Date` instance updated in place.
     * @example
     * const result = XT.Date.addDays(new Date("2026-06-19"), 5);
     */
    addDays(value: Date,
            days:  number): Date;

    /**
     * Adds the specified number of hours to the provided date.
     * @param value Date to update.
     * @param hours Number of hours to add.
     * @returns The same `Date` instance updated in place.
     */
    addHours(value: Date,
             hours: number): Date;

    /**
     * Adds the specified number of milliseconds to the provided date.
     * @param value Date to update.
     * @param milliseconds Number of milliseconds to add.
     * @returns The same `Date` instance updated in place.
     */
    addMilliseconds(value:        Date,
                    milliseconds: number): Date;

    /**
     * Adds the specified number of minutes to the provided date.
     * @param value Date to update.
     * @param minutes Number of minutes to add.
     * @returns The same `Date` instance updated in place.
     */
    addMinutes(value:   Date,
               minutes: number): Date;

    /**
     * Adds the specified number of seconds to the provided date.
     * @param value Date to update.
     * @param seconds Number of seconds to add.
     * @returns The same `Date` instance updated in place.
     */
    addSeconds(value:   Date,
               seconds: number): Date;

    /**
     * Adds the specified number of years to the provided date.
     * @param value Date to update.
     * @param years Number of years to add.
     * @returns The same `Date` instance updated in place.
     */
    addYears(value: Date,
             years: number): Date;

    /**
     * Converts the provided date to a `YYYY-MM-DD` date string.
     * @param value Date to format.
     * @returns The formatted date string.
     */
    toDateString(value: Date): string;

    /**
     * Returns the last day of the month for the provided date.
     * @param value Date to evaluate.
     * @returns The same `Date` instance updated to the end of the month.
     */
    toMonthEnd(value: Date): Date;

    /**
     * Returns the first day of the month for the provided date.
     * @param value Date to evaluate.
     * @returns The same `Date` instance updated to the start of the month.
     */
    toMonthStart(value: Date): Date;

    /**
     * Formats the provided date using the requested format.
     * @param value Date to format.
     * @param resultFormat Format string with tokens such as `YYYY`, `MM`, `DD`, `hh`, `mm`, `ss`, `nnn`.
     * @returns The formatted date string.
     * @example
     * const result = XT.Date.toString(new Date("2026-06-19T12:30:00"), "YYYY-MM-DD hh:mm:ss");
     */
    toString(value: Date,
              resultFormat: string): string;

    /**
     * Converts the provided date to ISO extended format.
     * @param value Date to format.
     * @returns The ISO formatted date string.
     */
    toStringISO(value: Date): string;

    /**
     * Formats the provided date as a time string.
     * @param value Date to format.
     * @returns The formatted time string.
     */
    toTimeString(value: Date): string;

    /**
     * Returns the last day of the week containing the provided date.
     * @param value Date to evaluate.
     * @returns The same `Date` instance updated to the end of the week.
     */
    toWeekEnd(value: Date): Date;

    /**
     * Returns the last day of the week containing the provided date.
     * @param value Date to evaluate.
     * @param firstWeekDay First day of the week.
     * @returns The same `Date` instance updated to the end of the week.
     */
    toWeekEnd(value: Date,
               firstWeekDay: WeekDays): Date;

    /**
     * Returns the first day of the week containing the provided date.
     * @param value Date to evaluate.
     * @returns The same `Date` instance updated to the start of the week.
     */
    toWeekStart(value: Date): Date;

    /**
     * Returns the first day of the week containing the provided date.
     * @param value Date to evaluate.
     * @param firstWeekDay First day of the week.
     * @returns The same `Date` instance updated to the start of the week.
     */
    toWeekStart(value: Date,
                 firstWeekDay: WeekDays): Date;

    /**
     * Moves the provided date to the beginning of the year.
     * @param value Date to update.
     * @returns The same `Date` instance updated to the start of the year.
     */
    toYearStart(value: Date): Date;

    /**
     * Moves the provided date to the end of the year.
     * @param value Date to update.
     * @returns The same `Date` instance updated to the end of the year.
     */
    toYearEnd(value: Date): Date;
}
