import "../../../src/extensions/index";
import { StringExtractionResult } from "../../../src/extensions/index";




describe("String extensions", () => 
{

    test(".$_extractBetween", () =>
    {
        let result: StringExtractionResult = "--abcd--".$_extractBetween("--", undefined)

        expect(result.value)
        .toBe("abcd--");
 
        expect(result.start)
        .toBe(2);

        expect(result.end)
        .toBe(8);

        expect("start abcd end".$_extractBetween("start", "end", true)?.value)
        .toBe("abcd");

        expect("start abcd end".$_extractBetween(undefined, "end", true)?.value)
        .toBe("start abcd");

        expect("start\nabcd\nend".$_extractBetween("start", "end", true)?.value)
        .toBe("abcd");

        expect("start abcd end".$_extractBetween("start", "end", false)?.value)
        .toBe(" abcd ");

        expect("(abcd)".$_extractBetween("(", ")")?.value)
        .toBe("abcd");

        expect("bb 123456 aa]})".$_extractBetween( ["aa", "bb", "cc"], ["aa", "bb", "cc"], true)?.value)
        .toBe("123456");

        expect("(abcd)".$_extractBetween( ["(", "[", "{"], [")", "]", "}"])?.value)
        .toBe("abcd");

        expect("[abcd]".$_extractBetween( ["(", "[", "{"], [")", "]", "}"])?.value)
        .toBe("abcd");

        expect("CREATE PROCEDURE proc_test \n \r AS]".$_extractBetween("PROCEDURE", "", true).value)
        .toBe("proc_test");

        expect("CREATE PROCEDURE proc_test AS]".$_extractBetween("PROCEDURE", "", true).value)
        .toBe("proc_test");

        expect("start\nabcd\nend".$_extractBetween("begin", "finish").value)
        .toBeUndefined();

        const procedure: string = 
        `CREATE PROCEDURE sp_Test
        AS
        SELECT * FROM [TABLE]`
         
        const procName  = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
        const statement = procedure.$_extractBetween("AS", undefined, true).value;

        expect(procName)
        .toBe("sp_Test");

        expect(statement)
        .toBe("SELECT * FROM [TABLE]");
    });     



    test(".$_fromBase64Url", () =>
    {
        expect("dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw".$_fromBase64Url())
        .toBe("the brown fox jumps over the lazy dog");
    });      



    test(".$_isInt -> valid", () =>    
    {
        expect("12".$_isInt())
        .toBe(true);

        expect("-12".$_isInt())
        .toBe(true);

        expect("1234567890123".$_isInt())
        .toBe(true);

        expect("1,234,567,890,123".$_isInt(","))
        .toBe(true);

        expect("1.234.567.890.123".$_isInt("."))
        .toBe(true);

        expect("123".$_isInt("."))
        .toBe(true);

    });                                                 



    test(".$_isInt -> invalid", () =>
    {
        expect("error".$_isInt())
        .toBe(false);

        expect("0x1".$_isInt())
        .toBe(false);

        expect("123.12".$_isInt())
        .toBe(false);

        expect("1.0234.567.890.123".$_isInt("."))
        .toBe(false);

        expect( () =>"1.0234.567.890.123".$_isInt(".."))
        .toThrow();

    });                                                 



    test(".$_isNumber -> valid", () =>
    {
        expect("12".$_isNumber())
        .toBe(true);

        expect("-12".$_isNumber())
        .toBe(true);

        expect("1234567890123".$_isNumber())
        .toBe(true);

        expect("1.12345".$_isNumber())
        .toBe(true);

        expect("1,234,567,890,123.0012".$_isNumber(",", "."))
        .toBe(true);
    });                                                 



    test(".$_isNumber -> invalid", () =>
    {
        expect("12jhghgf".$_isNumber())
        .toBe(false);

        expect("".$_isNumber())
        .toBe(false);

        expect("1,1".$_isNumber())
        .toBe(false);

        expect("0x01".$_isNumber())
        .toBe(false);

        expect("123e10".$_isNumber())
        .toBe(false);

        expect( () => "1,234,567,890,123.0012".$_isNumber(",,", "."))
        .toThrow();

        expect( () => "1,234,567,890,123.0012".$_isNumber(",", ".."))
        .toThrow();

    });                                                 


    
    test(".$_removeSequentialLatinLetters", () =>
    {
        expect("immediately".$_removeSequentialLatinLetters())
        .toBe("imediately");


        expect("AA cc 1234 zz Zz".$_removeSequentialLatinLetters())
        .toBe("A c 1234 z Z");
    });      



    test(".$_replace", () =>
    {
        expect("the brown fox jumps over the lazy dog".$_replace("brown", "red"))
        .toBe("the red fox jumps over the lazy dog");

        expect("the brown fox jumps over the lazy dog".$_replace(["brown", "over", "lazy"], "?"))
        .toBe("the ? fox jumps ? the ? dog");

        expect("the brown fox jumps over the lazy dog".$_replace(["Brown", "over", "Lazy"], "?"))
        .toBe("the brown fox jumps ? the lazy dog");

        expect("the brown fox jumps over the lazy dog".$_replace(["Brown", "over", "Lazy"], "?", true))
        .toBe("the ? fox jumps ? the ? dog");
    });                                                 



    test(".$_toBase64Url", () =>
    {
        expect("the brown fox jumps over the lazy dog".$_toBase64Url())
        .toBe("dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw");
    });      



    test(".$_toBasicLatinLetters", () =>
    {
        expect("á ô ç ñ".$_toBasicLatinLetters())
        .toBe("a o c n");

        expect("É óbvio, cañas 158 ça vá".$_toBasicLatinLetters())
        .toBe("E obvio, canas 158 ca va");
    });                                                 



    test(".$_toDate -> valid", () =>
    {
        let dtmResult: any;

        
        // Date
        dtmResult = "2024-02-29".$_toDate("YYYY-MM-DD");

        expect(dtmResult)
        .toBeInstanceOf(Date);

        expect( (<Date>dtmResult).getFullYear() )
        .toBe(2024);

        expect( (<Date>dtmResult).getMonth() )
        .toBe(1);

        expect( (<Date>dtmResult).getDate() )
        .toBe(29);

        expect( (<Date>dtmResult).getHours() )
        .toBe(0);

        expect( (<Date>dtmResult).getMinutes() )
        .toBe(0);

        expect( (<Date>dtmResult).getSeconds() )
        .toBe(0);

        expect( (<Date>dtmResult).getMilliseconds() )
        .toBe(0);



        // Datetime
        dtmResult = "2052-01-25 12:35:02:858".$_toDate("YYYY-MM-DD hh:mm:ss:nnn");

        expect(dtmResult)
        .toBeInstanceOf(Date);

        expect( (<Date>dtmResult).getFullYear() )
        .toBe(2052);

        expect( (<Date>dtmResult).getMonth() )
        .toBe(0);

        expect( (<Date>dtmResult).getDate() )
        .toBe(25);

        expect( (<Date>dtmResult).getHours() )
        .toBe(12);

        expect( (<Date>dtmResult).getMinutes() )
        .toBe(35);

        expect( (<Date>dtmResult).getSeconds() )
        .toBe(2);

        expect( (<Date>dtmResult).getMilliseconds() )
        .toBe(858);



        // Datetime
        dtmResult = "2052-01-25T12:35:02:858Z".$_toDate("YYYY-MM-DD hh:mm:ss:nnn");

        expect(dtmResult)
        .toBeInstanceOf(Date);

        expect( (<Date>dtmResult).getFullYear() )
        .toBe(2052);

        expect( (<Date>dtmResult).getMonth() )
        .toBe(0);

        expect( (<Date>dtmResult).getDate() )
        .toBe(25);

        expect( (<Date>dtmResult).getHours() )
        .toBe(12);

        expect( (<Date>dtmResult).getMinutes() )
        .toBe(35);

        expect( (<Date>dtmResult).getSeconds() )
        .toBe(2);

        expect( (<Date>dtmResult).getMilliseconds() )
        .toBe(858);



        // Datetime - Custom format
        dtmResult = "16/03/1980 08:30".$_toDate("DD/MM/YYYY hh:mm");

        expect(dtmResult)
        .toBeInstanceOf(Date);

        expect( (<Date>dtmResult).getFullYear() )
        .toBe(1980);

        expect( (<Date>dtmResult).getMonth() )
        .toBe(2);

        expect( (<Date>dtmResult).getDate() )
        .toBe(16);

        expect( (<Date>dtmResult).getHours() )
        .toBe(8);

        expect( (<Date>dtmResult).getMinutes() )
        .toBe(30);
    });                                                 



    test(".$_toDate -> invalid", () =>
    {
        expect("2023-13-24".$_toDate("YYYY-MM-DD"))
        .toBeUndefined();

        expect("2023-02-29".$_toDate("YYYY-MM-DD"))
        .toBeUndefined();

        expect("02-29".$_toDate("YYYY-MM-DD"))
        .toBeUndefined();

        expect("02-29".$_toDate("MM-DD"))
        .toBeUndefined();

        expect("vwxyz".$_toDate("YYYY-MM-DD"))
        .toBeUndefined();

        expect("2023-11-24 25:30:30:123".$_toDate("YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();

        expect("2023-11-24 23:65:30:123".$_toDate("YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();

        expect("2023-11-24 23:25:72:123".$_toDate("YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();
    });                                                 



    test(".$_toDateString -> valid", () =>
    {
        expect("2023-09-24".$_toDateString("YYYY-MM-DD", "DD/MM/YYYY"))
        .toBe("24/09/2023");

        expect("20230924".$_toDateString("YYYYMMDD", "DD/MM/YYYY"))
        .toBe("24/09/2023");

        expect("20230905".$_toDateString("YYYYDDMM", "DD/MM/YYYY"))
        .toBe("09/05/2023");

        expect("01-02-2015".$_toDateString("DD-MM-YYYY", "YYYY-MM-DD"))
        .toBe("2015-02-01");

        expect("01-02-2015".$_toDateString("DD-MM-YYYY", "YYYYMMDD"))
        .toBe("20150201");

        expect("2010-05-25T01:02:03:547".$_toDateString("YYYY-MM-DD hh:mm:ss:nnn", "dia DD de MM de YYYY, às hh horas, mm minutos e ss segundos"))
        .toBe("dia 25 de 05 de 2010, às 01 horas, 02 minutos e 03 segundos");
    });                                                 



    test(".$_toDateString -> invalid", () =>
    {
        expect("2023-13-24".$_toDateString("YYYY-MM-DD", "DD/MM/YY"))
        .toBeUndefined();

        expect("2023-02-29".$_toDateString("YYYY-MM-DD", "DDMMYYYY"))
        .toBeUndefined();

        expect("02-29".$_toDateString("MM-DD", "DDMM"))
        .toBeUndefined();

        expect("02-29".$_toDateString("MM-DD", "MMDD"))
        .toBeUndefined();

        expect("vwxyz".$_toDateString("YYYY-MM-DD", "YYYY"))
        .toBeUndefined();
    });                                                 



    test(".$_toDecimal -> valid", () =>
    {
        expect("1".$_toDecimal())
        .toBe(1.0);

        expect("-5.123456789".$_toDecimal())
        .toBe(-5.123456789);

        expect("-5,123456789".$_toDecimal(","))
        .toBe(-5.123456789);

        expect("123,456,823.12316".$_toDecimal(".", ","))
        .toBe(123456823.12316);
    });                                                 
    


    test(".$_toDecimal -> invalid", () =>
    {
        expect("1d".$_toDecimal())
        .toBeUndefined();

        expect("-5.123456789fg".$_toDecimal())
        .toBeUndefined();

        expect("rtsd".$_toDecimal())
        .toBeUndefined();
    });                                                 



    test(".$_toInt -> valid", () =>
    {
        expect("1".$_toInt())
        .toBe(1);

        expect("-5123456789".$_toInt())
        .toBe(-5123456789);

        expect("12345682312316".$_toInt())
        .toBe(12345682312316);

        expect("12.345.682.312.316".$_toInt("."))
        .toBe(12345682312316);

        expect("12,345,682,312,316".$_toInt(","))
        .toBe(12345682312316);
    });                                                 



    test(".$_toInt -> invalid", () =>
    {
        expect("1d".$_toInt())
        .toBeUndefined();

        expect("-5.123456789".$_toInt())
        .toBeUndefined();

        expect("rtsd".$_toInt())
        .toBeUndefined();
    });




    test(".$_trim", () =>
    {
        expect("ABCDEF \r \n \r [word] A XY 123456".$_trim([" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("[word]");

        expect("ABCDEF \r \n \r [word] A XY 123456".$_trim([" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "1", "2", "3", "4", "5", "6", "7", "Xy"], true))
        .toBe("[word] A XY");
    });     



    test(".$_trimStart", () =>
    {
        expect("ABCDEF \r \n \r [word] A XY 123456".$_trimStart([" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "XY"]))
        .toBe("[word] A XY 123456");

        expect("ABCDEF \r \n \r [word] 1 XY 123456".$_trimEnd([" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("ABCDEF \r \n \r [word]");

        expect("1 XY 123456".$_trimStart([" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("");

        expect("123456 1 XY".$_trimStart("123456"))
        .toBe(" 1 XY");

    });     



    test(".$_trimEnd", () =>
    {
        expect("ABCDEF \r \n \r [word] A XY 123456".$_trimStart([" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "XY"]))
        .toBe("[word] A XY 123456");

        expect("ABCDEF \r \n \r [word] 1 XY 123456".$_trimEnd([" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("ABCDEF \r \n \r [word]");

        expect("1 XY 123456".$_trimEnd([" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("");

        expect("1 XY 123456".$_trimEnd("123456"))
        .toBe("1 XY ");

    });     
});
