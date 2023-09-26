// Two types of Data Types 

// Primitive : 7 types => Number, String, Boolean, Bigint, Symbol, undefined, null 


// Non-Primitive : 3 Types => Array, Object, Functions 


// Array 

// let firstArray = ["name", 12, "state", "country"] 

// Object

// let firstObj = {
//     name: "test",
//     number: 12,
//     state: "test-state",
//     country: "test-country"
// }

// Functions 

let myFunctions = function(){
    console.log("test");
}

// console.log("myFunctions");



// ++++++++++++++++++ Memory Tyeps ++++++++++++++++++++++++++++++++++

// Primitive Data types => Stack memory (it gives copy of original value)

// Non-Primitive Data Types => Heap memory ( it gives original referance value of varialble)

let myFirstName = "test"

myNickName = myFirstName;

myNickName = "test2";

// console.log(myFirstName); // test
// console.log(myNickName); // test2

let userOne = {
    name: "test",
    rollNumber: 12
}

let userTwo = userOne

userTwo.name = "testNew"

// console.log(userTwo); // name: testNew
// console.log(userOne); // name: testNew