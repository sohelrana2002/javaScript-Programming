// JavaScript Object.assign()
// The Object.assign() method copies properties from one or more source
// objects to a target object.

// const person1 = {
//   name: "SOHEL RANA",
//   age: 24,
//   id: 222311057,
// };

// const person2 = {
//   name: "Fahim Rahman",
//   dept: "CSE",
// };

// Assign Source to Target
// Object.assign(person1, person2);

// console.log("person-1", person1);
// console.log("person-2", person2);

// JavaScript Object.entries()
// ECMAScript 2017 added the Object.entries() method to objects.

// Object.entries() returns an array of the key/value pairs in an object:
// console.log(Object.entries(person1)[0][1]);

// const personArray = Object.entries(person1);
// console.log("personArray", personArray);

// const fruits = {
//   Bananas: 300,
//   Oranges: 200,
//   Apples: 500,
// };

// let fruitInfo = "";

// for (let [fruit, amount] of Object.entries(fruits)) {
//   fruitInfo += `${fruit}: ${amount}`;
// }

// console.log("fruitInfo", fruitInfo);

// console.log("new map", new Map(Object.entries(fruits)));

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
// ];

// const f = Object?.fromEntries(fruits);

// console.log("f", f);

const userData = {
  name: "Sohel Rana",
  email: "sohel@gmail.com",
};

const reset = Object.fromEntries(
  Object.entries(userData).map(([key, value]) => [key, value])
);

console.log(reset);

console.log(Object.entries(userData).map(([key, value]) => [key, ""]));

const num = [1, 2, 3, 4];
console.log(Array.isArray(num));
