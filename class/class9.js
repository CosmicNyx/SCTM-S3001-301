//trees

let arr = [12,190,0.8912,0xFFF,NaN,"kjsdks"];
//let arr = [12, 190, 0.8912, 0xFFF];
console.table(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        console.log("there is a Nan")
    } else {
        sum += arr[i];
    }
}

console.log(sum)

if (arr.every(isNaN)) {
    console.log("theres not a number in here")
} else {
    sum = arr.reduce(function (prev, curr) {
        let movingSum = prev + curr;
        return movingSum
    })


    sum = arr.reduce((prev, curr) => prev + curr)

    //make sure all things in arr are numbers then sum
    sum = arr.filter((item)=> !isNaN(item)).reduce((prev,curr)=>prev+curr);


    //
    function bb() { }
    () => { }
    () => true

        //iife
        (function () { })();

    console.log("hi "+sum)
}
