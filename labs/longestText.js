/*
Ushna Khalid
SCTM-S3001-301
*/

const fs = require('fs');
let data = fs.readFileSync('labs/testtext1.txt'); //PUT FILE NAME HERE
data = String(data);

/*
-------------------------------------------
*/


//Function
var x = 0;
var index = 0;
var longWord

console.log(data[0])


var dataarray = data.split(' ');

console.log(dataarray[0])

for (var i = 0; i < dataarray.length; i++) {
    if (dataarray[i].length > x) {
        x = dataarray[i].length;
        index = i;
        longWord = dataarray[i];
    }
}



console.log("The longest word here is " + longWord)
console.log("The index of this word in the array is " + index)