// Take the array and square the elements
// and show the ones which are less than 10

// Imperative
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

// Declerative
const newArrFunc = arr.map((e) => e * e).filter((e) => e < 10);
