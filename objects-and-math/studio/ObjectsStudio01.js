// Code your selectRandomEntry function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

let newArray = [];
let randnum = [];

function selectRandomEntry(arrIDNumber)
{
    let indexNum = Math.floor(Math.random() * arrIDNumber.length);
    return arrIDNumber[indexNum];
}

//**saving random number in randnum array***

for(let i = 0; i < idNumbers.length; i++)
  {
    randnum.push(selectRandomEntry(idNumbers));
  }
console.log("random array : " + randnum);

//**pushing and selecting first 3 ID's from newarray***
for(let i = 0; i < randnum.length; i++)
  {
    //!newArray.includes(randnum[i]) && newArray.indexOf(randnum[i]) === -1
    if(newArray.includes(randnum[i]) === false)
      {
        newArray.push(randnum[i]);
      }
  }
  let randomArray = [];
  randomArray = newArray.splice(0,3)
  console.log(randomArray);

// Code your buildCrewArray function here:
let crewArray = [];
function buildCrewArray(randomIDArray,candidateObjectArray)
{
    for(let Index = 0; Index < randomIDArray.length; Index++)
      {
        for(let jIndex = 0; jIndex < candidateObjectArray.length; jIndex++)
          {
            if(candidateObjectArray[jIndex].astronautID === randomIDArray[Index])
              {
                crewArray.push(candidateObjectArray[jIndex]);
              }
          }
      }
      return crewArray;
}

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let crewArrayFinal = buildCrewArray(randomArray,animals);

// Code your template literal and console.log statements:
console.log(`${crewArrayFinal[0].name}, ${crewArrayFinal[1].name}, and ${crewArrayFinal[2].name} are going to space!`);
