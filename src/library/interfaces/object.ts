export interface IObjectLib
{
    getValue( p_Object: Record<string, any>,
              p_Accessor: string): any


    setValue( target:     Record<string, any>,
              accessor:   string,
              value:      any): boolean
    setValue( target:     Record<string, any>,
              accessor:   string,
              value:      any,
              createPath: boolean): boolean

}
