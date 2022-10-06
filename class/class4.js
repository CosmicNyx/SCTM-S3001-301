//gaissian summation
// n/2*(n+1)
// n(n+1)/2
// n(n)
// n^(1/2)
//find pains, count the n of pairs, sum the,

var count = 0;
const themax = 100;

for(let i= 0; i<themax;i++){
    console.log("i first = " +i);
    for(let j=i;j<themax;j++){
        console.log("i = " +i);
        console.log("j = "+j);
        // 0(n) or 0(n^2)
        count++;
        console.log("count = "+count);
    }
}

console.log(count);

//--------------------------------------------------------------------

console.log("-------------------")


//
///BINARY SEARCH
//https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470

let ascendingNumbers = [];

for(let i = 0; i<1000; i++){
    ascendingNumbers.push(i);
}


/////
let numberToFind =900;

console
console.log(ascendingNumbers[ascendingNumbers.length/2])

//bug with indices of .5
if (ascendingNumbers[ascendingNumbers.length/2]>numberToFind){
    console.log("were looking for smth smaller")
}else{
    console.log("were looking for smth smaller")
}

// binaryStep(ascendingNumbers,numberToFind);

/////FUNSTION

function binaryStep(val,goal){
    if(val==goal){
        return 0;
    }

    if (goal>val){
        return 1;
    }else{
        return -1;
    }
}


let index = undefined;
count=0;
let start = 0;
let end = ascendingNumbers.length;

for (let i=0;i<ascendingNumbers.length;i++){
    count++;
    let position = (start + end) / 2;
    position = Math.floor(position);
    console.log(position)
    let desicion = binaryStep(ascendingNumbers[position],numberToFind)
    if(desicion == 0){
        index = i;
        break;
    }
    if(desicion==1){
        start=position;
    }
    if(desicion==-1){
        end=position;
    }
}
console.log(index)
console.log(count)



console.log("------queue-----")

///------------------

//QUEUE
///https://www.geeksforgeeks.org/queue-data-structure/
///https://medium.com/before-semicolon/queue-data-structure-in-javascript-a8c7927daf06#:~:text=Queue%20Data%20Structure%20is%20a,also%20an%20abstract%20data%20type.

///                  - enqueue (data) {returns undefined}
///                  - dequeue () {returns first item}
///                  - peek 

let myq = [];
myq.push(NaN);
myq.push(19);
myq.push("sjkdfksdf");
console.log(myq)
console.log(myq.shift())
console.log(myq)



class Queue {
    #myq=[];
    constructor(){ 
    }
    

    enqueue(data){
        this.#myq.push(data);
        return undefined;
    }
    dequeue (data){
        return this.#myq.shift(); // .splice(0,1) or [0];
    }
    peek(){
        return this.#myq[0];
    }
    toString(){
        return "hello";
    }
}

let myAwesomeQueue = new Queue();
myAwesomeQueue.enqueue(NaN);
console.log(myAwesomeQueue.dequeue())
console.log(myAwesomeQueue.toString())

