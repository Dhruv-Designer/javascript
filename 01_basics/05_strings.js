let Fname = "Ftest"
let Lname = "Ltets"

// console.log( Fname + " Lname"); // this method of joining or concatination is old.

// console.log( `my ${Fname} ${Lname}`); // this is the modern method of string concatination.


const gameName = new String("Dhruv   ");

// console.log(gameName [0]); // D
// console.log(gameName.length); // 5
// console.log(gameName.toLocaleLowerCase()); // dhruv

// console.log(gameName.charAt([4])); //v
// console.log(gameName.indexOf('r')); //2

const newGameName = gameName.trim() // trim space from start and end both.
// console.log(newGameName); // Dhruv (trim space from start & end)


const gameNameSubString = gameName.substring(0,3) // Counts from 0-2 ..3rd index not printed.
// console.log(gameNameSubString); // Dhr


const  anotherString = gameName.slice(0,4) // you can give negative value in slice also.
// console.log(anotherString);

const url = "https://dhurv.com/dhruv%20patel"
// console.log(url.replace('%20','-'));  // ir used to replace something in strings

// console.log(url.includes('Dhurv')); // false - check given value in string...case sensitive

const splitString = "test-test1.0-test2.0"
console.log(splitString.split('-','2'));

