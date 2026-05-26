//printing pattern using console.log
for (let i = 0; i < 7; i++) {
    let hash = "#";
    for (let j = 0; j < i; j++) {
        hash += "#";
    }
    console.log(hash);
}

//fizzbuzz
let num = 1;
while (num <= 100) {
    if (num % 15 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    num++;
}

//chessboard

const chessboardDiamentions = 180;
for (let i = 0; i < chessboardDiamentions; i++) {
    let hash = "";
    let n = chessboardDiamentions;
    if (i % 2 == 0) {
        hash = "#";
        n--;
    }
    for (let j = 0; j < n; j++) {
        if (j % 2 == 0) {
            hash += " ";
        } else {
            hash += "#";
        }
    }
    console.log(hash);
}