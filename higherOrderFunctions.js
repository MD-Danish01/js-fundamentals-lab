function repeat(n, fn){
    for(let i = 0; i < n; i++){
        fn(i);
    }
}

const lables = [];
repeat(40, i => {
    lables.push(`Unit - ${i + 1}`)
})

console.log(lables);
