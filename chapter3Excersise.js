// min function that returns minimum value
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

const minNum = min(834, 434);
// console.log(minNum);

//For any other number N, its evenness is the same as N - 2 recursively, check whether number is odd or even
function isEven(n) {
    console.log(`n = ${n}`);
    if (n < 0) {
        return null;
    }
    if (n % 2 === 0) {
        //check for n - 2 is even or not
        isEven(n - 2);
        return true;
    } else {
        return false;
    }
}

// console.log(isEven(50));

/*
Write a function called countBs that takes a string as its only argument and
returns a number that indicates how many uppercase B characters there are in
the string.
*/

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === "B") {
            count++;
        }
    }

    return count;
}

const count = countBs("Hello BBhhaaii");
console.log(count);

function countCar(str, key) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === key) {
            count++;
        }
    }

    return count;
}

const charCount = countCar("Helloaaaa BBhhaaii", "a");
console.log(charCount);

