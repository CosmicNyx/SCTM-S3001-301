/**
 * oct 26
*/

let arr = [4, 3, 2, 10, 12, 1, 5, 6];

// arr.sort(function(a,b){return a-b});
// console.table(arr)

insertionSort(arr);
// bubbleSort(arr);
console.table(arr);

function insertionSort(arr) {
    //loop thru array and compare i with i-1
    //if i < i-1 then move i back until i is > than j
    //then move all items up one place between i and j 
    //copy val that was in i to j

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;

        //do we need to spot... do with if

        //find place then swap
        while (j >= 0 && temp < arr[j]) {
            console.table(arr)
            arr[j + 1] = arr[j];
            j--;
        }
        //swap
        arr[j + 1] = temp;
        console.table(arr)

    }

}

