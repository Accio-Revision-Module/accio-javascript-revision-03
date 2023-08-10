# JavaScript Revision- 03

## 1. Javascript Revision: Closures

A closure captures variables from outside its scope.

```javascript
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
```

## 2. OOP vs. Functional Programming

- **OOP**: Encapsulation, inheritance, and polymorphism.
- **Functional**: Immutability, pure functions.

## 3. Imperative and Declarative Code Writing

- **Imperative**: Describes how to do something.
- **Declarative**: Describes what to do.

## 4. Mutability and Immutability

- **Mutability**: Objects can change.
- **Immutability**: Objects cannot change.

## 5. Polyfills

Provide fallbacks for unsupported browser features.

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
```

## 6. Prototypes of Map, Filter, Reduce

Prototypes for transforming data in arrays.

```javascript
const numbers = [1, 2, 3];
numbers.map((x) => x * 2); // [2, 4, 6]
numbers.filter((x) => x > 1); // [2, 3]
numbers.reduce((a, b) => a + b, 0); // 6
```

## 7. Polyfills of Map, Filter, Reduce

Write custom implementations for older browsers.

## 8. Strict and Non-Strict Mode

- **Strict Mode**: More error checking.

```javascript
"use strict";
x = 10; // ReferenceError
```

- **Non-Strict Mode**: More lenient.

## 9. The `this` Keyword

`this` refers to the context of the function call.

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
person.greet(); // 'Alice'
```

## 10. Function Currying

Transforming a function to take arguments one at a time.

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = add(5);
add5(3); // 8
```

## 11. Method Borrowing

Using methods from one object in another.

## 12. Constructor Function and “this” Keyword

Creating objects with a function.

```javascript
function Car(make) {
  this.make = make;
}
const car = new Car("Toyota");
```

## 13. Prototype

Inheritance in JavaScript.

```javascript
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
```

## 14. Prototypal Inheritance

Objects inherit from other objects.

## 15. Creating Objects Using Classes

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const cat = new Animal("Cat");
```

## 16. Differences: `null`, `undefined`, `not defined`

Different ways variables may be without value.

## 17. Truthy and Falsy Values

- **Truthy**: Values that evaluate to true.
- **Falsy**: Values like `0`, `false`, `null`, `''`.

## 18. Operators in JS

Arithmetic, comparison, and logical operators.

## 19. Compare Operators with Truthy and Falsy

```javascript
0 == false; // true
0 === false; // false
```

## 20. Shallow Copy

```javascript
const obj1 = { a: 1 };
const obj2 = { ...obj1 };
```

## 21. Deep Copy

Deeply clone objects.

## 22. Flattening an Object

Converting nested objects into a flat structure.

---
