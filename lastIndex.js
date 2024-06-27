//Finding the Last Occurrence of an Element in an Array

(function lastArrayElement() {
  const numbers = [1, 2, 3, 2, 4, 2, 5];
  const lastIndex = numbers.lastIndexOf(2);
  if (lastIndex !== -1) {
    console.log(`Last occurrence of 2 is at index ${lastIndex}`);
  }
  console.log("---------------------------------------------------");
})();

// Finding the Last Occurrence of a Substring in a String
(function () {
  const sentence =
    "The quick brown fox jumps over the lazy dog. The fox is clever.";
  const searchTerm = "fox";
  const lastIndex = sentence.lastIndexOf(searchTerm);
  if (lastIndex !== -1) {
    console.log(`Last occurrence of '${searchTerm}' is at index ${lastIndex}`);
  }
  console.log(
    "-------------------------------------------------------------------"
  );
})();
