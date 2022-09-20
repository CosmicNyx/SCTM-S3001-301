

const fs = require('fs');
let data = fs.readFileSync('labs/testtext1.txt'); //PUT FILE NAME HERE


data = String(data);



//Function
var x = 0;
var index = 0;
var longWord

function findLongestWord(string) {

    var splitWord = string.split(' ');

    for (var i = 0; i < splitWord.length; i++) {

        if (splitWord[i].length > x) {
            x = splitWord[i].length;
            index = i;
            longWord = splitWord[i];
        }
    }
    return x;
    
}

findLongestWord(data);

console.log("The longest word here is " + longWord)
console.log("The index of this word in the array is " + index)