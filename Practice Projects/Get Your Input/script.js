const userInput = document.getElementById("user-input");
const userOutput = document.getElementById("userOutput");
const clickButton = document.getElementById("clickButton");


// ===============KEYPRESS UPDATE============
// const handleUserInput = (event) =>{
//     const getInput = userInput.value;
//     userOutput.innerHTML = getInput;
// }
// userInput.addEventListener('keypress', handleUserInput);

// ===============CLICK ME UPDATE============
const handleUserInput = (event) =>{
    const getInput = userInput.value;
    userOutput.innerHTML = getInput;
}
clickButton.addEventListener('click', handleUserInput);