// golbal scope
// block scope

// let a = 10
// const b = 20
// var c = 30

if (true) {
  let a = 100;
  const b = 25;
  var c = 50;
}
// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//   const username = "test";
//   function two() {
//     const website = "testing";
//     console.log(website);
//   }
//   two();
//   console.log(username);
// }

// one()

// if(true){
//     const one = "website"
//     if (one === "website") {
//         two = "login"
//         console.log(two);
//     }
//     console.log(one);
// }


// ==========================Interesting ===============================

console.log(one(5)); // it will work finely
function one(num){
    return num + 1
}


console.log(two(5)); // it will show error
const two = function(num){
    return num +2
}


