//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let tripledValue = function(value)
{
    value = '';
    if(typeof value === 'number')
        {
            return value * 3;
        }
        else if(typeof value === 'string')
            {
                return 'Arrrr';
            }
            else
            {
                return value;
            }
}

console.log(tripledValue());


/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let mapArray = arr.map(function(arrayValue)
{
            if(typeof arrayValue === "number")
                {
                    arrayValue = arrayValue * 3;
                }
               else if(typeof arrayValue === 'string')
                {
                    arrayValue = 'ARRR!';
                }
                else
                {
                    arrayValue;
                }
        return arrayValue;
});

console.log(arr);
console.log(mapArray);





