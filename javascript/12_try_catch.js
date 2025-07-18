/*------------------------
try and catch---------------*/

/*What is try and catch?
try and catch are used to handle errors in JavaScript without crashing the whole program.

try block: runs the code that might throw an error.

catch block: runs if there's an error, and gives you a chance to handle it.*/


try {
  let x = y + 10; // ❌ y is not defined
} catch (err) {
  console.log("An error occurred: " + err.message);
}


try {
  let result = y + 10;
} catch (e) {
  console.log("Handled the error, app continues!");
}

