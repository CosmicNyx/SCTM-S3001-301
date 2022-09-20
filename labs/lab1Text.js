

// -----------reading file-------

const fs = require('fs');
let data = fs.readFileSync('labs/testtext1.txt');

// console.log(typeof data)
// console.log("--------");
//converting file to string

data = String(data);

// console.log(data)
// console.log("--------");
// console.log(typeof data)


//----Function

var x = 0;
var counter = 0;
var word

function findLongestWord(string) {

    var splitWord = string.split(' ');

    for (var i = 0; i < splitWord.length; i++) {

        if (splitWord[i].length > x) {
            x = splitWord[i].length;
            counter = i;
            word = splitWord[i];
        }
    }
    return x;
    
}

findLongestWord(data);

console.log("The longest word here is " + word)
console.log("The index of this word in the array is " + counter)