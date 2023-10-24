const nickname= "Timmy";
const firstname = "Timothy";


// if(nickname) {
//    console.log(`Good Morning ${nickname}`); 
// } else if(firstname) {
//    console.log(`Good Morning ${firstname}`); 
// }else{
//    console.log(`Good Morning`);
// }

// backticks + curly brace 

// more ternary statement + interpolation 

const names = nickname || firstname || "";

console.log(`Good Morning ${names}!`)
