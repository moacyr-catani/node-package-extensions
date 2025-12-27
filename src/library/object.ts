// import { IObjectLib } from "./interfaces/object.js"
// import { StringLib }  from "./string.js";


// /*
// {
//     "a":
//     {
//         "b":
//         {
//             "c": 
//             [
//                 {
//                     "d": 1,
//                     "e": 2,
//                     "f":
//                     [
//                         {
//                             "g": 1,
//                             "h": 2
//                         },
//                         {
//                             "g": 3,
//                             "h": 4
//                         }
//                     ]
//                 },
//                 {
//                     "d": 3,
//                     "e": 4
//                 }
//             ]
//         },
//     }
// }

// a.b.c[d.e[g=1,h=2]] 

// // filter array


// filter array

// Accessor
// - object: string
// - array: [] -> type, accessor, filter (number, boolean, string)
// */


// class AccessorParser
// {
//     constructor( p_Accessor: string)
//     {
//         // Sanity check
//         p_Accessor = p_Accessor.trim(); 
//         if (p_Accessor.length < 1)
//             throw new Error("Invalid accessor definition"); 


//         // Find first object accessor string indexes
//         let intIndexStart: number = 0,
//             intIndexEnd:   number = p_Accessor.indexOf(".");

//         if (intIndexEnd < 0)
//             intIndexEnd = p_Accessor.length;


//         // Get accessors
//         while (intIndexEnd > 0)
//         {
//             let strAccessor:           string = p_Accessor.substring(intIndexStart, intIndexEnd).trim(),
//                 intArrayAccessorStart: number = strAccessor.indexOf("["),
//                 intArrayAccessorEnd:   number = intArrayAccessorStart >= 0 ? strAccessor.indexOf("]") : -1;



//             // Invalid array accessor
//             if ( (intArrayAccessorStart >= 0) !== (intArrayAccessorEnd >= 0) )
//                 throw new Error("Invalid accessor definition: " + p_Accessor);



//             // It is an object accessor
//             else if (intArrayAccessorStart < 0)
//                 this._arrParts.push(new ObjectAccessor(strAccessor, 
//                                                        intIndexStart, 
//                                                        intIndexEnd));



//             // It is an array accessor
//             else
//             {
//                 this._arrParts.push(new ObjectAccessor(strAccessor.substring(0, intArrayAccessorStart).trim(),
//                                                        intIndexStart,
//                                                        intArrayAccessorStart));


//                 while (intArrayAccessorEnd >= 0)
//                 {
//                     let strArrayAccessor: string  = strAccessor.substring(intArrayAccessorStart, intArrayAccessorEnd).trim(),
//                         blnObjectIndex:   boolean = false;


//                     // Index is an object
//                     if (strArrayAccessor.indexOf("=") > -1)
//                     {
//                         blnObjectIndex = true;
//                         const arrFilterKey: any[]  = strArrayAccessor
//                                                      .split(",")
//                                                      .map ( strElement =>
//                                                      {
//                                                         const arrElementParts: string[] = strElement
//                                                                                           .split("=")
//                                                                                           .map( strElementPart =>
//                                                                                           {
//                                                                                               return strElementPart.trim();
//                                                                                           });
//                                                         return {
//                                                                   key:   arrElementParts[0],
//                                                                   value: StringLib.trim(arrElementParts[1], "'")
//                                                                }
//                                                          });
    
//                     }
    
//                     // Index is a number or a token
//                     else
//                     {
//                         strArrayAccessor = strArrayAccessor.toLowerCase();
    
    
//                         // TOKEN "$abc"
//                         if ("$" === strArrayAccessor.substring(0, 1))
//                             this._arrParts.push(new ArrayAccessor(strArrayAccessor,
//                                                                   intArrayAccessorStart,
//                                                                   intArrayAccessorStart,
//                                                                   strArrayAccessor));
    
    
//                         // Number (position)
//                         else if (StringLib.isInt(strArrayAccessor))
//                         {
//                             if (!blnObjectIndex)
//                                 this._arrParts.push(new ArrayAccessor(strArrayAccessor,
//                                                                       intArrayAccessorStart,
//                                                                       intArrayAccessorStart,
//                                                                       StringLib.toInt(strArrayAccessor)));

    
//                             else
//                                 throw new Error("Invalid array accessor: " + p_Accessor);
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     private _arrParts: ObjectAccessor[] | ArrayAccessor[] = [];
// }


// enum ArrayAccessorTypes
// {
//     POSITION = 1,
//     FILTER   = 2,
//     TOKEN    = 3
// }


// enum ArrayAccessorFilterTypes
// {
//     STRING  = 1,
//     NUMBER  = 2,
//     BOOLEAN = 3
    
// }



// class ObjectAccessor
// {
//     constructor( p_Accessor: string,
//                  p_Start:    number,
//                  p_End:      number,
//                  p_Value:    any)
//     {
//         this.#strAccessor       = p_Accessor;
//         this.#arrArrayAccessors = [];

//         this.#objValue          = p_Accessor;
//         this.#intIndexStart     = p_Start;
//         this.#intIndexEnd       = p_End
//         this.#objValue          = p_Value;
//     }



