

// Need to use 'require' to add extensions
//require("../../src/index.ts");
import "../../src/index.ts";
import { StringExtractionResult } from "../../src";



const strText:   string = "CREATE PROCEDURE sp_Teste @id INT, @nome VARCHAR AS SELECT * FROM table;";

const objName:   StringExtractionResult | undefined = strText.$_extractBetween("PROCEDURE",    "",        true);
const objParams: StringExtractionResult | undefined = strText.$_extractBetween(objName?.value, "AS",      true);
const objStmt:   StringExtractionResult | undefined = strText.$_extractBetween("AS",           undefined, true);

console.log(objName);
console.log(objParams);
console.log(objStmt);

console.log(objParams?.value.$_trim( ["@", "\r", "\n", "\t", "(", ")" ] ));

console.log( "--++?+--".$_trim(["-", "+", "?"]));


