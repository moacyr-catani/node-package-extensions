import { IStringLib } from "./../library/interfaces/string.js"
import * as Constants from "./constants.js";




type DateStructBaseValue =
{
    index_start: number;
    index_end:   number;
    length:      number;
}



type DateStructNumberValue = DateStructBaseValue &
{
    value: number;
}



type DateStructStringValue = DateStructBaseValue &
{
    value: string;
}



type DateStruct = 
{
    YYYY:   DateStructNumberValue; // Year (4 digits)
    YY:     DateStructNumberValue; // Year (2 digits)
    MM:     DateStructNumberValue; // Month (2 digits)
    DD:     DateStructNumberValue; // Day (2 digits) 
    hh:     DateStructNumberValue; // Hour (2 digits, format 12) 
    mm:     DateStructNumberValue; // Minute (2 digits) 
    ss:     DateStructNumberValue; // Second (2 digits) 
    nnn:    DateStructNumberValue; // Millisecond (3 digits) 
    OFFSET: DateStructStringValue; // Offset from UTC (timezone) in minutes
    tt:     DateStructStringValue; // AM/PM value
}



// Keys of DateStruct which values are fixed length
const DateStructFixedLengthKeys: Array<keyof DateStruct> = 
[
    "YYYY", 
    "YY", 
    "MM", 
    "DD", 
    "hh", 
    "mm", 
    "ss", 
    "nnn",
    "tt", 
]





