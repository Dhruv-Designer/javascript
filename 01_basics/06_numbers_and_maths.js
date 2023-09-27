const score = 400
// console.log(score);

const balance = new Number(score) // specifically  convert to NUMBER
// console.log(balance);

// console.log(balance.toString().length); // convert NUMBER into STRING and checks it LENGTH.

// console.log(balance.toFixed(2)); // after decimal point ..fix digit. EX.  400.00

const otherString = 125.458

// console.log(otherString.toPrecision(3)); // 125
// console.log(otherString.toPrecision(2)); // 1.3e+2
// console.log(otherString.toPrecision(4)); // 125.5

const hundreds = 1000000

// console.log(hundreds.toLocaleString());  // 1,000,000 By default it shows on US format
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 Now, it converts into Indian format

// ===================== Maths ===========================================

// console.log(Math);

// console.log(Math.abs(-5)); // it returns ABSOLUTE value..means convert NEGATIVE value to POSITIVE value.

// console.log(Math.round(4.6)); // it return round off value // 5
// console.log(Math.ceil(4.2)); // it return upper side vaue like TOP CELING // 5
// console.log(Math.floor(4.9)); // it return lower side vaue like LOWER FLOOR // 4
// console.log(Math.sqrt(625)); // it return SQUARE ROOT value of given value.
// console.log(Math.min(2,5,8,9)); // it return minimum value. 2
// console.log(Math.max(2,5,8,9)); // it return maximum value. 9

console.log(Math.random()); // Value of random is always range between 0-1.

console.log(Math.random() * 10 + 1); // Now, value of random is return more than 0. bcz we multiply it with 10 and add +1 so that even 0.02 type of value return it will also convert to more than 1

console.log(Math.floor((Math.random() * 10 + 1))); // value is round off to lowerside
console.log(Math.floor(((Math.random() * 10) + 1))); // code readability.

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1 )) + min)); // inthis case return value is between min and max.