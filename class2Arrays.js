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



console.log("--------");
// read file sync
const fs = require('fs');
let data = fs.readFileSync('test.csv');
//hex
console.log(data)
//hex to string
data = String(data);
console.log(data)
console.log(typeof data)

//convert csv list to array of strings
let dataarray = data.split(',');

//sort string array ******
console.log('sort string array')
// dataarray.sort();
// console.log(dataarray)

console.log(typeof dataarray)
console.log(dataarray)

//convert it to a number array
for(let i = 0; i<dataarray.length; i++){
    dataarray[i] = Number(dataarray[i]);
}
console.log(dataarray)

//sorted array
dataarray.sort();
console.log(dataarray)
