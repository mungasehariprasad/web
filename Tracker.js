let totalSteps = 0;
let totalCalories = 0;
let totalWater = 0;

function addSteps() {
    const stepInput = document.getElementById('stepInput');
    const steps = parseInt(stepInput.value);

    if (!isNaN(steps)) {
        totalSteps += steps;
        document.getElementById('totalSteps').innerText = totalSteps;
        stepInput.value = '';
    }
}

function addCalories() {
    const calorieInput = document.getElementById('calorieInput');
    const calories = parseInt(calorieInput.value);

    if (!isNaN(calories)) {
        totalCalories += calories;
        document.getElementById('totalCalories').innerText = totalCalories;
        calorieInput.value = '';
    }
}

function addWater() {
    const waterInput = document.getElementById('waterInput');
    const waterIntake = parseInt(waterInput.value);

    if (!isNaN(waterIntake)) {
        totalWater += waterIntake;
        document.getElementById('totalWater').innerText = totalWater;
        waterInput.value = '';
    }
}
