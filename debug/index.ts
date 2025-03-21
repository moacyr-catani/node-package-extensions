import { XT } from "../src/index.js";




// const strA: string = `
// CREATE PROC sp_Teste
//     @Param1 int
// AS
//     SELECT *
//     FROM [TABLE]
//     WHERE [field1] = @Param1;
// `;


// const strProcName:  string = XT.String.extractBetween(strA, "PROC", "", true).value!;
// const strProcName2: string = XT.String.extractBetween(strA, "PROC", ["\n", "\r", "\t", " "]).value!;

// const strParams:    string = XT.String.extractBetween(strA, strProcName, "AS", true).value!;

// console.log(strProcName, strProcName2, strParams);



// const objA: {} = {
//     A: "propA",
//     C: "propC"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// };


// const strA: string = XT.String.toBase64Url(JSON.stringify(objA));
// const strC: string = XT.String.fromBase64Url(strA);

// console.log(strA, strC);


import { ParsedDate } from "./../src/common/index.js";



const objParsed: ParsedDate = new ParsedDate("2024-10-01T10:11:52.123 PM+02:00", 
                                             "YYYY-MM-DD hh:mm:ss:nnn ttOFFSET",
                                             XT.String);

console.log(objParsed);