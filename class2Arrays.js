//swap values
// arrays
//loading csv files
//coercion
//objects

var x = [10,"hello", null, {}];
x[2] = NaN;


console.log("--------");
for (let i=0; i<x.length; i++){
    
    console.log (x[i]);
}



console.log("--------");
for(item of x){
    console.log(item);
}



console.log("--------");
x.forEach(console.log);


// read file sync
const fs = require('fs');


