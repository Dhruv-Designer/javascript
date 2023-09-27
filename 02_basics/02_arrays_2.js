const marvel_heroes = ["ironman", "thor", "spiderman"] 
const dc_heroes = ["superman", "batman", "flash"] 

// marvel_heroes.push(dc_heroes) // [ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'flash' ] ] 

// it will add dc_heroes as an array element which is not good practice.

// We have one more arrays method to join two arrays is Concat. 

const newArray = marvel_heroes.concat(dc_heroes)

// console.log(newArray); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

// Spread method (...xyz ) => it will spread all elements into to single value.

const newSpreadArray = [...marvel_heroes, ...dc_heroes]

// console.log(newSpreadArray); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2,3, [4, 5, 6], 7, 8, [9, 10, [11, 12]], 13, 14]

const real_array = another_array.flat(Infinity) // Infinity => depth of array and merge all seperated in to one main array.

// console.log(real_array); //[
//     1,  2, 3,  4,  5,  6,
//     7,  8, 9, 10, 11, 12,
//    13, 14
//  ]


console.log(Array.isArray("test")); // used to check entered value is array or not.

console.log(Array.from("test")); //[ 't', 'e', 's', 't' ] => it convertes given value into ARRAY.
console.log(Array.from({name: "test"})); // interesting it returns [] empty array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]