// An async function is a special kind of function that always returns a Promise — even if you don’t explicitly return one;

async function myFunction() {
  return "Hello";
}
// myFunction() is a Promise that resolves to "Hello"

myFunction().then(result => console.log(result)); // Output: Hello

/*✅ Why use async?

Because it allows you to use the await keyword inside the function, which lets you pause execution until a Promise resolves.*/



// Q1:  Q1: Create an async function called greet that returns the message "Welcome to JavaScript!"

/*async function greet(){
    return 'welcome to javascript';
}

greet().then (msg=>console.log(msg));
*/

// Q2:Create a regular function called getData that calls an async function named fetchInfo, which returns "Data loaded successfully". Log the result from fetchInfo using .then() inside getData.

/*
function getdata(){
    fetchinfo().then(data => console.log(data));
   
}
async function fetchinfo(){
    return 'data loaded successfully';
}


getdata(); // Output: data loaded successfully

*/


/*
 ----------------------✅ What is await in JavaScript?--------------------------------------
The await keyword is used inside an async function to pause the execution of the function until a Promise is resolved.

->await waits for the Promise to settle (either resolve or reject).
It makes your code look like normal step-by-step code (synchronous style), even though it’s asynchronous.

.*/



/*
function wait1Second() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Waited 1 second");
    }, 1000);
  });
}

async function run() {
  console.log("Start");
  let message = await wait1Second(); // pauses here for 1 second
  console.log(message); // "Waited 1 second"
  console.log("End");
}

run();
*/


/* ----------------------practice questions for async and await------------------------------*/

// Q1: Create an async function getMessage that waits for 2 seconds using a wait2Sec function and then logs "Hello after 2 seconds"
/*async function getMessage(){
    await wait2Seconds();
    console.log('message received after 2 seconds');
}

function wait2Seconds() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('waited for 2 seconds');
            resolve();
        }, 2000);
    })
}

getMessage();*/


// Output: message received after 2 seconds (after a 2-second delay)




/*Promise Rejection in JavaScript:
A promise rejection means that the promise failed to complete successfully. You can handle it using .catch() or try...catch to prevent errors and show custom messages.*/


function randomPromise() {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.5; // 50% chance
    if (success) {
      resolve("✅ Promise resolved successfully!");
    } else {
      reject("❌ Promise was rejected!");
    }
  });
}

async function run() {
  try {
    console.log("🔹 Start of try block");

    // This will always run
    let sum = 5 + 10;
    console.log("Sum is:", sum); // Independent code

    // This might fail or succeed
    let result = await randomPromise();
    console.log("Result from promise:", result);
    
    console.log("🔹 End of try block");
  } catch (error) {
    console.log("Caught error:", error);
  }

  console.log("✅ Code after try-catch continues...");
}

run();


