const contentPara = document.getElementById("contentPara");
const buttonMore = document.getElementById("buttonMore");
const readMorePara = document.getElementById("readMorePara");
const buttonLess = document.getElementById("buttonLess");










const myString = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio minus amet asperiores praesentium molestias non quia similique temporibus vel placeat dolorem excepturi quae voluptate maxime "

const longString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus molestiae eligendi ex, asperiores sed ipsa ducimus, nam quaerat quo alias earum nesciunt deleniti esse praesentium laudantium provident. Debitis, delectus molestias. Maxime odio enim deleniti, consequatur nobis animi, quibusdam quia expedita labore id amet est voluptatum ratione eveniet harum sit voluptatem recusandae doloribus sequi fuga ad similique fugiat ipsum natus"

const sliceString = myString.slice(0, 30);
console.log(sliceString);

contentPara.innerText = `Title: ${sliceString}.....`;



const handleButtonMore = () =>{
    readMorePara.innerText = `Important: ${longString}`;
    buttonMore.style.display = "none";
    buttonLess.style.display = "flex"
}

const handleButtonLess = () =>{
    readMorePara.innerText = "";
    buttonMore.style.display = "flex";
    buttonLess.style.display = "none";
}



buttonMore.addEventListener('click', handleButtonMore);
buttonLess.addEventListener('click', handleButtonLess);