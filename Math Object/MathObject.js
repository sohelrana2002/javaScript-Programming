// **Unlike other objects, the Math object has no constructor.
// **The Math object is static.
// **All methods and properties can be used without creating a Math object first.

// ==========GET PI VALUE USING MATH OBJECT=========
// console.log(Math.PI);

// ***Math Properties (Constants)
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E



// Number to Integer
// There are 4 common methods to round a number to an integer:


// Math.round(x)	Returns x rounded to its nearest integer
// Example
// console.log(Math.round(4.4)); //Output 4
// console.log(Math.round(4.5)); //Output 5


// Math.ceil(x)	Returns x rounded up to its nearest integer
// Example
// console.log(Math.ceil(4.9)); //Output 5
// console.log(Math.ceil(4.5)); //Output 5
// console.log(Math.ceil(4.5)); //Output 5
// console.log(Math.ceil(-4.4)); //Output -4




// Math.floor(x)	Returns x rounded down to its nearest integer
// example
// console.log(Math.floor(4.5));  //output 4
// console.log(Math.floor(4.1));  //output 4
// console.log(Math.floor(4.9));  //output 4
// console.log(Math.floor(-4.9));  //output 5


// Math.trunc(x)	Returns the integer part of x (new in ES6)
// example
// console.log(Math.trunc(4.5));  //output 4
// console.log(Math.trunc(4.9));  //output 4
// console.log(Math.trunc(4.01));  //output 4


// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

// console.log(Math.sign(-4));  //output -1
// console.log(Math.sign(0));  //output 0
// console.log(Math.sign(4));  //output 1


// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
// example
// console.log(Math.pow(3,2)); //output 9
// console.log(Math.pow(2,3)); //output 8


// Math.sqrt()
// Math.sqrt(x) returns the square root of x:
// exaple
// console.log(Math.sqrt(25));  //output 5
// console.log(Math.sqrt(81));  //output 9
// console.log(Math.sqrt(85));  //output 9.21


// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
// example
// console.log(Math.abs(-7.8));  ///output 7.8
// console.log(Math.abs(7.8));  ///output 7.8



// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.

// example
// const res = Math.sin((90 * Math.PI) / 180)
// console.log(res);   //output 1

// const res = Math.sin((0 * Math.PI) / 180)
// console.log(res);   //output 0

// const res = Math.sin((45 * Math.PI) / 180)
// console.log(res);   //output 1.708(1/root 2)




// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.
// // example
// const res = Math.cos((0 * Math.PI) / 180)
// console.log(res);   //output 1

// const res = Math.cos(45 * Math.PI / 180);
// console.log(res);   //output 0.708(1/root 2)

// const res = Math.sin(90 * Math.PI / 180)
// console.log(res);   //output 1




// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
// eaxmple
// console.log(Math.max(2, 5, 10 , 3, 5, 50));  ///output 50
// console.log(Math.min(2, 5, 10 , 3, 5, 50));  ///output 2


// ===========VERY IMPORTANT METHOD===========
// // ===========GET MAX NUM FROM AN ARRAY==============
// const maxNum = numArray.reduce((initialValue, curIndex) =>{
//     return Math.max(initialValue, curIndex)
// }, 0)

// console.log(maxNum); ///output 60



// ============EASY WAY TO FIND MIN AND MAX NUM FROM AN ARRAY USING SPREAD OPERATOR========
// const numArray = [1, 6, 3, 10, 4, 20, 23, 12, 18, 60];
// console.log(Math.min(...numArray));   //output 1
// console.log(Math.max(...numArray));   //output 60

// =============MATH RANDOM METHOD=============
// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
// example
// console.log(Math.random());


// ===========GET RANDOM VALUE WITH CEIL METHOD=============
// console.log(Math.ceil(Math.random() * 10))