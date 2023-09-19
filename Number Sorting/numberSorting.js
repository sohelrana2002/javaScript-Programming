const myArray = [1, 5, 6, 3, 89, 32];
// ===========REFERENCE OF MAIN ARRAY (using spread operator)=========
const subArray = [...myArray]
// ==========WORKING WITH SUB ARRAY===========
const ascendingSort = subArray.sort((a, b) => {
    return a - b;
});

console.log("Ascending", ascendingSort);
// ==========WORKING WITH SUB ARRAY===========
const descendingSort = subArray.sort((a, b) => {
    return b - a;
});
console.log("Descending", descendingSort);
// ==========GET AGAIN MAIN ARRAY============
console.log("After operation in main array", myArray);