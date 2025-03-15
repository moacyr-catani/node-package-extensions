
// ------------------------------------------------------------------------------------------------------------------------------
// #region Object extensions
// ------------------------------------------------------------------------------------------------------------------------------


/**
 * Asserts a value is (or can be casted to) date. Return an alternative value, otherwise
 * @param p_Value Value to be coerced to date
 * @param p_AlternativeValue Alternative value to be returned if original value cannot be coerced to date
 * @param p_ParseFormat Representation of how datetime value is written if p_Value is a string. Valid tokens are YYYY, YY, MM, DD, hh, mm, ss, nnn
 * @returns A value coerced to date or, if not possible, an alternative value
 */
Object.$_assertDate = function(p_Value:            any,
                               p_AlternativeValue: Date | null = null,
                               p_ParseFormat:      string = "YYYY-MM-DD hh:mm:ss:nnn"): Date | null
{
    // Checks params
    if (p_Value instanceof Date && !isNaN(p_Value.getTime()))
    {
        return p_Value;
    }
    else if ("undefined" == typeof p_Value || null == p_Value)
    {
        return p_AlternativeValue;
    }


    // Tries to cast value to date
    let objValue: any = null;       

    switch (typeof p_Value)
    {
        case "string":
            objValue = p_Value.$_toDate(p_ParseFormat);
            break;

        case "number":
            objValue = new Date(p_Value);
            break;
    }


    // Returns casted value, if valid
    if (objValue instanceof Date && !isNaN(objValue.getTime()))
    {
        return objValue;
    }


    // ... alternative value, otherwise
    return p_AlternativeValue;
}



/**
 * Asserts a value is (or can be casted to) decimal number. Return an alternative value, otherwise
 * @param p_Value Value to be coerced to decimal
 * @param p_AlternativeValue Alternative value to be returned if original value cannot be coerced to decimal
 * @returns A value coerced to decimal or, if not possible, an alternative value
 */
Object.$_assertDecimal = function(p_Value:            any,
                                  p_AlternativeValue: number | null = null): number | null
{
    // Checks params
    if ("undefined" == typeof p_Value || null == p_Value)
    {
        return p_AlternativeValue;
    }


    // Tries to cast value to date
    let objValue: any;

    if (null != p_Value && typeof p_Value != "undefined")
    {
        switch (typeof p_Value)
        {
            case "number":
                objValue = p_Value;
                break;

            case "string":
                objValue = p_Value.$_toDecimal();

            default:
                objValue = NaN;
        }
    }


    // Returns casted value, if valid
    if (!isNaN(objValue) && isFinite(objValue))
    {
        return objValue;
    }


    // ... alternative value, otherwise
    return p_AlternativeValue;
}


const $__getObject = function(p_Object:   Record<string, any>,
                              p_Accessor: string): Record<string, any> | undefined
{
    try
    {
        // TODO :: handle arrays
        const arrParts: string[] = p_Accessor.split(".");


        // It is a leaf
        if (1 == arrParts.length)
        {
            return p_Object[arrParts[0]];
        }


        // ... it is an object
        else
        {
            // It expects an array
            if (arrParts[0].indexOf("[") > 0)
            {
                const strObjectKey: string = arrParts[0]
                                             .substring(0, arrParts[0].indexOf("["))
                                             .trim();
                const arrFilterKey: any[]  = arrParts[0]
                                             .substring(arrParts[0].indexOf("["))
                                             //.trim().$_trimChar("[").$_trimChar("]")
                                             .trim()
                                             .$_trim(["[", "]"])
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
                                                          key: arrElementParts[0],
                                                          value: arrElementParts[1].$_trim("'")
                                                       }
                                             });

                const arrObject: Array<any> = p_Object[strObjectKey];
                const objItem:   any        = arrObject.find( arrElement =>
                                                        {
                                                            for (const objKeyValue of arrFilterKey)
                                                            {
                                                                if (arrElement[objKeyValue.key] != objKeyValue.value)
                                                                {
                                                                    return false;
                                                                }
                                                            }

                                                            return true;
                                                        });
                return $__getObject(objItem,
                                    arrParts.slice(1).join("."));

            }

            // It expects an object index
            else
            {
                return $__getObject(p_Object[arrParts[0]],
                                    arrParts.slice(1).join("."));
            }
        }
    }

    catch (p_Exception)
    {
        return undefined;
    }
}



Object.$_getValue = function(p_Object: Record<string, any>,
                             p_Accessor: string): any
{
    return $__getObject(p_Object, 
                        p_Accessor);
}


Object.$_setValue = function(p_Object:   Record<string, any>,
                             p_Accessor: string,
                             p_Value:    any): boolean
{
    // Acessor parts
    const arrParts: string[] = p_Accessor.split(".");


    // Gets object
    const objObject: Record<string, any> | undefined = $__getObject(p_Object,
                                                                    p_Accessor);

    // Checks if object exists
    if ("undefined" == typeof objObject)
    {
        return false;
    }


    // Sets value
    objObject[arrParts[arrParts.length - 1]] = p_Value;

    return true;
}

// #endregion 
// ------------------------------------------------------------------------------------------------------------------------------




