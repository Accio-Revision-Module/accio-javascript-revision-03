const falsy = [0, false, "", null, undefined]; // Falsy values
const truthy = [{}, [], "string", 1, 2, 3]; // Truthy values

if ("") {
  console.log("this wont be executed");
}

const name = this.name || "Not given yet"; // If a person enters nothing('') -> falsy value
const score = this.score || "No score yet"; // if score is 0, no score yet is shown

const trueScore = this.score ?? "No score yet"; // nullable operator in JS. -> only checks for null and undefined

// {
//     A: 32,
//     B: "hello",
//     C: {
//         D: [1, 2],
//         E: {
//             hi: 2,
//         },
//     }
// }

// {
//     A: 32,
//     B: "hello",
//     C.D.0: 1,
//     C.D.1: 2,
//     C.E.hi: 2,
// }
