// Array 

// Different Types to declare Arrays 

const myArr = [0, 2, 3, 4, 5]
const myNewArr = ["test", "test2", "test3"]
const myNewArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods

// myArr.push(6) // Add value to array
// myArr.pop() // remove last value of array

// myArr.unshift(10) // it will add value to start of the array.
// myArr.shift() // it will remove value to start of the array.


// console.log(myArr.includes(2)); // true
// console.log(myArr.indexOf(2)); // 1
// console.log(myArr.indexOf(20)); // -1-- bcz it is not available thats why give false result.

// Slice & Splice Methods

const myn1 = myArr.slice(1,3) // slice does not modify main array.
console.log(myn1); //[ 2, 3 ]
console.log("a ", myArr); // a  [ 0, 2, 3, 4, 5 ]
console.log("*********");

const myn2 = myArr.splice(1,3) // Splice also modify main array
console.log(myn2); // [ 2, 3, 4 ]
console.log("a ", myArr); //a  [ 0, 5 ] 