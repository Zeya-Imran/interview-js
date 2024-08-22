(function () {
  const numbers = [4, 2, 5, 1, 3];
  numbers.sort();

  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  console.log("-----------------------------------------------");
})();

(() => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();

  console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']
  console.log("-----------------------------------------------");
})();

(function decending() {
  const numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => b - a);

  console.log(numbers); // Output: [5, 4, 3, 2, 1]
  console.log("-----------------------------------------------");
})();
