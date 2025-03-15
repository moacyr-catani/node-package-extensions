//import "./../declarations/int32.d.js"

// global.$_xt_Int32 = function(value: number): $_xt_Int32
// {
//     //(<any>this).#_value = value;

//     (<any>this)[Symbol.toStringTag] = "$_xt_Int32"

//     return this;
// }



global.$x_Int32 = class 
{
    constructor(value: number)
    {
        this.#_value = value;
    }

    #_value: number;



    static isValid(value: string | number | bigint): boolean
    {
        console.log(value)
        return true;
    }

    valueOf(): number
    {
        return this.#_value;
    }

    [Symbol.toPrimitive](hint: string): number | string
    {
        if (hint === "string")
           return this.#_value.toString();

  
        return this.#_value;
    }

    get [Symbol.toStringTag](): string
    {
        return this.#_value.toString()
    } 
};



// $_xt_Int32.prototype.valueOf = function()
// {
//     return this;
// }


//const a: 

// global.$__xt_Int32Constructor = class
// {
//     constructor(value: number)
//     {
//         this.#_value = value;
//     }

//     #_value: number;


//     valueOf(): number
//     {
//         return this.#_value;
//     }

//     [Symbol.toStringTag]: "$_xt_Int32"
// };


// Seals object
//Object.seal(global.$_XT);

//const a = new $_xt_int32()


