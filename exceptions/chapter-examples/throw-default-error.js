function division(x, y) {
  if (y == 0) {
    throw new Error("You cannot divide by zero!");
  }
  return x / y;
}

try {
  console.log(division(10, 5));
  console.log(division(3, 0));
} catch (err) {
  console.log("Error Occurred : " + err.message);
}
