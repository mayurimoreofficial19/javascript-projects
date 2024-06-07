// Code your crewMass function here:


// Code your fuelRequired function here:


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
 
 let crew = [candidateB,candidateD,candidateF];
 let totalCrew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

//  function orbitCircumference(radius = 2000)
// {
//     let circumference = 2 * 3.14 * radius;
//     return Math.round(circumference);
// }
let o2Array = [];

 function missionDuration(orbitCompleted, orbitRadius, orbitSpeed,arr)
{
    let hrs = ((2 * 3.14 * orbitRadius)/orbitSpeed) * orbitCompleted;
    for(let i = 0; i < arr.length; i++)
      {
          o2Array.push(arr[i].o2Used(hrs)) + o2Array.push(arr[i]);
          o2Array.sort(function(a,b) {return a - b});
      }
     // o2Array.sort(function(a,b) {return a - b});
    return o2Array;
}

console.log(missionDuration(3,2000,28000,totalCrew));

 function crewByMinO2(arr)
 {
  for(let i = 0; i < arr.length; i++)
    {
      arr.sort(function(a,b) {return b - a});
    }
    return arr.splice(0,3);
 }

 
 console.log("Sorted Array : " + crewByMinO2(o2Array));
 