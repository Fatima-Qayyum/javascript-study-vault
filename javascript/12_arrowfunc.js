/*----------------------arrow functions--------------*/


/*Arrow functions are a shorter way to write functions*/

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add1 = (a, b) => a + b;

console.log(add(2,5));
console.log(add1(2,9));




//Simple One-Line Function
const greet = () => console.log("Hello!");
greet(); // Output: Hello!


// Return a Value
const square = num => num * num;
console.log(square(4)); // Output: 16

//With Curly Braces & Return
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5,8));


/*---------------------------------------------------------------implicit return in arrow function in js-------------------------------------*/


/*
What is Implicit Return?
In arrow functions, if you omit curly braces {}, the value is automatically returned — this is called implicit return.
*/

const add4 = (a, b) => a + b;

console.log(add4(3, 5)); // Output: 8  Here, a + b is returned automatically without writing return.




/* If You Use Curly Braces {}
You must use the return keyword yourself*/

const add3 = (a, b) => {
  return a + b; // explicit return
};
console.log(add3(10,10));



//Without return:

const add = (a, b) => {
  a + b; //  returns undefined
};
