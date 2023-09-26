let Fname = "Ftest"
let Lname = "Ltets"

// console.log( Fname + " Lname"); // this method of joining or concatination is old.

// console.log( `my ${Fname} ${Lname}`); // this is the modern method of string concatination.


const gameName = new String("Dhruv   ");

console.log(gameName [0]); // D
console.log(gameName.length); // 5
console.log(gameName.toLocaleLowerCase()); // dhruv

console.log(gameName.charAt([4])); //v

const newGameName = gameName.trim()
const gameNameSubString = gameName.substring(0,3)

console.log(newGameName); // Dhruv (trim space from start & end)
console.log(gameNameSubString); // Dhr
