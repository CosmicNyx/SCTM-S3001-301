//break apart string
// do that for loop from eamples
// do plus 1 and keep it in another variable.
// do same thing with numbers
// make one witch index of just incase
// should be fun
// do string function today

//reading file

const fs = require('fs');
let data = fs.readFileSync('labs/testtext1.txt');

console.log(typeof data)
console.log("--------");
//converting file to string
data = String(data);
console.log(data)
console.log("--------");
console.log(typeof data)


//

var x = 0;
var counter = 0;
var word

function findLongestWord(str) {

    var stringSplit = str.split(' ');

    for (var i = 0; i < stringSplit.length; i++) {


        if (stringSplit[i].length > x) {
            console.log("--------");
            console.log(stringSplit[i])

            x = stringSplit[i].length;
            counter = i;
            word = stringSplit[i];
        }
    }
    return x;
}
findLongestWord(data);

console.log("--------");
console.log(word)
console.log(counter)