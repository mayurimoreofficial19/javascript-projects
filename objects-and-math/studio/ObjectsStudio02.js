// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000)
{
    let circumference = 2 * 3.14 * radius;
    return Math.round(circumference);
}
console.log("The number of orbits completed : " + orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(orbitCompleted, orbitRadius, orbitSpeed)
{
    let numOfOrbits = (orbitCircumference(orbitRadius)/orbitSpeed) * orbitCompleted;
    return Math.round(numOfOrbits);
}
console.log(`The mission will travel ${orbitCircumference()} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arrIDNumber)
{
    let indexNum = Math.floor(Math.random() * arrIDNumber.length);
    return arrIDNumber[indexNum];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidateObject)
{
    let spaceWalkHrs = missionDuration(3,5000,68000);
    let crewArray = [];
    
    for(let Index = 0; Index < candidateObject.length; Index++)
      {
        crewArray.push(`${candidateObject[Index].name} will perform the spacewalk, which will last ${spaceWalkHrs} hours and require ${Math.round(candidateObject[Index].o2Used(spaceWalkHrs))} kg of oxygen.`);
      }
      return crewArray;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(crew));