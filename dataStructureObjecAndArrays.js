// the sum of a range

/* 
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to and including end.
*/

function range(start, end, step) {
    if (start > end) {
        throw new Error("not a valid range");
    }
    const nums = [];
    let s;
    if (step) {
        s = step;
    } else {
        s = 1;
    }
    for (let i = start; i <= end; i = i + s) {
        nums.push(i)
    }
    return nums
}

//console.log(range(2,1)); // throws the error

// console.log(range(1, 100));

/*
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55
*/

function sum(nums) {
    let sum = nums.reduce((sum, current) => sum + current, 0)
    return sum;
}

console.log(sum(range(1, 10)));

/*
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements should go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1,
3, 5, 7, 9]. Make sure this also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2].
*/

console.log(range(4, 20, 2));

/*
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, should take an array as its
argument and produce a new array that has the same elements in the inverse
order. The second, reverseArrayInPlace, should do what the reverse method
does: modify the array given as its argument by reversing its elements. Neither
may use the standard reverse method.
*/

//reverseArray

function reverseArray(list) {
    const reversList = []
    for (let i = list.length - 1; i >= 0; i--) {
        reversList.push(list[i])
    }
    return reversList;
}

let nums = [1, 3, 2, 4, 6, 5]
console.log(reverseArray(nums))

function reverseArrayInPlace(list) {
    let start = 0, end = list.length - 1;
    for (let i = start; i < Math.floor(end / 2); i++) {
        let temp = list[i];
        list[i] = list[end - i];
        list[end - i] = temp;
    }
    return list;
}

console.log(reverseArrayInPlace([3, 4, 11, 2, 34, 9, 78, 6]));

//A List

function arrayToList(arr) {
    let values = arr;
    const list = {};
    let binding = list;
    for (let i = 0; i < arr.length; i++) {
        binding.value = arr[i];
        values = values.slice(1);
        if (i === arr.length - 1) {
            binding.rest = null;
        } else {
            binding.rest = {};
        }
        binding = binding.rest;
    }
    return list;
}

console.log(arrayToList([1, 2, 3]))