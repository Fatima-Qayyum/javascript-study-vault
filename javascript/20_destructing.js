/*-------------------------------------------destructring ------------------------------------*/

//Destructuring is a way to extract values from arrays or objects and assign them to variables in a clean, short way.

 // 1. Array Destructuring

 let fruits = ["apple", "banana", "mango"];
let [a, b, c] = fruits;
console.log(a); // apple
console.log(b); // banana
console.log(c); // mango


//  Skipping values

let [x, , z] = [10, 20, 30];
console.log(x); // 10
console.log(z); // 30


// With Rest

let [first, ...others] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(others); // [2, 3, 4]



/*-------------------------------- Object Destructuring--------------------------*/
//Object destructuring lets you extract properties from an object and assign them to variables in a clean way.

//Basic Example

const student = {
  name: "Fatima",
  age: 21,
  city: "Islamabad"
};

const { name, age, city } = student;

console.log(name); // Fatima  
console.log(age);  // 21  
console.log(city); // Islamabad


//Renaming Variables
//You can assign a property to a new variable name:

const { name: studentName, age: studentAge } = student;

console.log(studentName); // Fatima  
console.log(studentAge);  // 21



 //Default Values
 //If a property doesn't exist, a default value can be used:

 const { country = "Pakistan" } = student;

console.log(country); // Pakistan


//Nested Destructuring
const user = {
  id: 1,
  profile: {
    username: "fatima123",
    email: "fatima@example.com"
  }
};

const { profile: { username, email } } = user;

console.log(username); // fatima123  
console.log(email);    // fatima@example.com


