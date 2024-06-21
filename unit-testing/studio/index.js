let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (number) {},
};

function launchOutput(number) {
  const divisibleBy2 = divisibleBy2 % 2 == 0;
  const divisibleBy3 = divisibleBy3 % 3 == 0;
  const divisibleBy5 = divisibleBy5 % 5 == 0;

  if (divisibleBy2 && divisibleBy3 && divisibleBy5) {
    return "LaunchCode Rocks!";
  } else if (divisibleBy2 && divisibleBy3) {
    return "LaunchCode!";
  } else if (divisibleBy3 && divisibleBy5) {
    return "Code Rocks!";
  } else if (divisibleBy2 && divisibleBy5) {
    return "Launch Rocks!";
  } else if (divisibleBy2) {
    return "Launch!";
  } else if (divisibleBy3) {
    return "Code!";
  } else if (divisibleBy5) {
    return "Rocks!";
  } else {
    return "Rutabagas! That doesn't work.";
  }
}
module.exports = launchcode;
