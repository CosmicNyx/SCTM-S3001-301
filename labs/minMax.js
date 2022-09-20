const fs = require('fs');
let data = fs.readFileSync('labs/testnumbers1.csv');
data = String(data);

//convert csv list to array of strings
let dataarray = data.split(',');
//convert it to a number array
for(let i = 0; i<dataarray.length; i++){
    dataarray[i] = Number(dataarray[i]);
}

// console.log(dataarray.length)

//var
var largest, smallest = dataarray[0];
var largeIndex = 0;
var smallIndex = 0;



//Largest num
for (var i = 0; i < dataarray.length; i++) {
    if (largest < dataarray[i] ) {
        largest = dataarray[i];
        largeIndex = i;
    }
}
console.log("Largest " + largest);
console.log("index " + largeIndex);


//smallest num
for (var i = 0; i < dataarray.length; i++) {
    if (smallest > dataarray[i] ) {
        smallest = dataarray[i];
        smallIndex = i;
    }
}
console.log("Smallest " + smallest);
console.log("index " + smallIndex);