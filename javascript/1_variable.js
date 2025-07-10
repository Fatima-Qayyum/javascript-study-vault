function myFunc() {
  var x = 5;

  if (true) {
    console.log(x); // ✅ Works — x is accessible in this nested block
  }

  console.log(x); // ✅ Works — still inside the function
}

myFunc();

console.log(x); // ❌ Error — x is not defined outside the function

//const is used to declare variables whose value should not be reassigned.
/* const does NOT mean the value is “unchangeable” — it just means:
You can’t reassign the variable to a new value*/
const age = 25;
age = 30; // ❌ Error: Assignment to constant variable

const numbers = [1, 2, 3];

numbers.push(4); // ✅ Works
numbers[0] = 0;  // ✅ Works

numbers = [5, 6]; // ❌ Error: Can't reassign the array

const person = {
  name: "Ali",
  age: 22
};

person.age = 23; // ✅ This works!
person.name = "Ahmed"; // ✅ This works too!

person = { name: "Sara" }; // ❌ Error: You can't reassign the object itself

