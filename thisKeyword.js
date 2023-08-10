console.log("This globally -> ", this);

function hello() {
  console.log("This inside a function -> ", this);
}

hello();

class Example {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}

const newObj = new Example("Aman");

const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
person.greet();
