/**
 * The reduce() method in JavaScript is used to execute a reducer function on each element of the array,
 * resulting in a single output value.
 * This method is particularly useful for accumulating values, such as summing numbers, 
 * concatenating strings, or computing a product.
 * 
 * Syntax
 * const result = array.reduce((accumulator, currentValue, index, array) => {
  // reducer logic
}, initialValue);

 */

//example
(function () {
  const arr = [, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sumOfArray = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sumOfArray);
})();

//6. Removing Duplicates from an Array

(function () {
  const numbers = [1, 2, 3, 4, 5, 5, 4, 3];
  const uniqueNumbers = numbers.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  console.log(uniqueNumbers);
})();

// shoping cart calclution

/**
 * acc -> this is initital value of cartTotal which passed as 0 last argument
 * product is current value in iteration
 */

(() => {
  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 400 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 100 },
    { name: "Mouse", price: 50 },
    { name: "Printer", price: 200 },
    { name: "Headphones", price: 150 },
    { name: "Speakers", price: 250 },
    { name: "Webcam", price: 75 },
  ];
  const cartTotal = products.reduce((acc, product) => acc + product.price, 0);
  console.log(cartTotal);
})();
