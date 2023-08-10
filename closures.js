// let name = "Aman";

// function changeName() {
//   console.log(name);
// }

// changeName();
// name = "Abhraham";
// changeName();

function outer(outerVar) {
  console.log(outerVar); // outer
  let outerVar1 = "hello";
  return function (inner) {
    console.log(inner); // inner
    console.log("Outer ->", outerVar1); // outer
  };
}
const counter = outer("outer");
counter("inner");
