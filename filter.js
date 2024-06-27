/*

const newArray = array.filter(callback(element, index, array), thisArg);
it will new Array

*/

// Suppose you have an array of numbers and you want to filter out only the even numbers:

(function findEvenNumber() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log("orignal array", numbers);
  console.log("list of even number", evenNumbers); // Output: [2, 4, 6]
  console.log("--------------------------------------------------------");
})();

(function inStock() {
  const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
  ];
  console.log("Products list here ", products);
  const inStockProducts = products.filter((product) => product.inStock);
  console.log("inStock list here ", inStockProducts);

  console.log("--------------------------------------------------------");
})();
