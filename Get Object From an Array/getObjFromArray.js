const students = [
  {
    id: 1,
    name: "Sohel Rana",
    studentId: "222311057",
  },
  {
    id: 2,
    name: "Fahim Rahman",
    studentId: "222311063",
  },
  {
    id: 3,
    name: "Bappy (Candy)",
    studentId: "222311056",
  },
];

// ================REFERENCE OF MAIN ARRAY=============
const subStudents = [...students];

// ===============GET STUDENT INFO==============
// const infoResult = students.map((curIndex) => {
//   return (
//     console.log(`Student Name is: ${curIndex.name}`),
//     console.log(`Student ID is: ${curIndex.studentId}`)
//   );
// });

// console.log(infoResult);

// =============SEARCH STUDENT NAME==========
// const searchResult = students.filter((curIndex) =>{
//         if(curIndex.name === "Sohel Rana"){
//             console.log("Found & name is: " + curIndex.name)
//         }
// });

// ==========SEARCH STUDENT ID============
// const searchResult = students.filter((curIndex) =>{
//         if(curIndex.studentId === "222311057"){
//             console.log("Found & studentId is: " + curIndex.studentId)
//         }
// });

// =============SORTING ID AND GET RESULT===================
// subStudents.sort((a, b) => {
//   return a.studentId - b.studentId;
// });
// console.log(subStudents);
// console.log(students);

// =============SORTING(asecending order) NAME AND GET RESULT===================
// students.sort((a, b) => {
//   console.log("a", a.name, "b", b.name);

//   console.log(a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

//   return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
// });
// console.log(students);

// =============PUSH OBJECT PROPERTY IN AN EMPTY ARRAY==========
// const nameArray = [];

// const getName = students.map((curIndex) => {
//   nameArray.push(curIndex.name);
// });
// nameArray.sort();
// console.log(nameArray);
