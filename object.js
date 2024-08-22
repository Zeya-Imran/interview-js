/*Sure, here are some more interview questions with examples related to objects in JavaScript:

1. Creating and Accessing Object Properties
Question: How do you create an object with dynamic property names?

Example:

javascript
Copy code*/
const propName = 'dynamicProp';
const obj = {
  [propName]: 'This is a dynamic property'
};

console.log(obj.dynamicProp); // Output: This is a dynamic property
/*
2. Cloning Objects
Question: What is the difference between shallow and deep cloning an object? Provide examples of both.

Shallow Cloning Example:

javascript
Copy code */

const original = { a: 1, b: { c: 2 } };
const shallowClone = { ...original };
shallowClone.b.c = 3;

console.log(original.b.c); // Output: 3 (original is affected)
Deep Cloning Example:

javascript
Copy code
const original = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.b.c = 3;

console.log(original.b.c); // Output: 2 (original is not affected)
3. Merging Objects
Question: How can you merge two objects? What if they have conflicting keys?

Example:

javascript
Copy code
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
4. Object Destructuring
Question: How can you use destructuring to swap values of two properties in an object?

Example:

javascript
Copy code
const obj = { x: 1, y: 2 };
[obj.x, obj.y] = [obj.y, obj.x];

console.log(obj); // Output: { x: 2, y: 1 }
5. Prototypes and Inheritance
Question: How do you create a prototype chain in JavaScript?

Example:

javascript
Copy code
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
6. this Keyword
Question: How does the this keyword behave in different contexts?

Example:

javascript
Copy code
const obj = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

obj.greet(); // Output: Hello, Alice

const greet = obj.greet;
greet(); // Output: Hello, undefined (in non-strict mode), or Error (in strict mode)
7. Object Methods
Question: How do you iterate over an object's properties?

Example:

javascript
Copy code
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Using for...in loop
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// Using Object.keys
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
8. Object Freezing and Sealing
Question: What is the difference between Object.freeze and Object.seal?

Example:

javascript
Copy code
const obj = { prop: 1 };

Object.freeze(obj);
obj.prop = 2; // Fails silently or throws an error in strict mode
delete obj.prop; // Fails silently or throws an error in strict mode

console.log(obj.prop); // Output: 1

const obj2 = { prop: 1 };
Object.seal(obj2);
obj2.prop = 2; // Works
delete obj2.prop; // Fails silently or throws an error in strict mode

console.log(obj2.prop); // Output: 2
9. Object Entries and Values
Question: How do you convert an object into an array of key-value pairs?

Example:

javascript
Copy code
const person = { name: 'Alice', age: 25, city: 'Paris' };

const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 25], ['city', 'Paris']]

const values = Object.values(person);
console.log(values); // Output: ['Alice', 25, 'Paris']
10. Custom Object Methods
Question: How do you add a custom method to an object?

Example:

javascript
Copy code
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
11. Object Property Enumeration
Question: How can you ensure that a property does not show up during enumeration?

Example:

javascript
Copy code
const obj = {};
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});

obj.visible = 'shown';

for (let key in obj) {
  console.log(key); // Output: visible
}

console.log(Object.keys(obj)); // Output: ['visible']
console.log(obj.hidden); // Output: secret
12. Working with hasOwnProperty
Question: Why and how do you use hasOwnProperty?

Example:

javascript
Copy code
const obj = {
  ownProp: 1
};

console.log(obj.hasOwnProperty('ownProp')); // Output: true
console.log(obj.hasOwnProperty('toString')); // Output: false (inherited property)
These questions and examples should give you a solid foundation for understanding objects in JavaScript and prepare you for related interview questions. Feel free to ask more specific questions or dive deeper into any topic!






