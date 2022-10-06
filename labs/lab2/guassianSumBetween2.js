/*
Ushna Khalid
SCTM-S3001-301
*/


//--- GUASSIAN SUM-----

const fs = require('fs');
let data = fs.readFileSync('labs/lab2/gs2.txt'); //PUT FILE NAME HERE
data = String(data);

//convert txt list to array of strings
let dataarray = data.split(',');
//convert it to a number array
for (let i = 0; i < dataarray.length; i++) {
    dataarray[i] = Number(dataarray[i]);
}

console.log(dataarray)



///// algorythmmm

// guassianSum(dataarray)

// function guassianSum() {
//     var numDif = 0;

//     var firstNum = dataarray[0];
//     var secondNum = dataarray[1];

//     for (let i = firstNum - 1; i < secondNum; i++) {
//         numDif++
//     }

//     var sum = (firstNum + secondNum) * (numDif / 2);

//     return sum;
// }


var firstNum = dataarray[0];
var secondNum = dataarray[1];

var numDif = (secondNum - firstNum) + 1
var sum = (firstNum + secondNum) * (numDif / 2);

console.log(sum())



// console.log("NAN; "+isNaN(dataarray))