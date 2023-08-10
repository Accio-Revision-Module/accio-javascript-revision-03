// Immutable

let a = 10;
let b = a;

b = 5;

console.log(a, b);

// Mutable
let arr = [1, 2, 3, 4, 5];
let b_arr = [...arr];

b_arr.pop(); // [1, 2, 3, 4]

console.log(arr, b_arr);
