// Array Example

const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3)); // Output: 2 (index of the first occurrence of 3 in the array)
console.log(array.indexOf(10)); // Output: -1 (10 is not found in the array)
console.log(array.indexOf(1, 1)); // Output: -1 (search starts from index 1, but 1 is found at index 0)

// string example

const str = "Hello, world!";
console.log(str.indexOf("world")); // Output: 7 (index of the substring 'world' in the string)
console.log(str.indexOf("Earth")); // Output: -1 ('Earth' is not found in the string)
console.log(str.indexOf("o", 5)); // Output: 7 (search starts from index 5)

//Use Cases
console.log("--------------Use Cases----------------");

// Checking Element Existence in an Array
const fruits = ["apple", "banana", "cherry"];
if (fruits.indexOf("banana") !== -1) {
  console.log("Found banana!");
}

//Replacing Text in a String
let sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";
const replaceWord = "cat";
const index = sentence.indexOf(word);
if (index !== -1) {
  sentence =
    sentence.slice(0, index) +
    replaceWord +
    sentence.slice(index + word.length);
}
console.log(sentence); // Output: "The quick brown cat jumps over the lazy dog"
console.log("----------------------------------------------------------------");

//searching for substring
(() => {
  const paragraph = "JavaScript is a powerful scripting language.";
  const searchTerm = "scripting";
  const index = paragraph.indexOf(searchTerm);
  if (index !== -1) {
    console.log(`'${searchTerm}' found at index ${index}`);
  } else {
    console.log(`'${searchTerm}' not found`);
  }
})();
