/*--------------------------------------this with Arrow Functions in JavaScript--------------------------------
Arrow functions behave differently than regular functions when it comes to the this keyword.
✅ Key Concept:
Arrow functions do not have their own this.
Instead, they inherit this from their surrounding (lexical) scope.*/


const user = {
  name: "Fatima",
  regularFunc: function () {
    console.log("Regular Function:", this.name); // "Fatima"
  },
  arrowFunc: () => {
    console.log("Arrow Function:", this.name); // "undefined" or global object
  },
};

user.regularFunc();
user.arrowFunc();


/* Explanation:
In regularFunc, this refers to the object user.
In arrowFunc, this is inherited from the outer scope (e.g., window in browsers), not user.*/


/*✅ When to Use Arrow Function?
Use arrow functions when you want to inherit this from the parent scope (e.g., in callbacks).
Avoid using them as object methods if you need access to the object itself via this.*/