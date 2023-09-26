let score = "33aaa"

// console.log(score); 

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score); //converted into Number

// console.log(typeof valueInNumber);

//console.log(valueInNumber); // Nan Not a Number, for null we get 0 and for undefined we get NaN. type of Nan is number.

// 33 => number
// "33" => string
// "33aa" => Nan
// null => 0 that is number
// undefined => Nan
// true => 1
//false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // converted into Boolean

// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => flase; "test" => true

let someNumber = 33

let stringNumber = String(someNumber) //converted into String

// console.log(typeof stringNumber);



// *************** OPERATIONS  *************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log( 1 + 1 + "2"); // if last is string first two consider as number
// console.log( "1" + 1 + 2); // if start with string remain value consider as string


let gameCounter = 2

gameCounter++; // pre and post increament are different

console.log(gameCounter);