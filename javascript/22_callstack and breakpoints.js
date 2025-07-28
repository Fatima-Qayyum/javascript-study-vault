/*
📌 Call Stack and Breakpoints in JavaScript (Browser)
🔁 What is the Call Stack in JavaScript?
The call stack is a built-in data structure that keeps track of function calls in the JavaScript engine. It works on the LIFO principle (Last In, First Out).

✅ How It Works:
When a function is called:

It is pushed onto the call stack.

When the function finishes, it is popped off the stack.

If functions call other functions, they are stacked on top.*/


function greet() {
  sayHello();
}
function sayHello() {
  console.log("Hello!");
}
greet();
/*🧠 Call Stack Order:

greet() is pushed

sayHello() is pushed

console.log() is pushed

Then, it pops in reverse order

🧷 What is a Breakpoint?
A breakpoint is a marker set in the browser's developer tools to pause the execution of JavaScript before a specific line.






🎯 Why Use Breakpoints?
To debug your code.

To inspect variables, function calls, and call stack at that moment.

🛠️ How to Use Breakpoints in Browser:
Open Developer Tools (Right-click → Inspect → Console or press F12)

Go to the Sources tab.

Find your script file in the left panel.

Click the line number where you want to pause the code.

Reload the page or trigger the code.

🔍 Debugging View:
When the breakpoint is hit:

Code pauses at the marked line.

You can check:

Call Stack

Variables in Scope

Watch expressions

Step into/over functions

Let me know if you want an interactive */