let raceNumber = Math.floor(Math.random() * 1000);

let registered = false;
let age = 19;

if (age > 18 && registered) {
  raceNumber += 1000;
}

if (age > 18 && registered) {
  console.log(`Runner number ${raceNumber} will race at 9:30 am.`);
} else if (age > 18 && !registered) {
  console.log(`Runner number ${raceNumber} will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner number ${raceNumber} will race at 12:30 am.`);
} else if (age === 18) {
  console.log(`Runner number ${raceNumber} please see registration desk!`);
} 