// gaussian summing
// binary search
// queues
// es6 classes
// #private
// toString() -- why doesn't this work? 
// 
// sort
// bubble sort
// linked list

class Awesomez {
    #myprivatedata = "another string";
    constructor(){
     this.mydata = "I'm awesomez!";   
    }

    toString(){
        return this.#myprivatedata;
    }

    valueOf(){
        return "this is valueOf";
    }
}

let anAwesome = new Awesomez();
console.log(anAwesome.toString() + "");

///////

let myarray = [];
myarray.push(Infinity);
for(let i = 0; i < 10; i++){
    myarray.push( randomInt() );
}
myarray.push(true);
myarray.push(-Infinity);

function randomInt(min=0, max=10){
    return( Math.ceil(Math.random()*(max-min) + min) );
}
console.table(myarray);

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//swap(myarray, 2, 7);

function bubbleSort(arr){
    for(let l = arr.length - 1; 0 < l ; l--){
        for(let i = 0; i < l ; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i + 1);
            }
        }
    }
}

bubbleSort(myarray);

console.table(myarray);


class linkedList{
    constructor(){
        this.first;
    }
    insert(newObject){
        // add this to the front of the list
        // optionally we could keep track of the length -> this.length++
        newObject.next = this.first;
        this.first = newObject;
    }

}

class dataThing{
    constructor(data){
        this.data = data;
        this.next = undefined;
    }
    amILast(){
        return this.next === undefined ; 
    }
}

let ourlist = new linkedList();
ourlist.insert(new dataThing(10));
ourlist.insert(new dataThing(20));

console.log( ourlist );

let listItem = ourlist.first;
while(listItem != undefined){
    console.log(listItem.data);
    listItem = listItem.neighbour;
}

// console.log( typeof(myarray[0]) );

// var test = 10.87987981735;
// test = test.toFixed(0);
// console.log(test);

// console.log(Math.ceil(10.0));