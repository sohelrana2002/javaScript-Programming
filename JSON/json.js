// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *

// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON Data - A Name and a Value
// JSON data is written as name/value pairs (aka key/value pairs).

// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

// Example
// "name":"John"

// ==============JSON VALUE============
// JSON Values
// In JSON, values must be one of the following data types:

// a string
// a number
// an object
// an array
// a boolean
// null

// =============HOW TO ACCESS OBJECT IN AN ARRAY=======
// const myObj = {"employees" : [
//     { "firstName":"John", "lastName":"Doe" },
//     { "firstName":"Anna", "lastName":"Smith" },
//     { "firstName":"Peter", "lastName":"Jones" }
//   ]};
// //   console.log(myObj.employees[0].firstName);

//   const res = myObj.employees.map((curIndex) =>{
//     return `First Name: ${curIndex.firstName} Last Name: ${curIndex.lastName}`
//   }).sort();

//   console.log(res);

// ==============GETTING BOLLIAN VALUE============
// const myObj = {
//     "employees": [
//         { "firstName": "John", "lastName": "Doe", "pass": true },
//         { "firstName": "Anna", "lastName": "Smith", "pass": false  },
//         { "firstName": "Peter", "lastName": "Jones", "pass": true  }
//     ]
// };

// ===========GET TRUE VALUE=============
//   const res = myObj.employees.filter((curIndex) =>{
//     return curIndex.pass === true ;
//   });

//   console.log(res);

// =============GET FALSE VALUE=============

// const res = myObj.employees.filter((curIndex) =>{
//     return curIndex.pass === false ;
//   });

//   console.log(res);

// ==========CONVERT JSON TO JS PURE OBJ=========
// const myObj = '{ "firstName": "John", "lastName": "Doe", "pass": true }';

//     console.log(JSON.parse(myObj));

// ======GET BIRTH DAY USING DATE METHOD=======
// const myObj = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const jsObj = JSON.parse(myObj);
// console.log("JS OBJ: ", jsObj);
// jsObj.birth = new Date(jsObj.birth);
// console.log(`Name: ${jsObj.name} Age: ${jsObj.birth}`);

// Person JSON convert into Person Obj using JSON.parse()
/*
const personJSON = `{
    "name": "Sohel Rana",
    "education": "B.SC in CSE",
    "title": "Web Developer",
    "experience": "3 years",
    "salary": 30000
}`;

const personObj = JSON.parse(personJSON);
console.log("Person JSON: ", personJSON);
console.log("Person Obj: ", personObj);
console.log("Person Name: ", personObj.name);
console.log("Person Salary: ", personObj.salary);
*/

// Person Obj convert into Person JSON
/*
const personObj = {
  name: "Sohel Rana",
  education: "B.Sc in CSE",
  title: "Web Developer",
  experience: "3 years",
  salary: 30000,
};

const personJSON = JSON.stringify(personObj);
console.log(personObj);
console.log(personJSON);
*/
