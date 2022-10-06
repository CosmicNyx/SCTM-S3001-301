

const fs = require('fs');
let data = fs.readFileSync('labs/lab2/numbers.txt'); //PUT FILE NAME HERE
data = String(data);

//convert txt list to array of strings
let dataarray = data.split(',');
//convert it to a number array
for (let i = 0; i < dataarray.length; i++) {
    dataarray[i] = Number(dataarray[i]);
}
console.log(dataarray);



//////////MEAN and sum

let sum = 0;
for (var i = 0; i < dataarray.length; i++) {
    sum += dataarray[i]
}




//MEDIAN


//sort array made into a array
dataarray.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(dataarray);

var div = (dataarray.length / 2)

if (dataarray.length % 2 == 0) { //even number
    // console.log("even")
    // console.log("div: " + (div-1))
    // console.log("div: " + div)
    console.log("median: " + dataarray[div-1] + ", " + dataarray[div])
}else{
    // console.log("odd")
    console.log("median: " + dataarray[div-1])
}

console.log("mean: " + sum / dataarray.length)
console.log("sum: " + sum)


//number % 2 == 0 EVEN... else ODD