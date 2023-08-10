const person = {
  name: "Alice",
  age: 24,
  greet: function () {
    console.log("Hello", this.name);
  },
};

person.greet();

const newPerson = {
  name: "Aman",
  age: 24,
};

// Call
person.greet.call(newPerson);

// Apply
person.greet.apply(newPerson);

// Bind
const greetAman = person.greet.bind(newPerson);
greetAman();
