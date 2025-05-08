import { XT } from "../../../src/index";


describe("Object library", () => 
{
    test("getValue", () =>
    {
        const objTest: any = {
            prop1: "value1",
            prop2: "value2",
            prop3:
            {
                prop4: "value4",
                prop5: "value5"
            }
        }

        expect( XT.Object.getValue(objTest, "prop1"))
        .toBe("value1");

        expect( XT.Object.getValue(objTest, "prop2"))
        .toBe("value2");

        expect( XT.Object.getValue(objTest, "prop3"))
        .toBeInstanceOf(Object);

        expect( XT.Object.getValue(objTest, "prop3.prop4"))
        .toBe("value4");

        expect( XT.Object.getValue(objTest, "prop3.prop5"))
        .toBe("value5");

        expect( XT.Object.getValue(objTest, "prop3.prop15"))
        .toBeUndefined();
    });     



    test("setValue", () =>
    {
        const objTest: any = {};

        XT.Object.setValue(objTest, "prop1", "v1")

        console.log(objTest);
        expect (objTest.prop1)
        .toBe("v1");

        XT.Object.setValue(objTest, "prop2", "v2")
        expect (objTest.prop2)
        .toBe("v2");

        XT.Object.setValue(objTest, "prop3", "v3")
        expect (objTest.prop3)
        .toBe("v3");

        XT.Object.setValue(objTest, "prop3", "v3.1")
        expect (objTest.prop3)
        .toBe("v3.1");

        XT.Object.setValue(objTest, "prop4.prop5", "v5", true)
        expect (objTest.prop4.prop5)
        .toBe("v5");

        XT.Object.setValue(objTest, "prop6.prop7.prop8.prop9", {prop10: "v10"}, true)
        expect (objTest.prop6.prop7.prop8.prop9.prop10)
        .toBe("v10");

        expect (XT.Object.setValue(objTest, "prop20.prop21", "v5"))
        .toBe(false);

    });    
});