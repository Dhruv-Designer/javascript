const user = {
  username: "test",
  price: 200,

  welcomeMessagge: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

// user.welcomeMessagge() // test, welcome to website

// console.log(this); //{}

// function one() {
//     let username = "test"
//     console.log(this.username);
// }
// one() // undefined

// const one = function(){
//     let username = "test"
//     console.log(this.username);
// }

// const one = () => { // arrow function syntax
//     let username = "test"
//     console.log(this.username);
// }

// one()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2);


// const addTwo = (num1, num2) => ({username: "test"}); 

console.log(addTwo(4, 5));

