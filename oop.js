// 1. Inheritance - We can get classes from other class
// 2. Encapsulation - Private and public variables
// 3. Abstraction - Hide implementation
// 4. Polymorphoism - multiple functions same name

// Inheritance and Polymorphism
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} doesn't make a sound`);
  }
}

class Dog extends Animal {
  #age;
  constructor(name, species, loyal, age = 5) {
    super(name, species);
    this.loyal = loyal;
    this.#age = age;
  }

  makeSound() {
    console.log(`${this.name} barks`);
  }

  whatIsTheAge() {
    console.log(`${this.name} is ${this.#age} years old`);
  }
}

const husky = new Dog("Scooby", "husky", true);
console.log(husky);
husky.makeSound();

husky.whatIsTheAge();
