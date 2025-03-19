import { StringLib } from "./string";


// ------------------------------------------------------------------------------------------------------------------------------
// #region Private members and helpers
// ------------------------------------------------------------------------------------------------------------------------------

function _getObject (p_Object:   Record<string, any>,
                     p_Accessor: string): Record<string, any> | undefined
{
    try
    {
        // TODO :: handle arrays
        const arrParts: string[] = p_Accessor.split(".");


        // It is a leaf ...
        if (1 == arrParts.length)
            return p_Object[arrParts[0]];


        // ... it is an object
        else
        {
            // It expects an array
            if (arrParts[0].indexOf("[") > 0)
            {
                const strObjectKey: string = arrParts[0]
                                             .substring(0, arrParts[0].indexOf("["))
                                             .trim();
                const arrFilterKey: any[]  = StringLib.trim
                                             (
                                                arrParts[0].substring(arrParts[0].indexOf("["))
                                                           .trim(),
                                                ["[", "]"]
                                             )
                                             .split(",")
                                             .map ( strElement =>
                                             {
                                                const arrElementParts: string[] = strElement
                                                                                  .split("=")
                                                                                  .map( strElementPart =>
                                                                                  {
                                                                                      return strElementPart.trim();
                                                                                  });
                                                return {
                                                          key:   arrElementParts[0],
                                                          value: StringLib.trim(arrElementParts[1], "'")
                                                       }
                                             });

                const arrObject: Array<any> = p_Object[strObjectKey];
                const objItem:   any        = arrObject.find( arrElement =>
                                                        {
                                                            for (const objKeyValue of arrFilterKey)
                                                            {
                                                                if (arrElement[objKeyValue.key] != objKeyValue.value)
                                                                    return false;
                                                            }

                                                            return true;
                                                        });
                return _getObject(objItem,
                                  arrParts.slice(1).join("."));

            }

            // It expects an object index
            else
            {
                return _getObject(p_Object[arrParts[0]],
                                  arrParts.slice(1).join("."));
            }
        }
    }

    catch (p_Exception)
    {
        return undefined;
    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------------------------
// #region Interface
// ------------------------------------------------------------------------------------------------------------------------------

interface IObjectLib
{
    getValue( p_Object: Record<string, any>,
              p_Accessor: string): any


    setValue( p_Object:   Record<string, any>,
              p_Accessor: string,
              p_Value:    any): boolean

}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------






// ------------------------------------------------------------------------------------------------------------------------------
// #region Object extensions
// ------------------------------------------------------------------------------------------------------------------------------

const ObjectLib: IObjectLib =
{
    
    getValue( p_Object: Record<string, any>,
              p_Accessor: string): any
    {
        return _getObject(p_Object, 
                          p_Accessor);
    },


    setValue( p_Object:   Record<string, any>,
              p_Accessor: string,
              p_Value:    any): boolean
    {
        // Acessor parts
        const arrParts: string[] = p_Accessor.split(".");


        // Gets object
        const objObject: Record<string, any> | undefined = _getObject(p_Object,
                                                                      p_Accessor);

        // Checks if object exists
        if ("undefined" == typeof objObject)
            return false;


        // Sets value
        objObject[arrParts[arrParts.length - 1]] = p_Value;


        return true;
    }
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




// #region Private members and helpers
// ------------------------------------------------------------------------------------------------------------------------------



// Export object
Object.seal( ObjectLib )
export  { IObjectLib, ObjectLib };