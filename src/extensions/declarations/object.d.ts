// ------------------------------------------------------------------------------------------------------------------------------
// #region Interfaces
// ------------------------------------------------------------------------------------------------------------------------------

declare global
{
    interface ObjectConstructor
    {
        /**
         * Reads a nested property value from the target object using a dot-separated accessor.
         * @param p_Object Object to read from.
         * @param p_Acessor Dot-separated property path.
         * @returns The value found at the specified path, or `undefined` when the path does not exist.
         * @example
         * const value = Object.$_getValue({ user: { name: "Jane" } }, "user.name");
         */
        $_getValue(p_Object: Object,
                   p_Acessor: string): any;

        /**
         * Sets a nested property value on the target object using a dot-separated accessor.
         * @param p_Object Object to update.
         * @param p_Acessor Dot-separated property path.
         * @param p_Value Value to assign.
         * @returns `true` when the value was set successfully; otherwise `false`.
         */
        $_setValue(p_Object: Object,
                   p_Acessor: string,
                   p_Value: any): boolean;
    }


    interface Object
    {
        /**
         * Asserts that the provided value is a date.
         * @param p_Value Value to verify.
         * @param p_AlternativeValue Optional fallback when the value is not a valid date.
         * @param p_ParseFormat Optional format used to parse date strings.
         * @returns A valid `Date`, `null`, or `undefined`.
         */
        $_assertDate(p_Value: any,
                     p_AlternativeValue?: Date | null,
                     p_ParseFormat?: string): Date | null | undefined;

        /**
         * Asserts that the provided value is a decimal number.
         * @param p_Value Value to verify.
         * @param p_AlternativeValue Optional fallback when the value is not a valid decimal.
         * @returns A valid number, or `null`.
         */
        $_assertDecimal(p_Value: any,
                        p_AlternativeValue: number | null): number | null;

        /**
         * Reads a nested property value from the target object using a dot-separated accessor.
         * @param p_Object Object to read from.
         * @param p_Acessor Dot-separated property path.
         * @returns The value found at the specified path, or `undefined` when the path does not exist.
         */
        $_getValue(p_Object: Object,
                   p_Acessor: string): any;

        /**
         * Sets a nested property value on the target object using a dot-separated accessor.
         * @param p_Object Object to update.
         * @param p_Acessor Dot-separated property path.
         * @param p_Value Value to assign.
         * @returns `true` when the value was set successfully; otherwise `false`.
         */
        $_setValue(p_Object: Object,
                   p_Acessor: string,
                   p_Value: any): boolean;

    }
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------



// Needed to set this file as a module
export {};