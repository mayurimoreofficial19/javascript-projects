let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log("Length of a Number ");
let numOfDigit = num.toString().length;
console.log(numOfDigit);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log("Length of a Decimal Number ");
let decimalNum = 123.45;
let decimalValue = decimalNum.toString().length-1;

console.log(decimalValue);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if(num.toString().includes('.'))
    {
        console.log(num.toString().length-1);
    }
    else
    {
        console.log(num.toString().length);
    }


