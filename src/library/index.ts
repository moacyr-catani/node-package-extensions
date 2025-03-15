import { IDateLib,   DateLib}    from "./date.js";
import { INumberLib, NumberLib}  from "./number.js";
import { IStringLib, StringLib}  from "./string.js";






interface IXT
{
    Date:   IDateLib,
    Number: INumberLib,
    String: IStringLib
}


const XT: IXT = 
{
    Date:  DateLib,
    Number: NumberLib,
    String: StringLib
}




Object.seal(XT);
export 
{ 
    IXT,
    XT,
    IDateLib,
    INumberLib,
    IStringLib
};