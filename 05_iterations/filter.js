const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewArray = myArray.filter((num) => num > 4);

// console.log(myNewArray);

// const myNewArray = myArray.filter((num) => {
//     return num > 4
// });
// console.log(myNewArray);

// ===========================

const myNewArray = [];

myArray.forEach((num) => {
  if (num > 4) {
    myNewArray.push(num);
  }
});
// console.log(myNewArray);

// ==================================

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

let userOutput = characters.filter((item) => item.gender === "male");

userOutput = characters.filter((item) => item.height >= 150);

userOutput = characters.filter((item) => {
  return item.mass >= 50 && item.height >= 150;
});

console.log(userOutput);
