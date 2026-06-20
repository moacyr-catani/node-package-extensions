export interface IObjectLib
{
    /**
     * Reads a nested property value from the target object using a dot-separated accessor.
     * @param p_Object Object to read from.
     * @param p_Accessor Dot-separated property path.
     * @returns The value found at the specified path, or `undefined` when the path does not exist.
     * @example
     * const value = XT.Object.getValue({ user: { name: "Jane" } }, "user.name");
     */
    getValue(p_Object: Record<string, any>,
             p_Accessor: string): any;

    /**
     * Sets a nested property value on the target object using a dot-separated accessor.
     * @param target Object to update.
     * @param accessor Dot-separated property path.
     * @param value Value to assign.
     * @returns `true` when the value was set successfully; otherwise `false`.
     */
    setValue(target: Record<string, any>,
             accessor: string,
             value: any): boolean;

    /**
     * Sets a nested property value on the target object using a dot-separated accessor.
     * @param target Object to update.
     * @param accessor Dot-separated property path.
     * @param value Value to assign.
     * @param createPath When `true`, missing intermediate objects are created.
     * @returns `true` when the value was set successfully; otherwise `false`.
     */
    setValue(target: Record<string, any>,
             accessor: string,
             value: any,
             createPath: boolean): boolean;
}

