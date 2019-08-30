// This is Kelvin
const kelvin = 293;
// This is Celsius
let celsius = kelvin - 273;
// This is Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// We need fahrenheit to be floor
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);