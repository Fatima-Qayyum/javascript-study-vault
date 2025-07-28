/*
 What is a Callback?
A callback is a function passed as an argument to another function, to be executed later (usually after some async task).
*/


 /*Callback Hell in JavaScript
Callback Hell happens when multiple asynchronous functions are nested inside each other, making the code:

Hard to read

Difficult to maintain

Prone to errors*/

/* Q1: Write a function greetUser(name, callback) that prints the name and then runs the callback.*/


function greetUser(name,callback){

    setTimeout(()=>{
        console.log(`hello my name is ${name}`);
    callback();

    },2000)

    
}


function hello(){
    console.log('hello');
}
greetUser('fatima',hello);


//  Q2: 2. Math with callback Write a function add(a, b, callback) that adds two numbers and then sends the result to a callback.


function add(a,b,callback){

    let addition=a+b;
    callback(addition);



}


function result(results){

    console.log(`results are :  ${results} `)
}
add(2,3,result);


// Q3: Write a function delayedMessage(message, callback) that waits 2 seconds and then prints the message and then runs the callback.


function delayedMessage(message, callback,interval){

    setTimeout(() => {

        console.log(`message is ${message}`);
         callback();
    }, interval);
   


}

function greet(){
    console.log('i am good ')
}

delayedMessage('hello how are you ',greet,2000)


/* Q4:  🧾 Problem Statement: Nested Callbacks Practice (Callback Hell)
You are asked to simulate a three-step process using callback functions.

🔧 Task:
Create three functions:

stepOne(callback)

stepTwo(callback)

stepThree()

Each function should print its step name:

stepOne prints "Step One"

stepTwo prints "Step Two"

stepThree prints "Step Three"

Each function should use a setTimeout with 1-second delay to simulate asynchronous behavior.*/


// Step One function: aik callback accept karta hai
function stepOne(callback) {
  setTimeout(() => {
    console.log("Step One"); // 1 second baad print karega
    callback(); // jab step one complete ho jaye, toh callback (stepTwo) chalay
  }, 1000); // 1 second delay
}

// Step Two function: ye bhi aik callback accept karta hai
function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step Two"); // step two print karega
    callback(); // stepTwo ke baad callback (stepThree) chalay
  }, 1000); // 1 second delay
}

// Step Three function: isme koi callback nahi — bas final step hai
function stepThree() {
  setTimeout(() => {
    console.log("Step Three"); // last step print karega
  }, 1000); // 1 second delay
}

// Ye actual execution hai — yahan se sab start hota hai
stepOne(function () { // StepOne ko aik anonymous function diya gaya hai
  stepTwo(function () { // is function ke andar StepTwo chalaya gaya
    stepThree(); // StepTwo ke baad StepThree chalaya gaya
  });
});



/*Q5:Create a simulation of a simple morning routine using nested callbacks.
You need to create 3 functions:

wakeUp(callback)

brushTeeth(callback)

haveBreakfast()

Each function should:

Use setTimeout with a 1-second delay

Print its own step

Call the next function through a callback */