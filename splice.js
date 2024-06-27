//Removing Elements

const arr = [1, 2, 3, 4, 5];
const rem = arr.splice(2, 2);
console.log(arr); // Output: [1, 2, 5]
console.log(rem); // Output: [3, 4]
/*
explain 
The splice() method starts at index 2 and removes 2 elements (3 and 4).
The original array is modified to [1, 2, 5].
The method returns an array of removed elements, [3, 4].
*/

//Adding Elements
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, "a", "b");
console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]

/*
explain 
The splice() method starts at index 2 and removes 0 elements.
'a' and 'b' are added at index 2.
The original array is modified to [1, 2, 'a', 'b', 3, 4, 5].
Replacing Elements
*/

//Replacing Elements
const array1 = [1, 2, 3, 4, 5];
const removed1 = array1.splice(2, 2, "a", "b");
console.log(array1); // Output: [1, 2, 'a', 'b', 5]
console.log(removed1); // Output: [3, 4]

/*
explain 
The splice() method starts at index 2 and removes 2 elements (3 and 4).
'a' and 'b' are added at index 2.
The original array is modified to [1, 2, 'a', 'b', 5].
The method returns an array of removed elements, [3, 4].
Removing All Elements from a Start Index
*/

//Removing All Elements from a Start Index
const array2 = [1, 2, 3, 4, 5];
const removed2 = array2.splice(2);
console.log(array2); // Output: [1, 2]
console.log(removed2); // Output: [3, 4, 5]

/*
explain 
The splice() method starts at index 2 and removes all elements from that index to the end of the array.
The original array is modified to [1, 2].
The method returns an array of removed elements, [3, 4, 5]
*/
