const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach( function(button) {
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target.id);

        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "dark") {
            body.style.backgroundColor = "#252525"
        }

        // switch (e.target.id) {
        //     case "grey" :
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "white" :
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "blue" :
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "yellow" :
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "dark" :
        //         body.style.backgroundColor = "#d2d2d2"
        //         break;
        
        //     default:
        //         break;
        // }
    })
} )