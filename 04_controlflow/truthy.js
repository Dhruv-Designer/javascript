const getUserEmial = "test@google.com"

if (getUserEmial) {
    console.log("User got Email");      
}else{
    console.log("User don't have Email");
}

// Falsy Value 

// false, 0, -0, null, undefined, NaN, "", BigInt 

// Truthy Value 

// "0", 'false', " ", [], {}, functions(){}, 

// if (getUserEmial.length == 0){
//     console.log("Arry is Empty");
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length == 0){
//     console.log("Object is Empty");
// }

// Nuttish Coalescing Operator (??) : nutt undefined

// let val1
// val1 = 10 ?? 20 // 10
// val1 = null ?? 20 // 20
// val1 = null?? 10 ?? 20 // 10

// console.log(val1);


// Ternary Operators 

// conditions ? true : false 

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Price is less than 80") : console.log("Price more than 81");