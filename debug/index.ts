import { XT } from "../src/index.js";
//import { IntegerRepresentations, XT } from "../src/index.js";


        // Object with array property
        const objTest: any = {
            prop1: "value1",
            prop2: "value2",
            prop3:
            [
                {
                    id: "id1",
                    subid: "subid1",
                    prop5: "value5",
                    prop6: "value6"
                },
                {
                    id: "id2",
                    subid: "subid2",
                    prop5: "new value5",
                    prop6: "value6"
                }
            ]
        }


        const objTest2: any = XT.Object.getValue(objTest, "prop3");
        console.log(objTest2);

        
// const objTest: any = {};

// XT.Object.setValue(objTest, "prop1.prop2", "v1", true)


//XT.Assert.decimal("0,1", ",");
//XT.String.toBigInt("12,345,682,312,316,545,545,555", ".")

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



// const nm = XT.Number.changeIntegerRepresentation("C8YU-qhy3Ebv3z8aEw", 
//                                       IntegerRepresentations.Number,
//                                       IntegerRepresentations.StringBase64Url)

// console.log(nm);
/*

import { ParsedDate } from "./../src/common/index.js";



const objParsed: ParsedDate = new ParsedDate("2024-10-01T10:11:52.123 PM+02:00", 
                                             "YYYY-MM-DD hh:mm:ss:nnn ttOFFSET",
                                             XT.String);

const objParsed2: ParsedDate = new ParsedDate("10/31/2000 10:25 pm", 
                                              "MM/DD/YYYY hh:mm tt",
                                             XT.String);

const strParsed3: string|undefined =  XT.String.toDateString("2023-09-24", "YYYY-MM-DD", "DD/MM/YYYY")

const dtmResult = XT.String.toDate("2052-01-25 12:35:02:858", "YYYY-MM-DD hh:mm:ss:nnn");

const dtmResult2 = XT.String.toDateString("vwxyz", "YYYY-MM-DD", "YYYY"); //  XT.String.toDate("02-29", "MM-DD")

const dtmResult3 = XT.String.toDate("2024-02-29", "YYYY-MM-DD");


 console.log(objParsed);
 console.log(objParsed.toStringISO());

 console.log(objParsed2.toStringISO());

 console.log(strParsed3);

 console.log(dtmResult);
 console.log(dtmResult2);
 console.log(dtmResult3);
 */