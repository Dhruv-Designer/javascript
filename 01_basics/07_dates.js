let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let otherDate = new Date(2023,00,15)
// otherDate = new Date(2023,00,15,5,3)
// otherDate = new Date("1-14-23")
// console.log(otherDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // it gives value in mini seconds

// console.log(Date.now() / 1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1); // +1 is generally added bcz it counts from 0
// console.log(newDate.getDate().toLocaleString());

let specificDate = newDate.toLocaleString('default',{
    weekday: 'long',
    month: "2-digit"
})
console.log(specificDate);