//Basic Usage
const array = [1, 2, 3, 4];
const joinedString = array.join();
console.log(joinedString); // Output: "1,2,3,4"

//Using a Custom Separator
const arr = [1, 2, 3, 4];
const joinedStrings = array.join(" - ");
console.log(joinedStrings); // Output: "1 - 2 - 3 - 4"

//Joining an Array of Strings
const words = ["Hello", "world"];
const sentence = words.join(" ");
console.log(sentence); // Output: "Hello world"

//Joining with an Empty String
const characters = ["H", "e", "l", "l", "o"];
const word = characters.join("");
console.log(word); // Output: "Hello"

//Joining an Array with Different Data Types
const mixedArray = [1, "two", 3, "four"];
const joinString = mixedArray.join(" | ");
console.log(joinString); // Output: "1 | two | 3 | four"
