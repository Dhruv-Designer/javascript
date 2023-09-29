const myObject ={
    js: "Javascript",
    c: "C lanuguage",
    rb: "Ruby",
    py: "Python"
}
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

// For Array 

const myArray = [1,2,3,4,5,6]

for (const key in myArray) {
    console.log(myArray[key]);
}