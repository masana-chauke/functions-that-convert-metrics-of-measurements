function convertPoundsToKg(pounds){
    const kg = pounds / 2.2046;
    return kg;
}
function convertInchesToCentimeters(inches){
    const centimeters = inches * 2.54;
    return centimeters;
}
function convertFahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
function convertFeetToMeters(feet){
    const meters = feet / 3.281;
    return meters;
}
console.log(convertPoundsToKg(600));
console.log(convertInchesToCentimeters(8));
console.log(convertFahrenheitToCelsius(50));
console.log(convertFeetToMeters(5));
 