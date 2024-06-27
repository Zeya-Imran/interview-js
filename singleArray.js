// let arr = [[[1, 2, 3]], [[50, 60, 70]], [[10, 20]]];
// let finalArry = arr.toString().split(",");
// let result = finalArry.map(Number);
// console.log(result);

let arr = [[[1, 2, 3]], [[50, 60, 70]], [[10, 20]], [[100, 200]]];
let flattenedArray = arr.flat(Infinity);
console.log(flattenedArray);

const arr1 = arr.toString().map(Number);
console.log(arr1);
