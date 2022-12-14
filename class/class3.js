//coercion??
//copares ojects by ref.. not value

//-----------------STACKS down

// ----------SEARCH

/*
= is used for assigning values to a variable, 
== is used for comparing two variables, but it
ignores the datatype of variable whereas 
=== is used for comparing two variables, but this
operator also checks datatype and compares two values.

= is called as assignment operator, 
== is called as comparison operator whereas 
It is also called as comparison operator.

= does not return true or false, 
== Return true only if the two operands are equal while 
=== returns true only if both values and data types are the same for the two variables. 
*/

var apple = {};
var orange = {};

//false
console.log('false')
console.log(apple == orange);

//true
console.log('---------')
console.log('true')
console.log(10 == '10')

//true
console.log('---------')
console.log('true')
console.log(undefined == undefined)

//true????
console.log('---------')
console.log('ture')
console.log(undefined == null)

//true
console.log('---------')
console.log('true')
console.log(null == null)

//true
console.log('---------')
console.log('true')
console.log(0 == -0)

//true
console.log('---------')
console.log('true')
console.log(Infinity == Infinity + 1)

//false
console.log('---------')
console.log('false')
console.log(NaN == NaN)


console.log('---------')
console.log(false == '')
//coersion to BOOLEON,  everything is true except 0, -0,NaN, null, undefined, ''

console.log('---------')
console.log(true == Boolean("true"))


/**
 * 
 * ---------STACKS---------
 * 
 */

//one thing on top of another
//put smth on top.. take smth of the top

var myStack = [];

for(let i=0; i<10; i++){
    myStack.push(i);
}


console.log(myStack)
console.table(myStack)

console.log('--------------')

console.log('push')
console.log(myStack.push(8))
console.table(myStack)
console.log('pop')
console.log(myStack.pop())
console.table(myStack)

console.log('--------------\nsearch\n--------------')

/**
 * 
 * 
 * -----  SEARCH -------
 * 
 * 
*/



let data = [{}, 10, 'cat', true, 'doggo', null];


//linear complexity O(n2)
for (let i=0;i < data.length; i++){
    if (data[i]==='cat'){
        console.log("found cat at " + i)
        break;
    }
}


//??
//exponential complexity O(n^2)
for (let i=0; i < data.length; i++){
    for (let j = 0;j < data.length; j++){
        if (data[i]===data[j] && data[i]==='cat'){
            console.log(data[i])
        }
    }
}

//
//O(1)

console.log("---------------");

///////
data.sort(function(a,b){
    if(a === "cat"){
        return -1;
    }else{
        return 0;
    }
})

console.log (data[0]);
console.log(data);