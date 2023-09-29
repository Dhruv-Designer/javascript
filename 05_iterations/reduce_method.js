const myNums = [1, 2, 3];

// const myNewNums = myNums.reduce(function (acc, curval) {
//   console.log(`acc value is: ${acc} and curr value is: ${curval}`);
//   return acc + curval;
// }, 0);

const myNewNums = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myNewNums);

// ===========================

const course = [
  {
    coursename: "python",
    price: 199,
  },
  {
    coursename: "java",
    price: 299,
  },
  {
    coursename: "java script",
    price: 399,
  },
  {
    coursename: "html",
    price: 200,
  },
];
const shoppingTotal = course.reduce((acc, item) => acc + item.price, 0);

console.log(shoppingTotal);
