/*The .slice() method in JavaScript is used to extract a section of an array and return it as a new array. 
It does not modify the original array.

**** Syntax

***  array.slice(start, end)

** start (optional): The index at which to begin extraction.
** If omitted, it defaults to 0.
** end (optional): The index before which to end extraction.
** The slice extracts up to but not including end. If omitted,
** it extracts through the end of the array.

*/

//1 Basic Usage
(function basic() {
  const array = [1, 2, 3, 4, 5];
  const sliced = array.slice(1, 3);
  console.log(sliced); // Output: [2, 3]
  console.log(array); // Output: [1, 2, 3, 4, 5]
})();

//2 Omitting the end Parameter
(function Omitting() {
  const array = [1, 2, 3, 4, 5];
  const sliced = array.slice(2);
  console.log(sliced); // Output: [3, 4, 5]
  console.log(array); // Output: [1, 2, 3, 4, 5]
})();

//3 Using Negative Indices

(function Negative() {
  const array = [1, 2, 3, 4, 5];
  const sliced = array.slice(-3, -1);
  console.log(sliced); // Output: [3, 4]
  console.log(array); // Output: [1, 2, 3, 4, 5]
})();

console.log("------------Practical Use Cases------------------");
//4 Copying an Array
(function Copying() {
  const array = [1, 2, 3, 4, 5];
  const copy = array.slice();
  console.log(copy); // Output: [1, 2, 3, 4, 5]
})();

//5 Extracting a Subarray
(function Subarray() {
  console.log("subarray \n");
  const array = ["a", "b", "c", "d", "e"];
  const subarray = array.slice(1, 4);
  console.log(subarray); // Output: ['b', 'c', 'd']
})();