export class ParsedDate 
{
    constructor( p_Value:       string,
                 p_ParseFormat: string,
                 p_StringLib:   IStringLib)
    {
        // Check UTC offset
        this.#DateParts.OFFSET.index_start = p_ParseFormat.indexOf("OFFSET");

        if (this.#DateParts.OFFSET.index_start >= 0)
        {
            // UTC time, no offset ...
            if (p_Value.substring(this.#DateParts.OFFSET.index_start, 1) === "Z") 
            {
                this.#DateParts.OFFSET.index_end = this.#DateParts.OFFSET.index_start + 1;  // Offset value is just the letter 'Z'
                this.#UTCMinutesOffset           = 0;                                       // No offset from UTC (Z)
                this.#DateParts.OFFSET.value     = "Z";
            }

            // ... offset in hh:mm
            else
            {
                this.#DateParts.OFFSET.index_end = this.#DateParts.OFFSET.index_start + 6;  // Offset value is just the letter 'Z'
                this.#UTCMinutesOffset           = 0;                                       // No offset from UTC (Z)
                this.#DateParts.OFFSET.value     = p_Value
                                                  .substring(this.#DateParts.OFFSET.index_start,
                                                             this.#DateParts.OFFSET.index_end)
                                                  .trim();
            }
        }


        // Scans string for value holders
        for (const strDatePart of DateStructFixedLengthKeys)
        {
            this.#DateParts[strDatePart].index_start = p_ParseFormat.indexOf(strDatePart);
            this.#DateParts[strDatePart].index_end   = this.#DateParts[strDatePart].index_start + this.#DateParts[strDatePart].length;
    
            if (this.#DateParts[strDatePart].index_start >= 0)
            {
                // Get substring from date part position
                const strValue: string = p_Value
                                        .substring(this.#DateParts[strDatePart].index_start,
                                                   this.#DateParts[strDatePart].index_end)
                                        .trim();
    

                // AM/PM indicator
                if ("tt" === strDatePart)
                    this.#DateParts[strDatePart].value = strValue.toUpperCase();


                // Tries to convert to int only if string represents a valid integer
                else if ( p_StringLib.isInt(strValue))
                    this.#DateParts[strDatePart].value = <number>p_StringLib.toInt(strValue);
    
    
                // "Removes" parsed part
                p_ParseFormat = p_ParseFormat.replace(strDatePart, "*".repeat(this.#DateParts[strDatePart].length));
            }
        }
    
    
        // Validate values
    
        // Validate year
        if ( isNaN(this.#DateParts.YY.value) && isNaN(this.#DateParts.YYYY.value) ) 
        {
            this.#Invalid = true;
            return;
        }
        else if (!isNaN(this.#DateParts.YY.value))
            this.#DateParts.YYYY.value = 2000 + this.#DateParts.YY.value;


        // Validate hour
        if (this.#DateParts.hh.value > 0)
        {
            // Validate AM/PM indicator
            if (this.#DateParts.tt.value !== "")
            {
                if ( (this.#DateParts.tt.value !== "AM" && this.#DateParts.tt.value !== "PM") ||
                     (this.#DateParts.tt.value === "PM" && this.#DateParts.hh.value > 13) )
                {
                    this.#Invalid = true;
                    return;
                }

                if (this.#DateParts.tt.value === "PM")
                {
                    this.#Hours12 = this.#DateParts.hh.value;
                    this.#DateParts.hh.value+= 12;    
                }
            }
            else
            {
                this.#DateParts.tt.value = this.#DateParts.hh.value > 12 ? 
                                            "PM" : 
                                            "AM";
                this.#Hours12 = this.#DateParts.hh.value % 12;
            }
        }



        // Validade UTC offset
        if (this.#DateParts.OFFSET.value !== "" && this.#DateParts.OFFSET.value !== "Z")
        {
            const strOffsetSign:    string = this.#DateParts.OFFSET.value.substring(0, 1);
            const strOffsetHours:   string = this.#DateParts.OFFSET.value.substring(1, 3);
            const strOffsetMinutes: string = this.#DateParts.OFFSET.value.substring(4, 6);

            // Check values
            if ((strOffsetSign !== "-" && strOffsetSign !== "+") ||
                 !p_StringLib.isInt(strOffsetHours) ||
                 !p_StringLib.isInt(strOffsetMinutes))
            {
                this.#Invalid = true;
                return;
            }


            this.#UTCMinutesOffset = (p_StringLib.toInt(strOffsetSign + strOffsetHours.trim())! * 60) +
                                     (p_StringLib.toInt(strOffsetSign + strOffsetMinutes.trim())!);
        }


        // Defines maximum day number for every month, including February on leap years
        let intDayMax:   number  = 0;
        let blnLeapYear: boolean = (this.#DateParts.YYYY.value % 4 == 0);
    
        if ( 1  == this.#DateParts.MM.value ||
             3  == this.#DateParts.MM.value ||
             5  == this.#DateParts.MM.value ||
             7  == this.#DateParts.MM.value ||
             8  == this.#DateParts.MM.value ||
             10 == this.#DateParts.MM.value ||
             12 == this.#DateParts.MM.value)
            intDayMax = 31;
    
        else if (2 == this.#DateParts.MM.value)
            intDayMax = 28 + (blnLeapYear ? 1 : 0);
    
        else
            intDayMax = 30;
    
            
        // Validate
        if ( !( isNaN(this.#DateParts.YYYY.value) ||
                isNaN(this.#DateParts.MM.value)   ||
                isNaN(this.#DateParts.DD.value)   ||
                (this.#DateParts.MM.value < 1  || this.#DateParts.MM.value > 12)        || // Month
                (this.#DateParts.DD.value < 1  || this.#DateParts.DD.value > intDayMax) || // Day
                (this.#DateParts.hh.value < 0  || this.#DateParts.hh.value > 23)        || // Hour
                (this.#DateParts.mm.value < 0  || this.#DateParts.mm.value > 59)        || // Minute
                (this.#DateParts.ss.value < 0  || this.#DateParts.ss.value > 59) ) )       // Second
            this.#Invalid = false;
    }





    // ------------------------------------------------------------------------------------------------------------------------------
    // #region Private members
    // ------------------------------------------------------------------------------------------------------------------------------

    readonly #DateParts: DateStruct = 
    {
        YYYY:
        {
            index_start: -1,
            index_end:   -1,
            length:      4,
            value:       NaN  // If not present, throws error
        },
        YY:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       NaN  // If not present, throws error
        },
        MM:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       NaN  // If not present, throws error
        },
        DD:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       NaN  // If not present, throws error
        },
        hh:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       0  // If not present, defaults to 0
        },
        mm:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       0  // If not present, defaults to 0
        },
        ss:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       0  // If not present, defaults to 0
        },
        nnn:
        {
            index_start: -1,
            index_end:   -1,
            length:      3,
            value:       0  // If not present, defaults to 0
        },
        OFFSET:
        {
            index_start: -1,
            index_end:   -1,
            length:      6,
            value:       ""
        },
        tt:
        {
            index_start: -1,
            index_end:   -1,
            length:      2,
            value:       "AM" // If not present, defaults to 'AM'
        }
    }
    readonly #Invalid:          boolean = true;
    readonly #Hours12:          number  = 0;
    readonly #UTCMinutesOffset: number  = NaN;

    // #endregion
    // ------------------------------------------------------------------------------------------------------------------------------





    // ------------------------------------------------------------------------------------------------------------------------------
    // #region Public properties
    // ------------------------------------------------------------------------------------------------------------------------------

    public get AmPmIndicator(): string | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.tt.value;

        return undefined;
    }



    public get Days(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.DD.value;

        return undefined;
    }



    public get Invalid(): boolean
    {
        return this.#Invalid;
    }



    public get Hours(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.hh.value;

        return undefined;
    }



    public get Hours12(): number | undefined
    {
        if (!this.#Invalid)
            return this.#Hours12

        return undefined;
    }



    public get Minutes(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.mm.value;

        return undefined;
    }



    public get Milliseconds(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.nnn.value;

        return undefined;
    }



    public get Months(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.MM.value;

        return undefined;
    }




    public get Seconds(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.ss.value;

        return undefined;
    }



    public get UTCMinutesOffset(): number | undefined
    {
        if (!this.#Invalid)
            return this.#UTCMinutesOffset;

        return undefined;
    }



    public get Years(): number | undefined
    {
        if (!this.#Invalid)
            return this.#DateParts.YYYY.value;

        return undefined;
    }

    // #endregion
    // ------------------------------------------------------------------------------------------------------------------------------





    // ------------------------------------------------------------------------------------------------------------------------------
    // #region Public methods
    // ------------------------------------------------------------------------------------------------------------------------------

    public toDate(): Date
    {
        if (!isNaN(this.#UTCMinutesOffset))
        {
            // Get milliseconds ellapset in UTC
            let intReturn: number = Date.UTC(this.#DateParts.YYYY.value,
                                             this.#DateParts.MM.value - 1, // Javascript defines it this way... January = 0
                                             this.#DateParts.DD.value,
                                             this.#DateParts.hh.value,
                                             this.#DateParts.mm.value,
                                             this.#DateParts.ss.value,
                                             this.#DateParts.nnn.value);

            // Add offset
            if (this.#UTCMinutesOffset !== 0)
                intReturn += (this.#UTCMinutesOffset * 60_000)


            return new Date(intReturn);
        }
        else
            // Get milliseconds ellapset in local time
            return new Date(this.#DateParts.YYYY.value,
                            this.#DateParts.MM.value - 1, // Javascript defines it this way... January = 0
                            this.#DateParts.DD.value,
                            this.#DateParts.hh.value,
                            this.#DateParts.mm.value,
                            this.#DateParts.ss.value,
                            this.#DateParts.nnn.value);
    }



    public toString(format: string): string
    {
        return format.replace(/YYYY/g,   this.#DateParts.YYYY.value.toString())
                     .replace(/YY/g,     this.#DateParts.YYYY.value.toString().substring(2))
                     .replace(/MM/g,     this.#DateParts.MM.value  .toString().padStart(2, "0"))
                     .replace(/DD/g,     this.#DateParts.DD.value  .toString().padStart(2, "0"))
                     .replace(/hh/g,     this.#DateParts.hh.value  .toString().padStart(2, "0"))
                     .replace(/mm/g,     this.#DateParts.mm.value  .toString().padStart(2, "0"))
                     .replace(/ss/g,     this.#DateParts.ss.value  .toString().padStart(2, "0"))
                     .replace(/nnn/g,    this.#DateParts.nnn.value .toString().padStart(3, "0"))
                     .replace(/tt/g,     this.#DateParts.tt.value)
                     .replace(/OFFSET/g, this.#DateParts.OFFSET.value);
    }


    public toStringISO(): string
    {
        return this.toString( Constants.DATETIME_FORMAT_ISO);
    }

    // #endregion
    // ------------------------------------------------------------------------------------------------------------------------------
}