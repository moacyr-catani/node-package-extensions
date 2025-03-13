import "../src/index.js";

// type MyTuple1 = [number, number] & {
//     [key in 0|1] } & {
//     readonly 0: number;
//     readonly 1: number;
//     readonly length: 2;
//     [Symbol.iterator](): IterableIterator<number>;
// };


// type MyTuple = Readonly<Pick< [number, number], "length" | 0 | 1 | typeof Symbol.iterator>>
// const myTuple: MyTuple = [0,0];

// myTuple[2] = 1

// const [a, b, c] = myTuple;




// const A = [
// //             ⮦ is the 'index'
//               [1,  "a1"], 
//               [2,  "a2"], 
//               [10, "a3"]
// //                  ⮤ is the "value"    
//           ];
// const B = [
//               [1,  "b1"], 
//               [8,  "b2"], 
//               [10, "b3"]
//           ];


// function MergeLists(listA: Array<any>, 
//                     listB: Array<any>): Array<any>
// {
//     const arrRet:    Array<any> = [];
//     let currentPosA: number = 0,
//         currentPosB: number = 0,
//         currentPosC: number = 0,
//         currentIdxA: number = listA[currentPosA][0], // Index of first element of list A
//         currentIdxB: number = listB[currentPosB][0], // Index of first element of list B
//         currentIdxC: number = 0,
//         nextPosA:    number = 0,
//         nextPosB:    number = 0;



//     while (true)
//     {
//         currentIdxC = Math.min(currentIdxA, currentIdxB);
//         arrRet[currentPosC] = [currentIdxC, 
//                                   listA[currentPosA][1], 
//                                   listB[currentPosB][1]];



//         if (currentPosA < listA.length - 1)
//             nextPosA = currentPosA + 1;

//         if (currentPosB < listB.length - 1)
//             nextPosB = currentPosB + 1;

//         // Increment positions
//         currentPosC++;

//         if (listA[nextPosA][0] < listB[nextPosB][0])
//             currentPosA++;
//         else if (listA[nextPosA][0] > listB[nextPosB][0])
//             currentPosB++;
//         else
//         {
//             currentPosA++;
//             currentPosB++;
//         }


//         // Check bounds
//         if (currentPosA >= listA.length ||
//             currentPosB >= listB.length)
//         {
//             break;   
//         }

//         // Get tuples indexes
//         currentIdxA = listA[currentPosA][0];
//         currentIdxB = listB[currentPosA][0];
//     }



//     return arrRet;
// }



// const listC = MergeLists(A, B);

// console.log(listC);



//console.log( "aa 12345 cc".replace ( /(?<=aa|bb|cc).*?(?=aa|bb|cc)/isgd, ""));
const arrExec: RegExpMatchArray | null = /(?<=aa|bb|cc).*?(?=aa|bb|cc)/isgd.exec("bb 12345 cc");

console.log(arrExec);
//dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==
//dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw
console.log( "the brown fox jumps over the lazy dog".$_toBase64Url());

//const testw = /^-?\d+$/.test("-12");
//const testw = /^\d{1,3}(,\d{3})*(\.\d+)?$/.test(",000");
//console.log(testw)