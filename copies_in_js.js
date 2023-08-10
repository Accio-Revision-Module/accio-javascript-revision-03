const arr = [1, 2, 3, 4, 5];
const obj = {
  name: "jayesh",
  age: 24,
};

// Shallow copies:
const newArr = [...arr];
const newObj = { ...obj };

// Deep copies:
const nestedArr = [["jayesh"]];
const newNestedArr = [...nestedArr];

const deepCopyArr = JSON.parse(JSON.stringify(nestedArr));
console.log(deepCopyArr);
