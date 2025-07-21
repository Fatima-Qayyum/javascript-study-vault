/*-----------------------------------spread operator -------------------------------------------------*/


//The spread operator (...) is used to unpack elements from arrays, objects, or other iterables into individual elements.

let arr = [1, 2, 3];
let copy = [...arr];
console.log(copy); // [1, 2, 3]


// Merging Arrays

let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


//Adding elements
let nums = [2, 3, 4];
let updated = [1, ...nums, 5];
console.log(updated); // [1, 2, 3, 4, 5]


/*---------------------------------Spread in Objects---------------------------------------------*/

let user = { name: "Fatima", age: 20 };
let copy1 = { ...user };
console.log(copy1); // { name: "Fatima", age: 20 }

//Merging Objects

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged1 = { ...obj1, ...obj2 };
console.log(merged1); // { a: 1, b: 2 }

