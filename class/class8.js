//computationna innefcient thingzsklzdv
//recursions

//fibanachi..?
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// 0 1 1 2 3 5
console.log(fib(5));
//console.log(Math.exp(32))


let fa = [0, 1];
function f(n) {

    for (let i = fa.length; i <= n; i++) {
        fa[i] = fa[i - 1] + fa[i - 2];
        console.log(fa[i])
    }


    return fa[n];
}
//f(10);


// 0 1 1 2 3 5


function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// take nth term input from the user

let arr = []
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    arr.push(fibonacci(i));
}

//console.log(arr)




///guasian sum

function gsum(n) {
    if (n <= 1) {
        return n;
    }
    return n + gsum(n - 1);
}

//console.log(gsum(3))