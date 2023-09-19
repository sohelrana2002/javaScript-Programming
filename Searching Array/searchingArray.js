const myArray = [1, 5, 6, 3, 89, 32];
const result = myArray.filter((curElem) =>{
    if(curElem == 89){
        console.log("Found it");
    }
});

console.log(result);