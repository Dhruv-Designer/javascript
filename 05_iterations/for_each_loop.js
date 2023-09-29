const coding = ["java", "js", "cpp", "reacts"];

coding.forEach(function (item) {
//   console.log(item);
});

coding.forEach((item) => {
//   console.log(item);
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
})

const myNewArray = [
    {
        languange: "javascript",
        extension: "js"
    },
    {
        languange: "python",
        extension: "py"
    },
    {
        languange: "HTML",
        extension: "html"
    }
]

myNewArray.forEach( (item)=> {
    console.log(item.extension);
} )
