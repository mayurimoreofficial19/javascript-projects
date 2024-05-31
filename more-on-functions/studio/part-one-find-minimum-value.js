//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(/* your code here */);

let newArray = [];

function sortArray(arr) {
    //step 1 find the smallest item in the array
    //step 2 take it out from the array and put it into new array
    //step 3 find the next smallest item

    while (arr.length !== 0) {

       
            let minimumIndex = 0;

            for (let jIndex = 1; jIndex < arr.length; jIndex++) {
                // console.log("minimum index", arr[minimumIndex]);
                // console.log("jindex", arr[jIndex]);
                if (arr[minimumIndex] > arr[jIndex]) {

                    minimumIndex = jIndex;
                }
            }
            newArray.push(arr[minimumIndex]);
            arr.splice(minimumIndex, 1);


        }
        return newArray;
}
console.log("Sorted Array : " , sortArray(nums1));
console.log("Sorted Array : " , sortArray(nums2));
console.log("Sorted Array : " , sortArray(nums3));
// console.log("nums1 : " + nums1);


