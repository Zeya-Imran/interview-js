//1 Concatenating Two Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArrays = arr1.concat(arr2);
console.log(combinedArrays); // Output: [1, 2, 3, 4, 5, 6]

//2 Concatenating Multiple Arrays
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const combinedArray = array1.concat(array2, array3);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//3 Concatenating Arrays with Values
const array = [1, 2, 3];
const combined = array1.concat([4, 5], 6, [7, 8]);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//4 Using concat() with Empty Arrays
const arr = [1, 2, 3];
const emptyArray = [];
const combinedArr = array1.concat(emptyArray);
console.log(combinedArr); // Output: [1, 2, 3]

//Example with Spread Operator (Alternative Method)
const ar = [1, 2, 3];
const ar2 = [4, 5, 6];
const newArr = [...ar, ...ar2];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
