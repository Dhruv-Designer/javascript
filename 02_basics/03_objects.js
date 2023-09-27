// Singleton
// Object.create

// Objects Literal & Constractural 

// Objects Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "test",
    age: 18,
    [mySym]: "mykey1", // symbol written in object like this
    location: "surat",
    email: "test@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]

}

console.log(jsUser.name); // also good but when key written into "" then it doesn't work
console.log(jsUser["location"]); // clean method to access Objects
console.log(jsUser[mySym]); //  mykey1
console.log(typeof jsUser[mySym]); //  string

// Change Value in object 

jsUser.email = "test@yahho.com"

// Object.freeze(jsUser) // to freeze object so no one can change value in object

jsUser.email = "test@outlook.com"

// console.log(jsUser);

jsUser.newFunction = function(){
    console.log("hello user");
}
jsUser.newFunction2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.newFunction());
console.log(jsUser.newFunction2());
