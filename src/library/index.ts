import { IAssertLib}   from "./interfaces/assert.js";
import { AssertLib}    from "./assert.js";

import { IDateLib}   from "./interfaces/date.js";
import { DateLib}    from "./date.js";

import { INumberLib}  from "./interfaces/number.js";
import { NumberLib}   from "./number.js";

// import { IObjectLib}  from "./interfaces/object.js";
// import { ObjectLib}   from "./object.js";

import { IStringLib}  from "./interfaces/string.js";
import { StringLib}   from "./string.js";




interface IXT
{
    Assert: IAssertLib,
    Date:   IDateLib,
    Number: INumberLib,
    //Object: IObjectLib,
    String: IStringLib
}


const XT: IXT = 
{
    Assert: AssertLib,
    Date:   DateLib,
    Number: NumberLib,
    //Object: ObjectLib,
    String: StringLib
}




Object.seal(XT);
export 
{ 
    IXT,
    IAssertLib,
    IDateLib,
    INumberLib,
    //IObjectLib,
    IStringLib,

    XT,
};