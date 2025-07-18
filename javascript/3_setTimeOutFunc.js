/*
What is setTimeout?
setTimeout() lets you run a function after a delay (in milliseconds).
It runs only once after the specified time.
*/


// SYNTAX:  setTimeout(function, delay_in_ms);

// 1: Simple Delay

setTimeout(() => {
  console.log("Hello after 3 seconds!");
}, 3000);


//2 : 2: Named Function


function greet1() {
  console.log("Good morning!");
}

setTimeout(greet1, 2000); // runs greet after 2 seconds


// 3: 3: With Arguments

function greet(name) {
  console.log("Hello, " + name);
}

setTimeout(greet, 1000, "Fatima");



/*------------------------------------------------clear timout -----------------------------------*/

/*✅ How It Works
When you call setTimeout(), it returns a unique ID.
You store this ID in a variable, and then use that ID in clearTimeout() to cancel it.*/




let id = setTimeout(() => console.log("Won't run"), 5000);
clearTimeout(id); // cancels the timeout
/*  Why Cancel a Timeout?
Sometimes, you schedule something to run later, but you change your mind and want to stop it before it happens. That’s where clearTimeout() comes in.*/


let timeoutID = setTimeout(() => {
  console.log("This will NOT run");
}, 5000);

// Cancel it before it runs
clearTimeout(timeoutID);




/*-----------------------------examples and practice questions -----------------------------------------*/

function showMessage() {
  console.log("This is a message!");
}

let id1 = setTimeout(showMessage, 3000); // scheduled for 3 seconds

// Suppose the user clicks a cancel button before 3 seconds:
clearTimeout(id1); // cancels the timeout

