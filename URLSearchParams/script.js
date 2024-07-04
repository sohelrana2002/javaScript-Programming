const info = "name=sohel+rana&age=23&education=B.Sc+in+CSE"

// Theroy: URLSearchParams is an object of javaScript. It have lot of fuction to help working with search param in url 
const searchParam = new URLSearchParams(info);
// console.log(searchParam);


// const getName = searchParam.get("name");
// console.log(getName);
// output: sohel rana

// const getEducation = searchParam.get("education");
// console.log(getEducation);
// output: B.Sc in CSE