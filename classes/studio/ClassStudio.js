//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    const sum = this.scores.reduce((total, score) => total + score, 0);
    const avg = sum / this.scores.length;
    return Math.round(avg * 10) / 10;
  }

  status() {
    const avgScore = this.average();
    if (avgScore >= 90) {
      return "Accepted";
    } else if (avgScore >= 80) {
      return "Reserve";
    } else if (avgScore >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}

const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);

bubbaBear.addScore(83);
console.log(bubbaBear);

console.log(bubbaBear.scores);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(
  `Merry Maltese earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`
);
console.log(
  `Bubba Bear earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`
);
console.log(
  `Glad Gator earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`
);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

function boostStatus(candidate, targetStatus) {
  const maxScore = 100;
  let numTests = 0;

  while (candidate.status() !== targetStatus) {
    candidate.addScore(maxScore);
    numTests++;
    if (candidate.average() >= 100) break;
  }

  return numTests;
}

const testsForReserve = boostStatus(gladGator, "Reserve");
console.log(
  `Number of tests required to reach Reserve status: ${testsForReserve}`
);

const testsForAccepted = boostStatus(gladGator, "Accepted");
console.log(
  `Number of tests required to reach Accepted status: ${testsForAccepted}`
);

gladGator.scores = [75, 78, 62];

console.log(`Current average score: ${gladGator.average()}`);
console.log(`Current status: ${gladGator.status()}`);
