// //Write a function that takes an array of numbers and returns the sum of all positive numbers in the array

// function sumOfArray(arr) {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1 && arr[0] <= 0) return 0;

//   const sum_of_array = arr.reduce(
//     (sum, cvalue) => (cvalue > 0 ? sum + cvalue : sum),
//     0
//   );

//   return sum_of_array;
// }

// console.log(sumOfArray([-10, -5, -8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 55
// console.log(sumOfArray([-10, -5, -8])); // Output: 0
// console.log(sumOfArray([])); // Output: 0
// console.log(sumOfArray([10])); // Output: 10
// console.log(sumOfArray([-10])); // Output: 0

// //Given an array of strings, filter out all strings that have a length greater than 5 characters.
// const inputArray = ["apple", "banana", "pear", "grape", "watermelon", "kiwi"];

// function filterLongetestString(arr) {
//   console.log(arr.filter((str) => str.length >= 5));
// }

// Write, Edit and Run your Javascript code using JS Online Compiler

// find the highest price product
const products = [
  { name: "Product1", price: 10 },
  { name: "Product2", price: 20 },
  { name: "Product3", price: 30 },
  { name: "Product4", price: 40 },
  { name: "Product5", price: 50 },
];

let highestPriceProduct = products.reduce((maxProduct, currentProduct) => {
  return maxProduct.price > currentProduct.price ? maxProduct : currentProduct;
}, products[0]);

console.log(highestPriceProduct);
