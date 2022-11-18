const weight = prompt('Enter your weight in kg?');
const height = prompt('Enter your height in meters?');

let resultBMI = weight / Math.pow(height, 2);

if(resultBMI <=25) {
   alert('Your weight is normal');
   console.log('Your weight is normal');
} else  {
   alert(`Your extra BMI more than: ${resultBMI - 25}`);
   console.log(`Your extra BMI more than: ${resultBMI - 25}`);
}