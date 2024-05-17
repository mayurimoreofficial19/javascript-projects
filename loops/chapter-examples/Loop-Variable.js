// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

// for (let i = 0; i < 51; i++) {
//    console.log(i);
//  }

//  //expression with i+2
//  for (let i = 0; i < 51; i=i+2) {
//   console.log(i);
// }

// //expression i--
// for (let i = 0; i < 51; i--) {
//   console.log(i);
// }

//Check Your Understanding

let phrase = "Chili Cook-off";

console.log("phrase length : " + phrase.length);

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

