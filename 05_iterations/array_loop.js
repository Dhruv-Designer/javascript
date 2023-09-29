// for of

let myArray = [1,2,3,4,5]
for (const arr of myArray) {
    // console.log(`${arr}`);
}

let greetings = "Hello World !"
for (const greet of greetings) {
    // console.log(`Value of Each Greet ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('NP', 'Nepal')
map.set('FR', 'France')

// console.log(map);

for (const key of map) {
    // console.log(key); 
}

for (const [key, value] of map) {
    // console.log(key, ":", value); 
}

// OBJECT 

// object are not iterable in forof loop 