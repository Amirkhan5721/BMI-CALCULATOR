var weightInput = document.getElementById("weight");
var heightInput = document.getElementById("height");
var calculateBtn = document.getElementById("calculate-btn");
var bmiResult = document.getElementById("bmi-result");
var bmiCategory = document.getElementById("bmi-category");


// Add event Listener to calculate button

calculateBtn.addEventListener("click", bmiCalculator);

function bmiCalculator (e) {
    e.preventDefault();
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    
    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please Enter valid weight and height values");
        return;
    }

    
}
