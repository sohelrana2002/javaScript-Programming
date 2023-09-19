// ==============GET LOCAL TIME IN CONSOLE ========
// const date = new Date();
// console.log(date.toLocaleString());

// =====The toDateString() method converts a date to a more readable format:========
// ===========THERE ARE 7 PARAMETER IN DATE OBJECT CONSTRUCTOR=======
// new Date(year,month,day,hours,minutes,seconds,ms)
// const date = new Date(2012,1);
// console.log(date);


// =========MONTH MUST BE NEEDED TO GET PROPER RESULT=======
// =========JavaScript counts months from 0 to 11:January = 0.December = 11.=====

//  const date = new Date(2022, 2, 20);
//  console.log(date.toLocaleString());

// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


// ==========ALL GET METHOD========
// Method-------Description
// getFullYear()-------Get year as a four digit number (yyyy)
// Example
// const date = new Date();
// console.log(date.getFullYear());

// getMonth()-------Get month as a number (0-11)
// Example
// const date = new Date();
// console.log(date.getMonth());

// getDate()-------Get day as a number (1-31)
// Example
// const date = new Date();
// console.log(date.getDate());



// getDay()-------Get weekday as a number (0-6)
// Example
// const date = new Date();
// console.log(date.getDay());


// getHours()-------Get hour (0-23)
// Example
// const date = new Date();
// console.log(date.getHours());


// getMinutes()-------Get minute (0-59)
// Example
// const date = new Date();
// console.log(date.getMinutes());


// getSeconds()-------Get second (0-59)
// Example
// const date = new Date();
// console.log(date.getSeconds());



// getMilliseconds()-------Get millisecond (0-999)
// Example
// const date = new Date();
// console.log(date.getMilliseconds());



// getTime()-------Get time (milliseconds since January 1, 1970)
// Example
// const date = new Date();
// console.log(date.getTime());


// ==========ADVANCE EXAMPLE===========
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date("2021-5-25");
// let month = months[d.getMonth()];
// console.log(month);


// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// let month = months[d.getMonth()];
// console.log(month);

// months.map((curElem) =>{
//     return console.log(curElem);
// });




// =============SET DATE IN DATE() METHOD==============
// Method-----------Description

// setDate()-----------Set the day as a number (1-31)
// Example
// const date = new Date();
// console.log(date.setDate("2023"));

// setFullYear()-----------Set the year (optionally month and day)
// Example
// const d = new Date();
// console.log(d.setFullYear(2020));


// setHours()-----------Set the hour (0-23)
// setMilliseconds()-----------Set the milliseconds (0-999)
// setMinutes()-----------Set the minutes (0-59)
// setMonth()-----------Set the month (0-11)
// setSeconds()-----------Set the seconds (0-59)
// setTime()-----------Set the time (milliseconds since January 1, 1970)