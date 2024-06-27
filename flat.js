//Flattening Arrays for Data Processing
const nestedArray = [[1, 2], [3, 4, [5, 6]], [7, 8]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//Flattening Arrays of Mixed Depths
(function(){
const array = [1, [2, 3], [[4, 5]]];
const flatArray = array.flat();
console.log(flatArray); // Output: [1, 2, 3, [4, 5]]

})()

