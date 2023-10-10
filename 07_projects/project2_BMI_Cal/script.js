const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const conclusion = document.querySelector('.conclusion')
    
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please Enter Valid Height Details'
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please Enter Valid Weight Details'
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show results 
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6 ) {
            // conclusion = document.createElement('span')
            conclusion.innerHTML = "Under Weight"
            // form.appendChild(conclusion)
        }
        if (bmi > 18.6 && bmi <= 24.9) {
            // conclusion = document.createElement('span')
            conclusion.innerHTML = "Normal Range"
            // form.appendChild(conclusion)
        }
        
        if (bmi > 24.9) {
            // conclusion = document.createElement('span')
            conclusion.innerHTML = "Over Weight"
            // form.appendChild(conclusion)
        }
        
    }
})