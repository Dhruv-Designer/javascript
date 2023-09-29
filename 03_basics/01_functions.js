function test() {
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("T");
}

// test() // bsics of functions

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5);

// // addTwoNumbers(3, 5);

// console.log(result); //8 undefined

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumbers(3, 5);

// console.log("Result:", result); //8

function loginUserMessage(username) {
  return `${username} just logged in.`;
}
console.log(loginUserMessage("test")); //  test just logged in.

function calculateCartPrice(...num1) {
  // 200 //  ... rest operator it will add multiple value.
  return num1;
}

// console.log(calculateCartPrice(200,500,100)); // [ 200, 500, 100 ]

// function with Object

const user = {
  username: "test",
  price: 199,
};

function handleObject(anyObject) {
  console.log(`${anyObject.username} has price ${anyObject.price}.`);
}

// handleObject(user)  // test has price 199. or

handleObject({ username: "ram", price: 200 }); //  ram has price 200.

const myNewArry = [200, 400, 600, 100];

function retunSecondValue(getArray) {
  return getArray[1];
}

// console.log(retunSecondValue(myNewArry)); //400 or

console.log(retunSecondValue([200, 400, 600, 100])); //400
