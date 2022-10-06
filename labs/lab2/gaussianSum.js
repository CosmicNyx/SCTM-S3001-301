/*
Ushna Khalid
SCTM-S3001-301
*/


//--- GUASSIAN SUM-----

const fs = require('fs');
let data = fs.readFileSync('labs/lab2/guassianSum.txt'); //PUT FILE NAME HERE
data = String(data);

//convert txt list to array of strings
let dataarray = data.split(',');
//convert it to a number array
for(let i = 0; i < dataarray.length; i++){
    dataarray[i] = Number(dataarray[i]);
}

// console.log(dataarray)


guassianSum(dataarray)

function guassianSum (w){
var count = 0;
for(let i= 0; i<data;i++){
    for(let j=i;j<data;j++){
        count++;
    }
}
return count;
}

console.log(guassianSum())