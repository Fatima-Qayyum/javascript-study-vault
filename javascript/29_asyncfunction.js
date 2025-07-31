// An async function is a special kind of function that always returns a Promise — even if you don’t explicitly return one;

async function myFunction() {
  return "Hello";
}
// myFunction() is a Promise that resolves to "Hello"

myFunction().then(result => console.log(result)); // Output: Hello

/*✅ Why use async?

Because it allows you to use the await keyword inside the function, which lets you pause execution until a Promise resolves.*/



// Q1:  Q1: Create an async function called greet that returns the message "Welcome to JavaScript!"

async function greet(){
    return 'welcome to javascript';
}

greet().then (msg=>console.log(msg));

// Q2:Create a regular function called getData that calls an async function named fetchInfo, which returns "Data loaded successfully". Log the result from fetchInfo using .then() inside getData.

function getdata(){
    fetchinfo().then(data => console.log(data));
   
}
async function fetchinfo(){
    return 'data loaded successfully';
}


getdata(); // Output: data loaded successfully


