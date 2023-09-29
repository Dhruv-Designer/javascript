// for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

// Print tables

for (i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value ${i}`);
  for (j = 1; j <= 10; j++) {
    // console.log( i + "*" + j + "=" + i*j);
  }
}

let myArray = ["Batman", "Superman", "Flash"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

for (let index = 1; index < 10; index++) {
  if (index == 5) {
    // console.log(`Detected ${index}`);
    break;
  }
  //   console.log(`value of index is ${index}`);
}

for (let index = 1; index < 10; index++) {
  if (index == 5) {
    // console.log(`Detected ${index}`);
    continue;
  }
//   console.log(`value of index is ${index}`);
}
