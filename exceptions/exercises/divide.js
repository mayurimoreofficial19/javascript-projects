// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numerator, denominator) {
  if (denominator == 0) {
    throw new Error("Attempted to divide by zero.");
  }
  return numerator / denominator;
}

try {
  console.log(divide(25, 5));
  console.log(divide(7, 0));
} catch (err) {
  console.log("Error Occured : " + err.message);
}
