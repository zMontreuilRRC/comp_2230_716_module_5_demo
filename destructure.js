// array destructuring

let myArr = ["potato", "onion", "garlic", "asparagus"];

// values are assigned in matching indices
[first, second, third, fourth] = myArr;

console.log(third); // output: "garlic"

// object destructuring
const myObject = {a: "first", b: "second", c: true, d: false, e: 10};

// assign values to corresponding keys
const {b, c, d} = myObject;

console.log(b); // output: "second"