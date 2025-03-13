
// ------------------------------------------------------------------------------------------------------------------------------
// #region Array extensions
// ------------------------------------------------------------------------------------------------------------------------------

Array.prototype.$_removeDuplicates = function(): Array<any>
{
    // Creates map with unique values
    var objSeen: Record<string, any> = {};


    // TODO :: filter array of other types than string
    // Filters array to unique values
    return this.filter( (item: string) =>
                {
                    return (item in objSeen ? false : objSeen[item] = true);
                })
}

// #endregion
// ------------------------------------------------------------------------------------------------------------------------------
