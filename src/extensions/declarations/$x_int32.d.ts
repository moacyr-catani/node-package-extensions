interface $x_Int32
{
    /** Returns the primitive value of the specified object. */
    valueOf(): number;


    readonly [Symbol.toStringTag]: string;
    [Symbol.toPrimitive](hint?: string): number | string;
}



interface $x_Int32Constructor {
    //(value: bigint | boolean | number | string): $_xt_Int32;
    new (value: number): $x_Int32;
    readonly prototype: $x_Int32 ;

    //assert(): boolean;


    static isValid(value: string | number | bigint): boolean;

    /**
     * Interprets the low bits of a BigInt as a 2's-complement signed integer.
     * All higher bits are discarded.
     * @param bits The number of low bits to use
     * @param int The BigInt whose bits to extract
     */
    //asIntN(bits: number, int: bigint): bigint;
    /**
     * Interprets the low bits of a BigInt as an unsigned integer.
     * All higher bits are discarded.
     * @param bits The number of low bits to use
     * @param int The BigInt whose bits to extract
     */
    //asUintN(bits: number, int: bigint): bigint;
}




declare var $x_Int32: $x_Int32Constructor;