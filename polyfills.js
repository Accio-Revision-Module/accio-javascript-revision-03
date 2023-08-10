// simulating if foreach was not present
Array.prototype.forEach = null;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i]);
    }
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const ans = cb(this[i]);
      newArr.push(ans);
    }
    return newArr;
  };
}

function cbFn(element) {
  console.log(element);
}

arr.forEach(cbFn);

// Examples of array prototypes:
// 1. Map ->
const squaredArr = arr.map((e) => e * e);
console.log(squaredArr);

// 2. filter ->
const below5 = arr.filter((e) => e < 5);
console.log(below5);

// 3. reduce ->
const sum = arr.reduce((prev, curr) => prev + curr, 0);

function calcSum() {
  let sum = 0; // prev (accumalator)
  for (let i = 0; arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i]
    // arr[i] -> curr (element in the array)
  }
}
console.log(sum);
