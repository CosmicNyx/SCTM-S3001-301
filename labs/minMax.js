/*
Ushna Khalid
SCTM-S3001-301
*/


const fs = require('fs');
let data = fs.readFileSync('labs/testnumbers1.csv'); //PUT FILE NAME HERE
data = String(data);

//convert csv list to array of strings
let dataarray = data.split(',');
//convert it to a number array
for(let i = 0; i < dataarray.length; i++){
    dataarray[i] = Number(dataarray[i]);
}

/*
-------------------------------------------
*/


//var
var largest = dataarray[0];
var smallest = dataarray[0];
var index = 0;


//Largest num
for (var i = 0; i < dataarray.length; i++) {
    if (largest < dataarray[i] ) {
        largest = dataarray[i];
        index = i;
    }
}
console.log("largest number: " + largest);
console.log("index: " + index);


//smallest num
for (var i = 0; i < dataarray.length; i++) {
    if (smallest > dataarray[i] ) {
        smallest = dataarray[i];
        index = i;
    }
}
console.log("smallest number: " + smallest);
console.log("index " + index);