document.getElementById('convertButton').addEventListener('click', function () {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let convertedTemperature = '';
    let outputUnit = '';

    if (isNaN(inputTemperature)) {
        document.getElementById('outputTemperature').innerText = 'Please enter a valid number.';
        return;
    }

    if (inputUnit === 'Celsius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        outputUnit = 'Fahrenheit';
        document.getElementById('outputTemperature').innerText = `${inputTemperature} °C = ${convertedTemperature.toFixed(2)} °F`;
        convertedTemperature = inputTemperature + 273.15;
        outputUnit = 'Kelvin';
        document.getElementById('outputTemperature').innerText += `\n${inputTemperature} °C = ${convertedTemperature.toFixed(2)} K`;
    } else if (inputUnit === 'Fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        outputUnit = 'Celsius';
        document.getElementById('outputTemperature').innerText = `${inputTemperature} °F = ${convertedTemperature.toFixed(2)} °C`;
        convertedTemperature = (inputTemperature + 459.67) * 5 / 9;
        outputUnit = 'Kelvin';
        document.getElementById('outputTemperature').innerText += `\n${inputTemperature} °F = ${convertedTemperature.toFixed(2)} K`;
    } else if (inputUnit === 'Kelvin') {
        convertedTemperature = inputTemperature - 273.15;
        outputUnit = 'Celsius';
        document.getElementById('outputTemperature').innerText = `${inputTemperature} K = ${convertedTemperature.toFixed(2)} °C`;
        convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
        outputUnit = 'Fahrenheit';
        document.getElementById('outputTemperature').innerText += `\n${inputTemperature} K = ${convertedTemperature.toFixed(2)} °F`;
    } else {
        document.getElementById('outputTemperature').innerText = 'Invalid unit.';
    }
});
