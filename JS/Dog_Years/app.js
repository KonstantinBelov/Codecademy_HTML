// Create a variable named myAge, and set it equal to your age as a number.
const myAge = 21;
// Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;
earlyYears *= 10.5;
// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears.
let laterYears = myAge - 2;
// Calculate the number of dog years accounted for by your later years.
laterYears *= 4;
// Calculate sum of earlyYears and laterYears:
let myAgeInDogYears = earlyYears + laterYears;
// Create a variable for name but in lower case:
let myName = 'John'.toLowerCase();
// Write a console.log statement that displays your name and age in dog years. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
