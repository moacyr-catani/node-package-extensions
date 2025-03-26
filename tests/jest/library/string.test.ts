import { XT, StringExtractionResult } from "../../../src/index";





describe("String library", () => 
{

    test("extractBetween", () =>
    {
        let result: StringExtractionResult;


        result = XT.String.extractBetween("--abcd--", "--", undefined);
        expect(result.value).toBe("abcd--");
        expect(result.start).toBe(2);
        expect(result.end)  .toBe(8);


        result = XT.String.extractBetween("start abcd end", "start", "end", true);
        expect(result.value).toBe("abcd");
        
        
        result = XT.String.extractBetween("start abcd end", undefined, "end", true);
        expect(result.value).toBe("start abcd");

        // expect( "start abcd end".$_extractBetween(undefined, "end", true)?.value)
        // .toBe("start abcd");

        // expect("start\nabcd\nend".$_extractBetween("start", "end", true)?.value)
        // .toBe("abcd");

        result = XT.String.extractBetween("start abcd end", "start", "end", false);
        expect(result.value).toBe(" abcd ");

        // expect("(abcd)".$_extractBetween("(", ")")?.value)
        // .toBe("abcd");

        // expect("bb 123456 aa]})".$_extractBetween( ["aa", "bb", "cc"], ["aa", "bb", "cc"], true)?.value)
        // .toBe("123456");

        // expect("(abcd)".$_extractBetween( ["(", "[", "{"], [")", "]", "}"])?.value)
        // .toBe("abcd");

        // expect("[abcd]".$_extractBetween( ["(", "[", "{"], [")", "]", "}"])?.value)
        // .toBe("abcd");

        // expect("CREATE PROCEDURE proc_test \n \r AS]".$_extractBetween("PROCEDURE", "", true).value)
        // .toBe("proc_test");

        // expect("CREATE PROCEDURE proc_test AS]".$_extractBetween("PROCEDURE", "", true).value)
        // .toBe("proc_test");

        // expect("start\nabcd\nend".$_extractBetween("begin", "finish").value)
        // .toBeUndefined();

        // const procedure: string = 
        // `CREATE PROCEDURE sp_Test
        // AS
        // SELECT * FROM [TABLE]`
         
        // const procName  = procedure.$_extractBetween(["PROCEDURE", "PROC"], "", true).value;
        // const statement = procedure.$_extractBetween("AS", undefined, true).value;

        // expect(procName)
        // .toBe("sp_Test");

        // expect(statement)
        // .toBe("SELECT * FROM [TABLE]");

        result = XT.String.extractBetween("start abcd end", "end", "start", true);
        expect(result.value).toBeUndefined();
    });     



    test("fromBase64Url", () =>
    {
        expect( XT.String.fromBase64Url("dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw"))
        .toBe("the brown fox jumps over the lazy dog");
    });      



    test("isInt -> valid", () =>    
    {
        expect( XT.String.isInt("12"))
        .toBe(true);

        expect( XT.String.isInt("-12"))
        .toBe(true);

        expect( XT.String.isInt("1234567890123"))
        .toBe(true);

        expect( XT.String.isInt("1,234,567,890,123", ","))
        .toBe(true);

        expect( XT.String.isInt("1.234.567.890.123", "."))
        .toBe(true);

        expect( XT.String.isInt("123", "."))
        .toBe(true);
    });                                                 



    test("isInt -> invalid", () =>
    {
        expect( XT.String.isInt("error") )
        .toBe(false);

        expect( XT.String.isInt("0x1") )
        .toBe(false);

        expect( XT.String.isInt("123.12") )
        .toBe(false);

        expect( XT.String.isInt("1.0234.567.890.123") )
        .toBe(false);

        expect( () => XT.String.isInt("1.0234.567.890.123", ".."))
        .toThrow();
    });                                                 



    test("isNumber -> valid", () =>
    {
        expect( XT.String.isNumber("12"))
        .toBe(true);

        expect( XT.String.isNumber("-12"))
        .toBe(true);

        expect( XT.String.isNumber("1234567890123"))
        .toBe(true);

        expect( XT.String.isNumber("1.12345"))
        .toBe(true);

        expect( XT.String.isNumber("1,234,567,890,123.0012", ",", "."))
        .toBe(true);
    });                                                 



    test("isNumber -> invalid", () =>
    {
        expect( XT.String.isNumber("12jhghgf"))
        .toBe(false);

        expect( XT.String.isNumber(""))
        .toBe(false);

        expect( XT.String.isNumber("1,1"))
        .toBe(false);

        expect( XT.String.isNumber("0x01"))
        .toBe(false);

        expect( XT.String.isNumber("123e10"))
        .toBe(false);

        expect( () => XT.String.isNumber("1,234,567,890,123.0012", ",,", "."))
        .toThrow();

        expect( () => XT.String.isNumber("1,234,567,890,123.0012", ",", ".."))
        .toThrow();
    });                                                 


    
    test("removeSequentialLatinLetters", () =>
    {
        expect( XT.String.removeSequentialLatinLetters("immediately"))
        .toBe("imediately");

        expect( XT.String.removeSequentialLatinLetters("AA cc 1234 zz Zz"))
        .toBe("A c 1234 z Z");
    });      



    test("replace", () =>
    {
        expect( XT.String.replace("the brown fox jumps over the lazy dog", "brown", "red"))
        .toBe("the red fox jumps over the lazy dog");

        expect( XT.String.replace("the brown fox jumps over the lazy dog", ["brown", "over", "lazy"], "?"))
        .toBe("the ? fox jumps ? the ? dog");

        expect( XT.String.replace("the brown fox jumps over the lazy dog", ["Brown", "over", "Lazy"], "?"))
        .toBe("the brown fox jumps ? the lazy dog");

        expect( XT.String.replace("the brown fox jumps over the lazy dog", ["Brown", "over", "Lazy"], "?", true))
        .toBe("the ? fox jumps ? the ? dog");
    });                                                 



    test("toBase64Url", () =>
    {
        expect( XT.String.toBase64Url("the brown fox jumps over the lazy dog"))
        .toBe("dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw");
    });      



    test("toBasicLatinLetters", () =>
    {
        expect( XT.String.toBasicLatinLetters("á ô ç ñ"))
        .toBe("a o c n");

        expect( XT.String.toBasicLatinLetters("É óbvio, cañas 158 ça vá"))
        .toBe("E obvio, canas 158 ca va");
    });                                                 



    test("toDate -> valid", () =>
    {
        let dtmResult: Date | undefined;

        
        // Date
        dtmResult = XT.String.toDate("2024-02-29", "YYYY-MM-DD");

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



       // Date
        dtmResult = XT.String.toDate("20-02-29", "YY-MM-DD");

        expect(dtmResult)
        .toBeInstanceOf(Date);

        expect( (<Date>dtmResult).getFullYear() )
        .toBe(2020);

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
        dtmResult = XT.String.toDate("2052-01-25 12:35:02:858", "YYYY-MM-DD hh:mm:ss:nnn");

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
        dtmResult = XT.String.toDate("2052-01-25T12:35:02:858Z", "YYYY-MM-DD hh:mm:ss:nnn");

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
        dtmResult = XT.String.toDate("16/03/1980 08:30", "DD/MM/YYYY hh:mm");

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



    test("toDate -> invalid", () =>
    {
        expect( XT.String.toDate("2023-13-24", "YYYY-MM-DD"))
        .toBeUndefined();

        expect( XT.String.toDate("2023-02-29", "YYYY-MM-DD"))
        .toBeUndefined();

        expect( XT.String.toDate("02-29", "YYYY-MM-DD"))
        .toBeUndefined();

        expect( XT.String.toDate("02-29", "MM-DD"))
        .toBeUndefined();

        expect( XT.String.toDate("vwxyz", "YYYY-MM-DD"))
        .toBeUndefined();

        expect( XT.String.toDate("2023-11-24 25:30:30:123", "YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();

        expect( XT.String.toDate("2023-11-24 23:65:30:123", "YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();

        expect( XT.String.toDate("2023-11-24 23:25:72:123", "YYYY-MM-DD hh:mm:ss:nnn"))
        .toBeUndefined();
    });                                                 



    test("toDateString -> valid", () =>
    {
        expect( XT.String.toDateString("2023-09-24", "YYYY-MM-DD", "DD/MM/YYYY"))
        .toBe("24/09/2023");

        expect( XT.String.toDateString("20230924", "YYYYMMDD", "DD/MM/YYYY"))
        .toBe("24/09/2023");

        expect( XT.String.toDateString("20230905", "YYYYDDMM", "DD/MM/YYYY"))
        .toBe("09/05/2023");

        expect( XT.String.toDateString("01-02-2015", "DD-MM-YYYY", "YYYY-MM-DD"))
        .toBe("2015-02-01");

        expect( XT.String.toDateString("01-02-2015", "DD-MM-YYYY", "YYYYMMDD"))
        .toBe("20150201");

        expect( XT.String.toDateString("2010-05-25T01:02:03:547", "YYYY-MM-DD hh:mm:ss:nnn", "dia DD de MM de YYYY, às hh horas, mm minutos e ss segundos"))
        .toBe("dia 25 de 05 de 2010, às 01 horas, 02 minutos e 03 segundos");
    });                                                 



    test("toDateString -> invalid", () =>
    {
        expect( XT.String.toDateString("2023-13-24", "YYYY-MM-DD", "DD/MM/YY"))
        .toBeUndefined();

        expect( XT.String.toDateString("2023-02-29", "YYYY-MM-DD", "DDMMYYYY"))
        .toBeUndefined();

        expect( XT.String.toDateString("02-29", "MM-DD", "DDMM"))
        .toBeUndefined();

        expect( XT.String.toDateString("02-29", "MM-DD", "MMDD"))
        .toBeUndefined();

        expect( XT.String.toDateString("vwxyz", "YYYY-MM-DD", "YYYY"))
        .toBeUndefined();
    });                                                 



    test("toDecimal -> valid", () =>
    {
        expect( XT.String.toDecimal("1"))
        .toBe(1.0);

        expect( XT.String.toDecimal("-5.123456789"))
        .toBe(-5.123456789);

        expect( XT.String.toDecimal("-5,123456789", ","))
        .toBe(-5.123456789);

        expect( XT.String.toDecimal("123,456,823.12316", ".", ","))
        .toBe(123456823.12316);
    });                                                 
    


    test("toDecimal -> invalid", () =>
    {
        expect( XT.String.toDecimal("1d"))
        .toBeUndefined();

        expect( XT.String.toDecimal("-5.123456789fg"))
        .toBeUndefined();

        expect( XT.String.toDecimal("rtsd"))
        .toBeUndefined();
    });                                                 



    test("toInt -> valid", () =>
    {
        expect( XT.String.toInt("1"))
        .toBe(1);

        expect( XT.String.toInt("-5123456789"))
        .toBe(-5123456789);

        expect( XT.String.toInt("12345682312316"))
        .toBe(12345682312316);

        expect( XT.String.toInt("12.345.682.312.316", ".") )
        .toBe(12345682312316);

        expect( XT.String.toInt("12,345,682,312,316", ","))
        .toBe(12345682312316);
    });                                                 



    test("toInt -> invalid", () =>
    {
        expect( XT.String.toInt("1d"))
        .toBeUndefined();

        expect( XT.String.toInt("-5.123456789"))
        .toBeUndefined();

        expect( XT.String.toInt("rtsd"))
        .toBeUndefined();
    });




    test("trim", () =>
    {
        expect( XT.String.trim("ABCDEF \r \n \r [word] A XY 123456", [" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("[word]");

        expect( XT.String.trim("ABCDEF \r \n \r [word] A XY 123456", [" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "1", "2", "3", "4", "5", "6", "7", "Xy"], true))
        .toBe("[word] A XY");
    });     




    test("trimEnd", () =>
    {
        expect( XT.String.trimEnd("ABCDEF \r \n \r [word] A XY 123456", [" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "XY"]))
        .toBe("ABCDEF \r \n \r [word] A XY 123456");

        expect( XT.String.trimEnd("ABCDEF \r \n \r [word] 1 XY 123456", [" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("ABCDEF \r \n \r [word]");

        expect( XT.String.trimEnd("1 XY 123456", [" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("");

        expect( XT.String.trimEnd("1 XY 123456", "123456"))
        .toBe("1 XY ");
    });     




    test("trimStart", () =>
    {
        expect( XT.String.trimStart("ABCDEF \r \n \r [word] A XY 123456", [" ", "\r", "\n", "\t", "A", "B", "C", "D", "E", "F", "G", "XY"]))
        .toBe("[word] A XY 123456");

        expect( XT.String.trimStart("ABCDEF \r \n \r [word] 1 XY 123456", [" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("ABCDEF \r \n \r [word] 1 XY 123456");

        expect( XT.String.trimStart("1 XY 123456", [" ", "\r", "\n", "\t", "1", "2", "3", "4", "5", "6", "7", "XY"]))
        .toBe("");

        expect( XT.String.trimStart("123456 1 XY", "123456"))
        .toBe(" 1 XY");
    });     
});