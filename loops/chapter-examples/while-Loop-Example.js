// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++;
// }


// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

// let i = 0;

// while (i < 51) {
//    console.log(i);
//    i--;
// }

// let n = 10;
// let answer = 1;

// while (n > 0) {
//    answer = answer + n;
//    n = n + 1;
// }

// console.log(answer);

let numbers = [ 23, 56, 42, 78, 90, 12 ];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}