//     // Private holders
//     #arrArrayAccessors: ArrayAccessor[];
//     #strAccessor:       string;
//     #intIndexStart:     number;
//     #intIndexEnd:       number;
//     #objValue:          any;



//     // Public properties
//     public get accessor(): string
//     {
//         return this.#strAccessor;
//     }


//     public get end():      number
//     {
//         return this.#intIndexEnd;
//     }


//     public get start():    number
//     {
//         return this.#intIndexStart;
//     }


//     public get arrayAccessors(): ArrayAccessor[]
//     {
//         return this.#arrArrayAccessors;
//     }


//     public get value():    any
//     {
//         return this.#objValue;
//     }

// }





// class ArrayAccessor //extends BaseAccessor
// {
//     constructor( p_Accessor: tring,
//                  p_Start:    number,
//                  p_End:      number,
//                  p_Value:    any)
//     {

//         this.#intIndexStart     = p_Start;
//         this.#intIndexEnd       = p_End

//         // super(p_Accessor,
//         //       p_Start,
//         //       p_End,
//         //       p_Value);
//     }



//     // Private holders
//     #ArrayAccessorType: ArrayAccessorTypes;
//     #ArrayAccessorFilterType: ArrayAccessorFilterTypes | undefined = undefined;
//     #intIndexStart:     number;
//     #intIndexEnd:       number;
//     #strAccessor: string;
//     #varFilterValue: string | number | boolean;



//     // Public properties
//     public get end():      number
//     {
//         return this.#intIndexEnd;
//     }


//     public get start():    number
//     {
//         return this.#intIndexStart;
//     }

//     public get type(): ArrayAccessorTypes
//     {
//         return this.#ArrayAccessorType;
//     }


//     public get filterType(): ArrayAccessorFilterTypes | undefined
//     {
//         return this.#ArrayAccessorFilterType;
//     }   

//     public get accessor(): string
//     {
//         return this.#strAccessor;
//     }   

//     public get filterValue(): string | number | boolean
//     {
//         return this.#varFilterValue;
//     }
// }




// // ------------------------------------------------------------------------------------------------------------------------------
// // #region Private members and helpers
// // ------------------------------------------------------------------------------------------------------------------------------

// function _getArrayItem( p_Array:    Array<any>,
//                         p_Accessor: string): any | undefined
// {
//     // Sanity check; verify if object is an array
//     if ( !Array.isArray(p_Array) )
//         throw new Error("Invalid array: " + p_Array);



//     // Sanity check; verify if the accessor is for an array
//     const intIndexStart: number = p_Accessor.indexOf("[");
//     const intIndexEnd:   number = p_Accessor.indexOf("]");

//     if (intIndexStart < 0 || intIndexEnd < 0 || intIndexStart > intIndexEnd)
//         throw new Error("Invalid array accessor: " + p_Accessor);



//     // Get accessor
//     let strAccessor: string = p_Accessor.substring(intIndexStart, intIndexEnd).trim();



//     // Get item
//     let objItem:        any     = undefined;
//     let blnObjectIndex: boolean = false;



//     // // Index is an object
//     // if (strAccessor.indexOf("=") > 0)
//     // {
//     //     blnObjectIndex = true;
//     //     const arrFilterKey: any[]  = strAccessor
//     //                                  .split(",")
//     //                                  .map ( strElement =>
//     //                                  {
//     //                                     const arrElementParts: string[] = strElement
//     //                                                                           .split("=")
//     //                                                                           .map( strElementPart =>
//     //                                                                           {
//     //                                                                               return strElementPart.trim();
//     //                                                                           });
//     //                                     return {
//     //                                               key:   arrElementParts[0],
//     //                                               value: StringLib.trim(arrElementParts[1], "'")
//     //                                            }
//     //                                  });

//     //     objItem = p_Array.find( arrElement =>
//     //                             {
//     //                                 for (const objKeyValue of arrFilterKey)
//     //                                 {
//     //                                     if (arrElement[objKeyValue.key] != objKeyValue.value)
//     //                                         return false;
//     //                                 }

//     //                                 return true;
//     //                             });
//     // }

//     // // Index is a number or a token
//     // else
//     // {
//     //     strAccessor = strAccessor.toLowerCase();


//     //     // TOKEN "$last"
//     //     if ("$last" === strAccessor)
//     //         objItem = p_Array[p_Array.length - 1];


//     //     // TOKEN "$insert"
//     //     // TODO
//     //     // else if (strAccessor == "$insert")
//     //     //     objItem = p_Array[p_Array.length];


//     //     else if (StringLib.isInt(strAccessor))
//     //     {
//     //         if (!blnObjectIndex)
//     //             objItem = p_Array[StringLib.toInt(strAccessor)!];

//     //         else
//     //             throw new Error("Invalid array accessor: " + p_Accessor);
//     //     }
//     // }



//     // Check for sub arrays
//     if (p_Accessor.indexOf("[", intIndexEnd) > 0)
//         return _getArrayItem(objItem, p_Accessor.substring(intIndexEnd + 1).trim());



//     // Return item
//     return objItem;
// }




