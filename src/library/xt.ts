import { INumberLib, NumberLib}  from "./number"
import { IStringLib, StringLib}  from "./string"






export interface IXT
{
    Number: INumberLib,
    String: IStringLib
}


const XT: IXT = 
{
    Number: NumberLib,
    String: StringLib
}




Object.seal(XT);
export default XT;