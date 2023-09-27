// const tinderUser = new Object() // Singleton Object

const tinderUser = {}; // Non singleton object

tinderUser.Id = "123abc";
tinderUser.name = "xyz";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "test@google.com",
  fullname: {
    userName: {
      firstName: "hello",
      lastName: "world",
    },
  },
};
// console.log(regularUser.fullname.userName.firstName); // hello

// Merging two Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

let obj3 = { obj1, obj2 }; //{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } } not expected

// SourceBuffer, we used assign to merge objects in JSON.

// obj3 = Object.assign({}, obj1, obj2); // { a: 1, b: 2, c: 3, d: 4 }

obj3 = {...obj1, ...obj2} // { a: 1, b: 2, c: 3, d: 4 }

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'Id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'xyz', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'Id', '123abc' ], [ 'name', 'xyz' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // True => to check if the value present or not.
// console.log(tinderUser.hasOwnProperty("isLogged")); // False =>to check if the value present or not.


// Destructuring of Objects 

const course = {
    courseName: "javascript",
    coursePrice: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor} = course // suntax to short the calling of object value.
console.log(courseInstructor); // hitesh


const {courseInstructor: instructor} = course // suntax to short the calling of object value.
console.log(instructor); // hitesh

// Json Format 

// {
//     "name": "hitesh" ,
//     "coursename": "js",
//     "price": "999"
// }

