const myArray = [1, 5, 6, 3, 89, 32];
const multiplication = myArray.map((curElem) =>{
    return curElem * 2;
});

const filtering = multiplication.filter((curElem) =>{
    return curElem > 10;
});

const reducing = filtering.reduce((accum, curElem) =>{
    return accum+=curElem
})

console.log(multiplication);
console.log(filtering);
console.log(reducing);