// function _getObject (p_Object:   Record<string, any>,
//                      p_Accessor: string): Record<string, any> | undefined
// {
//     try
//     {
//         const arrParts: string[] = p_Accessor.split(".");
//         let   objItem:  any      = undefined;
//         let   strAccessor: string = ""



//         // It is a leaf ...
//         if (1 == arrParts.length)
//             strAccessor =arrParts[0];


//         // ... it is a node (an object)
//         else
//         {

//         }


//             // // It expects an object index
//             // else
//             // {
//             //     return _getObject(p_Object[arrParts[0]],
//             //                       arrParts.slice(1).join("."));
//             // }


//             // It expects an array
//             if (arrParts[0].indexOf("[") > 0)
//                 {
//                     const strObjectKey:     string     = arrParts[0]
//                                                          .substring(0, arrParts[0].indexOf("["))
//                                                          .trim();
//                     const arrObject:        Array<any> = p_Object[strObjectKey];
//                     const strArrayAccessor: string     = arrParts[0].substring(arrParts[0].indexOf("["));
//                     const objItem:          any        = _getArrayItem(arrObject, strArrayAccessor);
    
//                     // const arrFilterKey: any[]  = StringLib.trim
//                     //                              (
//                     //                                 arrParts[0].substring(arrParts[0].indexOf("["))
//                     //                                            .trim(),
//                     //                                 ["[", "]"]
//                     //                              )
//                     //                              .split(",")
//                     //                              .map ( strElement =>
//                     //                              {
//                     //                                 const arrElementParts: string[] = strElement
//                     //                                                                   .split("=")
//                     //                                                                   .map( strElementPart =>
//                     //                                                                   {
//                     //                                                                       return strElementPart.trim();
//                     //                                                                   });
//                     //                                 return {
//                     //                                           key:   arrElementParts[0],
//                     //                                           value: StringLib.trim(arrElementParts[1], "'")
//                     //                                        }
//                     //                              });
    
//                     // const objItem:   any        = arrObject.find( arrElement =>
//                     //                                         {
//                     //                                             for (const objKeyValue of arrFilterKey)
//                     //                                             {
//                     //                                                 if (arrElement[objKeyValue.key] != objKeyValue.value)
//                     //                                                     return false;
//                     //                                             }
    
//                     //                                             return true;
//                     //                                         });
//                     return _getObject(objItem,
//                                       arrParts.slice(1).join("."));
    
//                 }
    
//     }


// //objItem = p_Object[arrParts[0]];

//     catch (p_Exception)
//     {
//         return undefined;
//     }
// }



// function _parseAccessor( p_Accessor: string): string
// {
//     // Sanity check; verify if the accessor is for an array
//     const intIndexStart: number = p_Accessor.indexOf("[");
//     const intIndexEnd:   number = p_Accessor.indexOf("]");

//     if (intIndexStart < 0 || intIndexEnd < 0 || intIndexStart > intIndexEnd)
//         throw new Error("Invalid array accessor: " + p_Accessor);

//     // Get accessor
//     let strAccessor: string = p_Accessor.substring(intIndexStart, intIndexEnd).trim();
//     strAccessor = strAccessor.substring(1, strAccessor.length - 1).trim();

// }
// // #endregion
// // ------------------------------------------------------------------------------------------------------------------------------





// // ------------------------------------------------------------------------------------------------------------------------------
// // #region Object extensions
// // ------------------------------------------------------------------------------------------------------------------------------

// const ObjectLib: IObjectLib =
// {
    
//     getValue( p_Object: Record<string, any>,
//               p_Accessor: string): any
//     {
//         return _getObject(p_Object, 
//                           p_Accessor);
//     },


//     setValue( p_Object:     Record<string, any>,
//               p_Accessor:   string,
//               p_Value:      any,
//               p_CreatePath: boolean = false): boolean
//     {
//         // Acessor parts
//         const arrParts: string[] = p_Accessor.split(".");


//         // Define accessor
//         if (1 === arrParts.length)
//             p_Accessor = "";
//         else
//             p_Accessor = arrParts.slice(0, arrParts.length - 1).join(".");


//         // Gets object
//         let objObject: Record<string, any> | undefined = p_Accessor !== "" ?
//                                                              _getObject(p_Object, p_Accessor) :
//                                                              p_Object;

//         // Checks if object exists
//         if ("undefined" == typeof objObject)
//         {
//             if (!p_CreatePath)
//                 return false;


//             // Checks path
//             objObject = "undefined" !==  typeof p_Object ?
//                             p_Object :
//                             {};

//             for (let intA: number = 0; intA < arrParts.length - 1; intA++)
//             {
//                 if ( !(arrParts[intA] in objObject!))
//                     objObject![arrParts[intA]] = {};

//                 objObject = objObject![arrParts[intA]];
//             }
//         }




//         // Sets value
//         objObject![arrParts[arrParts.length - 1]] = p_Value;


//         return true;
//     }
// }

// // #endregion 
// // ------------------------------------------------------------------------------------------------------------------------------





// // Export object
// Object.seal( ObjectLib )
// export  { IObjectLib, ObjectLib };