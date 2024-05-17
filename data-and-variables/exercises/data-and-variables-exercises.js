// Declare and assign the variables below

let NameOfTheSpaceShuttle = "Determination"
let ShuttleSpeed = 17500
let distanceToMars = 225000000
let distanceToTheMoon = 384400
let milesPerKilometer = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof NameOfTheSpaceShuttle);
console.log(typeof ShuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToTheMoon);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / ShuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(NameOfTheSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below
let shuttleName = "Moon Trip"
let milesToMoon = distanceToTheMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / ShuttleSpeed;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");

