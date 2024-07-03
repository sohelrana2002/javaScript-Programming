
// Theroycal: localStorage in JavaScript allows web applications to store data locally within the user's browser – with no expiration date


// Local Storage only allow key and value pair in function & it only allow string variable

// ==when we need to set any it in local storage then call setItem function==
// example: setItem: ƒ setItem()

// localStorage.setItem("name", "SOHEL RANA");

// ==when we need to get value from local storage then call getItem function==
// example: getItem: ƒ getItem()

// const name = localStorage.getItem("name");
// console.log(name);
// output: SOHEL RANA

// ==when we need to remove value from local storage then call removeItem function==
// example: removeItem: ƒ removeItem()
// localStorage.removeItem("name");

// ==when we need to clear all  value from local storage then call clear function==
// example:  clear : ƒ clear()
// localStorage.clear("name");


// --how to store object in local storage?--
// theory: local storage only allow string but object is not string. that why we need to convert object into JSON, we know that JSON is a pure string

/*const sohelInfo = {
    name: "Sohel Rana",
    age: 23,
    education: "B.Sc in CSE"
}

const sohelInfoString = JSON.stringify(sohelInfo);
// console.log(sohelInfoString);

localStorage.setItem("sohelInfo", sohelInfoString);

const getSohelInfo = localStorage.getItem("sohelInfo");

console.log(getSohelInfo);

// --check typeof getSohelInfo
console.log(typeof getSohelInfo);

// if we need to access value from local storage then 
const getSohelInfoAccessble = JSON.parse(getSohelInfo);

// console.log(getSohelInfoAccessble);

console.log(getSohelInfoAccessble.name);
// output: Sohel Rana*/



// ---set theme color in local storage---
const themeSelector = document.querySelector("#themeSelector");
const themeOption1 = document.querySelector(".theme-options1");
const themeOption2 = document.querySelector(".theme-options2");
const themeOption3 = document.querySelector(".theme-options3");
const themeOption = document.querySelectorAll("option");
const heading = document.querySelector("#heading");

const getThemeValue = localStorage.getItem("theme");
themeSelector.value = getThemeValue;
// console.log(themeOption.value, "themeOption.value");
selectTheme(getThemeValue);

themeSelector.addEventListener("change", (e) =>{
    console.log(e.target.value);
    const themeValue = e.target.value;
    localStorage.setItem("theme", themeValue)
    selectTheme(themeValue);
});

function selectTheme(theme){
    if(theme === "dark"){
        document.body.style.backgroundColor = "#222";
        heading.style.color = "#fff";
        themeOption2.innerHTML = "Dark";
    }else if(theme === "light"){
        document.body.style.backgroundColor = "#e5e5e5";
        themeOption3.innerHTML = "Light";
    }else{
        document.body.style.backgroundColor = "#fff";
        heading.style.color = "#000";
        themeOption1.innerHTML = "Select a theme";
    }
}