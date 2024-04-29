// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 	850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100 %";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount <= 7)
{
    console.log("Alter : There should not be more than 7 astronauts");
}
// add logic below to verify all astronauts are ready
if(astronautStatus === "ready")
{
    console.log("Astronauts are ready");
}
else
{   
    console.log("Warning.Not ready")
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg <= maximumMassLimit)
{
    console.log("Total mass is in limit");
}
else
{
    console.log("Warning : Mass limit is exceeding");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 || fuelTempCelsius <= -150)
{
    console.log("Fuel Temperature is in appropriate range");
}
else {
    console.log("Alert : Fuel temperature is not in proper range");
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel === "100%")
{
    console.log("Ready to go");
}
else
{
    console.log("Please fill the fuel");
}

// add logic below to verify the weather status is clear
if(weatherStatus === "clear")
{
    console.log("Weather is clear.Perfect day for launch");
}
else
{
    console.log("Abort the launch");
}

// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initiating space shuttle launch sequence.");
console.log("---------------------------------------------------------------");
console.log("Date : " , date);
console.log("Time : " , time);
console.log("Astronaut Count : " , astronautCount);
console.log("Crew Mass : " , crewMassKg , " Kg");
console.log("Fuel Mass Kg : " , fuelMassKg , " Kg");
console.log("Shuttle Mass kg : " , shuttleMassKg , " Kg");
console.log("Total Mass Kg : " , totalMassKg , " Kg");
console.log("Fuel Temp Celsius : " , fuelTempCelsius , "°C");
console.log("Weather Status : " , weatherStatus);
console.log("----------------------------------------------------------------");
console.log("Have a safe trip astronauts!");
