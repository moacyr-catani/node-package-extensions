
import { IntegerRepresentations } from "../../src";
import "../../src/index";



/*
const intValue:      bigint = <bigint>Number.$_randomInt(8);
const bufValue:      Buffer = <Buffer>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.BufferUInt8);
const strValue36:    string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringBase36);
const strValue64:    string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringBase64);
const strValue64Url: string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringBase64Url);
const strValue2:     string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringBinary);
const strValue10:    string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringDecimal);
const strValue16:    string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringHexadecimal);
const strValue8:     string = <string>Number.$_changeIntegerRepresentation(intValue, IntegerRepresentations.StringOctal);

console.log(bufValue);
console.log(`BigInt:    ${intValue}`);
console.log(`Base36:    ${strValue36}`);
console.log(`Base64:    ${strValue64}`);
console.log(`Base64Url: ${strValue64Url}`); 
console.log(`Binary:    ${strValue2}`);
console.log(`Octal:     ${strValue8}`);
console.log(`Decimal:   ${strValue10}`);
console.log(`Hex:       ${strValue16}`);

console.log(Number.$_changeIntegerRepresentation(bufValue,          IntegerRepresentations.BigInt) );
console.log(Number.$_changeIntegerRepresentation(`0x${strValue16}`, IntegerRepresentations.BigInt) );
console.log(Number.$_changeIntegerRepresentation(`0b${strValue2}`,  IntegerRepresentations.BigInt) );
console.log(Number.$_changeIntegerRepresentation(`0o${strValue8}`,  IntegerRepresentations.BigInt) );
console.log(Number.$_changeIntegerRepresentation(strValue64,        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase64) );
console.log(Number.$_changeIntegerRepresentation(strValue64Url,     IntegerRepresentations.BigInt, IntegerRepresentations.StringBase64Url) );
console.log(Number.$_changeIntegerRepresentation(strValue36,        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
*/


/*
console.log(Number.$_changeIntegerRepresentation("a",          IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("aa",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("aaa",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("ab",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("ac",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("az",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("b",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("bz",        IntegerRepresentations.BigInt, IntegerRepresentations.StringBase36) );


console.log(Number.$_changeIntegerRepresentation("a00",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("a0a",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("aaa",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("ab0",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("ac0",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("az0",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("b00",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("bz0",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
console.log(Number.$_changeIntegerRepresentation("zzz",  IntegerRepresentations.StringBase64Url, IntegerRepresentations.StringBase36) );
*/



const strText:    string = "É teste :/ ù 45684-685546 (023) =+ -%@@ ~l ç][ {}dsdts dsspoika is dfpoij sdpjd dfiojpojpókja spojk" ;
const strTextB64: string = strText.$_toBase64Url();

/*
w4kgdGVzdGUgOi8gw7kgNDU2ODQtNjg1NTQ2ICgwMjMpID0rIC0lQEAgfmwgw6ddWyB7fWRzZHRzIGRzc3BvaWthIGlzIGRmcG9paiBzZHBqZCBkZmlvanBvanDDs2tqYSBzcG9qaw
É teste :/ ù 45684-685546 (023) =+ -%@@ ~l ç][ {}dsdts dsspoika is dfpoij sdpjd dfiojpojpókja spojk
*/


console.log(strTextB64);
console.log(strTextB64.$_fromBase64Url());

console.log
(
    "aAÀáãâäbcddefff gçñóúêÊkë 11 22 33 54654 Á "
    .$_toBasicLatinLetters()
    
    .$_removeSequentialLetters()
);
