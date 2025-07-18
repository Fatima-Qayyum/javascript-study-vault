/*--------------------------------------this keyword in javascript---------------------------------------*/

/*The this keyword refers to the object that is executing the current function. Its value depends on how the function is called, not where it’s written*/


const person = {
  name: "Fatima",
  greet: function() {
    console.log(this.name); // 'this' refers to person object
  }
};


/*  if i  dont use this in above case then this will happen
  const person = {
  name: "Fatima",
  greet: function() {
    console.log(name); //  This will throw an error!
  }
};

person.greet(); //  ReferenceError: name is not defined*/



person.greet(); // Output: Fatima


function show() {
  console.log(this); // In browsers, this is the global object (window)
}

show(); // Output: [object Window]


alert("Hello!");         // this works
window.alert("Hello!");  // this also works (same thing)


/*note:  Outside any function or inside a regular function (non-strict mode), this is the same as window.*/


/*🪟 What is window in JavaScript?
window is the main object in the browser that holds everything related to your web page.

You can think of it like a big container that includes:

✅ All the global variables
✅ All the built-in browser functions
✅ The webpage itself (like document)
✅ Timers (setTimeout, setInterval)
✅ Dialog boxes (alert, prompt, confirm)*/


console.log(window); // shows the full window object

var name = "Fatima";
console.log(window.name); // Fatima


window.alert("Hi!");        // same as alert("Hi!")
window.setTimeout(...);     // same as setTimeout(...)
console.log(window.document); // shows the HTML document

//If you write a variable or function in global scope, it becomes part of the window object (if you use var).