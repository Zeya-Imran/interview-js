//  User Authentication

// main use of some is check true or false in the array

//example

const users = [
  { name: "Alice", role: "user" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

//const hasAdmin = users.filter((user)=> user.role === "admin")

const hasAdmin = users.some((user) => user.role === "admin");

console.log(hasAdmin);
