/*------------------------------------------function----------------------------------------------*/


function hello() {    // function defination
    console.log('hello');   // Code to be executed   
}

hello();// function call
hello();


/*-------------------------------------function with arguments-------------------------------------------*/
function printName(name) {  //name is argument that
    console.log(name)
}

printName('fatima');// fatima is the parameter that stores the parameter



function printInfo(name, age) {  //name is argument that
    console.log(name)
    console.log(age);
}

printInfo('fatima', 20);// fatima is the parameter that stores the parameter
printInfo('asim', 21);    // the values we will pass will store order wise ;



/*----------------------------------------------return- keyword----------------------------------------------*/


/*The return keyword is used inside a function to:
Send back a value to where the function was called
Stop the function’s execution immediately*/

function sum(a, b) {
    return a + b;
    console.log('hello');  // this hello will not execute because when we write return in a function the execution of a funtion stop immediately
}

let sumValue = sum(7, 8);
console.log(sum(sum(1, 2), 3)); // we can also use a function with two arfuments for three parameters


console.log(` sum value is ${sumValue}`);




/* ------------------------------------scope of functions----------------------------------------------------*/

//Scope defines where a variable is accessible in your code

/* Global Scope
Variables declared outside any function or block.
Accessible anywhere in the code.*/


let name = "Fatima";  // global scope

function greet() {
  console.log(name);  // ✅ can access global variable
}
greet();


/*  2. Function Scope
Variables declared inside a function with var, let, or const.

Accessible only within that function.*/
function showAge() {
  let age = 20;
  console.log(age);  // ✅ OK
}
//console.log(age);     // ❌ Error: age is not defined

/* 3. Block Scope (only with let and const)
Variables inside {} (like if, for, or while) are block-scoped.
*/

if (true) {
  let city = "Islamabad";
}
//console.log(city);  // ❌ Error: city is not defined
                       //✅ If you used var city = "Islamabad"; instead, it would be function-scoped, not block-scoped.


/*Lexical scope means a variable is accessible based on where it’s written in the code — not how or when the function is called.

📌 Inner functions can access variables from outer functions.*/                       


function outer() {
  let name = "Fatima";

  function inner() {
    console.log(name);  // ✅ Can access 'name' from outer function
  }

  inner();
}

outer();



/*✅ Hoisting
Hoisting means JavaScript moves declarations (not values) to the top of their scope before execution.*/

console.log(a);  // Output: undefined
var a = 5;



var b;
console.log(b);  // undefined
a = 5;

//❌ But this fails with let or const
//console.log(c);  // ❌ Error: Cannot access 'b' before initialization
let c = 10;





greet();  // ✅ Works
function greet() {
  console.log("Hello");
}

/*-------------------------------------------------------function expression--------------------------*/

//A function expression means storing a function inside a variable. The function can be anonymous (no name) or named.//
const greet1 = function() {
  console.log("Hello!");
};
greet1();  // Output: Hello!



const sayHi = function() {
  console.log("Hi there!");
};
sayHi();  // Output: Hi there!



const add = function sum(a, b) {
  return a + b;
};
console.log(add(5, 3));  // Output: 8   You can’t call sum(5, 3) outside; only add(5, 3) works




//sayHello1();  // ❌ Error — Cannot access before initialization
const sayHello1 = function() {
  console.log("Hello from Expression!");
};



// Function Declaration
function add1(a, b) {
  return a + b;
}
console.log(add1(2, 3)); // ✅ Output: 5

// Function Expression
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(5, 2)); // ✅ Output: 3





/* -------------------------------------higher order functions-----------------*/


/*A higher-order function is a function that either:
->Takes another function as an argument, or
->Returns a function as its result.*/

function greet(name) {
  return "Hello, " + name;
}

function processUser(greetFunction, userName) {
  console.log(greetFunction(userName));
}

processUser(greet, "Fatima");  // Output: Hello, Fatima





function getChecker(type) {
  console.log("You asked for a", type, "checker.");

  if (type === "even") {
    return function(num) {
      console.log("Checking if", num, "is even.");
      return num % 2 === 0;
    };
  } else if (type === "odd") {
    return function(num) {
      console.log("Checking if", num, "is odd.");
      return num % 2 !== 0;
    };
  } else {
    return function() {
      console.log("Invalid checker type!");
      return "Invalid type";
    };
  }
}
getChecker(9);






/*----------------------------------------function as objects------------------------------------*/



let calculator={


  add: function(a,b){
    return a+b;
  },
  sub:function(a,b){
    return a-b;
  },
  mul:function(a,b){

  }
}




//short hand for functions as objects

/*let calculator={


  add: function(a,b){
    return a+b;
  },
  sub:function(a,b){
    return a-b;
  },
  mul:function(a,b){

  }
}*/

console.log(calculator.add(2,3));//5





/*------------------------------------------------practice questions--------------------------------------------*/

// Q1: Create a function that prints a poem

function printPoem() {
    console.log('twinke twinkel little star')
}
printPoem();


// Q2: create a function to roll a dice & always display the value of the dice from (1 to 6)

function dice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);


}

dice();


// Q3: create a function  that gives us average of threee numbers;

function calculateAvg(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log(avg);

}

calculateAvg(7, 7, 7);
calculateAvg(10, 10, 10);


//Q4 : create a function that prints a multiplication table of a number;


function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} *  ${i}  =  ${num * i}`);
    }

}
multiplicationTable(9);
multiplicationTable(7);
multiplicationTable(6);


// Q5: create a function that returns a sum of numbers from 1 to N;


function sumNNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;

    }
    return sum;

}
console.log(sumNNumbers(10));
console.log(sumNNumbers(3));






//Q6 : create a function that returns the concatenation of all strings in an array;


let str = ['i', 'live', 'in', 'islamabad'];
function concatString(str1) {
    let result="";
    for (let i = 0; i < str.length; i++) {
        result += str[i];


    }
    return result;
}
console.log(concatString(str));


