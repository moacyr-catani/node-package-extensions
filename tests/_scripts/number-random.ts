import "../../src/index.ts";
import { IntegerRepresentations } from "../../src/number.ts";


const arrTimes:      Array<number> = [];
const arrVelocities: Array<number> = [];
const arrCollisions: Array<number> = [];
const intTests:  number = 1;
const intQty:    number = 20;
const intBytes:  number = 8;


for (let intTest = 0; intTest < intTests; intTest++)
{
    const tsBegin: number        = Date.now();
    const arrInts: Array<any> = [];


    for (let intA = 0; intA < intQty; intA++)
    {
        const intNumber: bigint = <bigint>Number.$_randomInt(intBytes, IntegerRepresentations.StringBase36);
        arrInts.push(intNumber);
        console.log(intNumber);
    }


    const tsEnd: number = Date.now();
    const intMS: number = (tsEnd - tsBegin);
    const arruniqueInts = [...new Set(arrInts)];

    arrTimes[intTest]      = (intMS / 1000);
    arrVelocities[intTest] = Math.round(intQty / (intMS / 1000));
    arrCollisions[intTest] = intQty - arruniqueInts.length;
}

console.log (`avg time: ${ arrTimes.     reduce((a, b) => a + b, 0) / intTests}`);
console.log (`avg vel:  ${ arrVelocities.reduce((a, b) => a + b, 0) / intTests}`);
console.log (`avg col:  ${ arrCollisions.reduce((a, b) => a + b, 0) / intTests}`);


/*
method 1 (200.000 ints)

          4           8           12          16         32
avg time: 1.2279      1.275       1.2309      1.3418     1.3381
avg vel:  164447.2    157742.6    163223.9    149624.4   150355.6
avg col:  4.8         0           0           0          0



method 2 (200.000 ints)

          4           8           12          16         32
avg time: 0.7302      1.1863      1.9779      2.2541     4.1986
avg vel:  276055.1    169268.5    102931.5    92130.2    47878
avg col:  5           0           0           0          0

*/