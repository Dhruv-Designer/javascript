// <, >, <=, >=, ==, !=, ===, !==

// if

// if (2 == 3) {
//   console.log("hello");
// } else {
//   console.log("world");
// }

// if (2== 3) console.log("hello"), console.log("world"); // not good practice 

// const balance = 650
// if (balance < 500) {
//     console.log("Balance is less than 500");
// }else if (balance < 750){
//     console.log("balance is less than 750");
// }else if (balance < 1000){
//     console.log("balance is less than 1000");
// }else{
//     console.log("balance is greater than 1000");
// }


// const userLoggedIn = true
// const userDebitCard = false
// if (userLoggedIn && userDebitCard){
//     console.log("User can Purchase.");
// }else{
//     console.log("User not valid");
// }

const loggedInGoogle = true
const loggedInEmail = false

if (loggedInGoogle || loggedInEmail){
    console.log("User can Purchase.");
}else{
    console.log("User not valid");
}
