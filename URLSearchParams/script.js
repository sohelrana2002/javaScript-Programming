// const info = "name=sohel+rana&age=23&education=B.Sc+in+CSE";

// Theroy: URLSearchParams is an object of javaScript. It have lot of fuction to help working with search param in url 
// const searchParam = new URLSearchParams(info);
// console.log(searchParam);


// const getName = searchParam.get("name");
// console.log(getName);
// output: sohel rana

// const getEducation = searchParam.get("education");
// console.log(getEducation);
// output: B.Sc in CSE

// --pass object in URLSearchParams
const infoObj = {
    name: "Sohel Rana",
    age: 23,
    education: "B.Sc in CSE"
};

const searchParam = new URLSearchParams(infoObj);
// console.log(searchParam.toString());
// const getName = searchParam.get("name");
// console.log(getName, 'name');
// output : Sohel Rana
// ---how set anthing in url 

// --update name Sohel Rana to Rolex 
searchParam.set("name", "Rolex");
const getName = searchParam.get("name");
console.log(getName);
// output: Rolex

// -- add extra attribute 
searchParam.set("dept.", "Computer Science & Engineering");

const getDept = searchParam.get("dept.");
console.log(getDept);
// output: Computer Science & Engineering

console.log(searchParam.toString());
// output: name=Rolex&age=23&education=B.Sc+in+CSE&dept.=Computer+Science+%26+Engineering