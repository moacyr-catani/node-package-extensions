interface $_XT 
{
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings.
     */
    //toString(radix?: number): string;

    /** Returns a string representation appropriate to the host environment's current locale. */
    //toLocaleString(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;

    /** Returns the primitive value of the specified object. */
    //valueOf(): bigint;

    assert(): boolean;

    readonly [Symbol.toStringTag]: "$_XT";
}



// interface $_Constructor {
//     //(value: bigint | boolean | number | string): bigint;
//     readonly prototype: $_XT ;

//     //assert(): boolean;


//     /**
//      * Interprets the low bits of a BigInt as a 2's-complement signed integer.
//      * All higher bits are discarded.
//      * @param bits The number of low bits to use
//      * @param int The BigInt whose bits to extract
//      */
//     //asIntN(bits: number, int: bigint): bigint;
//     /**
//      * Interprets the low bits of a BigInt as an unsigned integer.
//      * All higher bits are discarded.
//      * @param bits The number of low bits to use
//      * @param int The BigInt whose bits to extract
//      */
//     //asUintN(bits: number, int: bigint): bigint;
// }



//var $_XT: $_Constructor;
declare var $_XT: $_XT;
