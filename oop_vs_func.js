// 1. Procedural
// 2. OOP
// 3. Functional Programming

// 1.
const arr = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  const e = arr[i];
  //   Square it
  const squaredE = e * e;
  //   Check if it is smaller than
  if (squaredE < 10) {
    newArr.push(squaredE);
  }
}

console.log(newArr);

// 3.
const newArrFunc = arr.map((e) => e * e).filter((e) => e < 10);

function createNewPig(name, color) {
  console.log("pig", name, color);
}

function createNewDog(name, color) {
  console.log("dog", name, color);
}

function createNewCat(name, color) {
  console.log("cat", name, color);
}

createNewPig("pig1", "red");

// 2.
class Animal {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  knowType() {
    return this.type;
  }

  get name() {
    return this.name;
  }
}

const animal1 = new Animal("dog1", "black", "dog");
console.log(animal1.knowType());
