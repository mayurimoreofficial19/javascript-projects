const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (isValid(userInput.charAt(0) === 'a')) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isVowel = function(ch)
{
    if(ch === 'a' || ch === 'o' || ch === 'i' || ch === 'e' || ch === 'u')
      {
          return `${ch} is a vowel`;
      }
      return false;
}

console.log(getValidInput("Enter one character : ",isVowel));
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
