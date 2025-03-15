// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface ObjectConstructor
    {
        $_getValue(p_Object:  Object,
                   p_Acessor: string): any;
        $_setValue(p_Object:  Object,
                   p_Acessor: string,
                   p_Value:   any):    boolean;
    }


    interface Object 
    {
        $_assertDate(p_Value:             any,
                     p_AlternativeValue?: Date | null,
                     p_ParseFormat?:      string): Date | null | undefined;

        $_assertDecimal(p_Value: any,
                        p_AlternativeValue: number | null): number | null;
        $_getValue(p_Object:  Object,
                   p_Acessor: string): any;
        $_setValue(p_Object:  Object,
                   p_Acessor: string,
                   p_Value:   any):    boolean;

    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};