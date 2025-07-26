/*--------------------------------------------What is the Call Stack in JavaScript?-------------------------------
The Call Stack in JavaScript is a data structure used to keep track of function calls—what function is currently running and what functions are waiting to run after it finishes.

Think of it as a stack of plates:

You add a new plate (function call) to the top — this is called a push.

You remove the top plate (when a function finishes) — this is called a pop.*/


function greet() {
  console.log("Hello!");
  askName();
}

function askName() {
  console.log("What’s your name?");
}

greet();
/*   Call Stack Steps:
greet() is called → pushed onto the stack.

Inside greet(), askName() is called → pushed onto the stack.

askName() finishes → popped off.

greet() finishes → popped off.

📌 The stack is now empty.*/



