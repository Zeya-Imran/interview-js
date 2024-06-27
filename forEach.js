// Basic Iteration

(() => {
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number) => {
    console.log(number); // Logs 1, 2, 3, 4, 5
  });
})();

//Using Index and Array Arguments
(() => {
  console.log("------------------------------------");
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number, index, array) => {
    console.log(`Index: ${index}, Value: ${number}, Array: ${array}`);
  });
})();

//Using thisArg
(function () {
  console.log("----------multiplication------------");
  const obj = {
    multiplier: 2,
  };
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function (number) {
    console.log(number * this.multiplier); // Logs 2, 4, 6, 8, 10
  }, obj);
})();

// Logging Each Element
console.log("---------------printing---------------");
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit)); // Logs 'apple', 'banana', 'cherry'

//Updating Each Element
console.log("---------------doubled---------------");
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach((number) => {
  doubled.push(number * 2);
});
console.log(doubled); // [2, 4, 6, 8, 10]

//Summing Elements

(() => {
  console.log("---------------sunof---------------");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  console.log(numbers);
  console.log(sum); // 15
})();
