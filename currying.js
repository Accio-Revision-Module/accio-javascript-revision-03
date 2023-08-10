function mul(a) {
  return function multiply(b) {
    return a * b;
  };
}

const mulBy10 = mul(10);

console.log(mulBy10(40));

function add(a) {
  return this.val + a;
}

const addTo10 = add.bind({ val: 10 });
console.log(addTo10(5));
