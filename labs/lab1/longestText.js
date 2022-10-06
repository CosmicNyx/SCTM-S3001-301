/*
Ushna Khalid
SCTM-S3001-301
*/

const fs = require('fs');
let data = fs.readFileSync('labs/lab1/testtext1.txt'); //PUT FILE NAME HERE
data = String(data);

//split the words
var dataarray = data.split(' ');

/*
-------------------------------------------
*/


//var
var x = dataarray[0].length;
var index = 0;
var longWord;


//longer string
for (var i = 0; i < dataarray.length; i++) {
    if (dataarray[i].length > x) {
        console.log(x)
        x = dataarray[i].length;
        index = i;
        longWord = dataarray[i];
    }
}



console.log("The longest word here is " + longWord)
console.log("The index of this word in the array is " + index)