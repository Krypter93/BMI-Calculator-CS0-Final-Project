let button = document.querySelector('#calc');
let weight = document.querySelector('#weight');
let feet = document.querySelector('#height');
let  inches = document.querySelector('#height2');
let result = document.querySelector('.result');
let clear = document.querySelector('#clear');

button.addEventListener('click', () => { 
    //Validation:
    if(!weight.value || weight.value < 1){
        alert("Weight required, positives only");
    }else if(!feet.value || feet.value < 1){
        alert("Feet required, positives only");
    }else if(!inches.value || inches.value < 0){
        alert("Inches required, positives only");
    }else{
    //Convert to inches:
    let height = parseInt(((feet.value) * 12)) + parseInt(inches.value);
    
    //Calculate IMC:
    let imc = Number((Number(weight.value) / Math.pow(height, 2)) * 703).toFixed(2);    
    imc = Number(imc);
    console.log(typeof imc)

    if(imc < 16){
        result.textContent = `Severely Underweight - BMI: ${imc}`;
    }else if(imc >= 16.0 && imc <=16.9){
        result.textContent = `Moderately low weight - BMI: ${imc}`;
    }else if(imc >= 17.0 && imc <= 18.5){
        result.textContent = `Slightly lower than normal weight - BMI: ${imc}`;
    }else if(imc >= 18.6 && imc <= 24.9){
        result.textContent = `Normal Weight - BMI: ${imc}`;
    }else if(imc >= 25.0 && imc <= 29.9){
        result.textContent = ` Overweight - BMI: ${imc}`;
    }else if(imc >= 30.0 && imc <= 34.9){
        result.textContent = ` Obesity Grade I - BMI: ${imc}`;
    }else if(imc >= 35.0 && imc <= 39.9){
        result.textContent = ` Obesity Grade II - BMI: ${imc}`;
    }else if(imc > 40){
        result.textContent = ` Obesity Grade III - BMI: ${imc}`;
    }
}

})

clear.addEventListener('click', () =>{
    weight.value = "";
    feet.value = "";
    inches.value = "";
    result.textContent = "";
})