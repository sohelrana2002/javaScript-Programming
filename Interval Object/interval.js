// setInterval(() =>{
//     const d = new Date();
//     // ===========WHEN WE NEED ONLY TIME THEN CALL toLocaleTimeString() METHOD===
//     console.log(d.toLocaleTimeString());
// },1000);



const myTimer = () =>{
    const time = new Date();
    console.log(time.toLocaleTimeString());
};

const myInterval = setInterval(myTimer, 1000);

// ========clearInterval() CLEAR THE INTERVAL===========