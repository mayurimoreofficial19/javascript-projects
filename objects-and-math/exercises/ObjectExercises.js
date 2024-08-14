let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 2,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 3,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let dog = {
  name: "lerory",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 4,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let waterBear = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

function crewReports(animal) {
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(dog));
console.log(crewReports(waterBear));

console.log("*******************************************************");

let arr = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

function fitnessTest(participant) {
  let result = [];
  let numberOfTurns = 0;
  let numberofSteps = 0;

  for (let i = 0; i < participant.length; i++) {
    while (numberofSteps <= 20) {
      numberofSteps = participant[i].move();
      numberOfTurns++;
    }
    result.push(
      `${participant[i].name} took ${numberOfTurns} turns to take 20 steps.`
    );
  }
  return result;
}

console.log(fitnessTest(arr));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
