let Weight = prompt('Enter your weight in kg?');
let Height = prompt('Enter your height in meters?');

let x = Weight;
let y = Height * Height;

let c = x / y;
console.log(c)

let z = c >=25;
console.log(z);

let Overweight;
Overweight = alert('Are you overweight?:' + z);

// Lesson Variant
// const weight = prompt('Enter your weight in kilograms');
// const height = prompt('Enter your height in meters');

// const bodyMassIndex = weight /
// Math.pow(height, 2);
// const areYouOverweight = bodyMassIndex >= 25;

// console.log(bodyMassIndex);
// console.log(areYouOverweight);

// alert('Are you overweight? ' + areYouOverweight);