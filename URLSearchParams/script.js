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
// const infoObj = {
//     name: "Sohel Rana",
//     age: 23,
//     degree: "B.Sc in CSE"
// };

// const searchParam = new URLSearchParams(infoObj);
// console.log(searchParam.toString());
// const getName = searchParam.get("name");
// console.log(getName, 'name');
// output : Sohel Rana
// ---how set anthing in url 

// --update name Sohel Rana to Rolex 
// searchParam.set("name", "Rolex");
// const getName = searchParam.get("name");
// console.log(getName);
// output: Rolex

// -- add extra attribute 
// searchParam.set("dept.", "Computer Science & Engineering");

// const getDept = searchParam.get("dept.");
// console.log(getDept);
// output: Computer Science & Engineering

// output: name=Rolex&age=23&education=B.Sc+in+CSE&dept.=Computer+Science+%26+Engineering

// Theory: The append() method of the URLSearchParams interface appends a specified key/value pair as a new search parameter.

// searchParam.append("education", "Varendra University");
// console.log(searchParam.toString());



// You normally create a new URL object by specifying the URL as a string when calling its constructor, or by providing a relative URL and a base URL. You can then easily read the parsed components of the URL or make changes to the URL.
// let url = new URL("https://example.com?foo=1&bar=2");
//   search: A string indicating the URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading ? character.
// let params = new URLSearchParams(url.search);

//Add a second foo parameter.
// params.append("foo", 4);
// console.log(params.toString(), "params");
//Query string is now: 'foo=1&bar=2&foo=4'
