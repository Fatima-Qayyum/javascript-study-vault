/*------------------------------------------------rest parameter in js--------------------------------*/
/*
The rest parameter (...) is used to collect multiple arguments into a single array. It helps when a function needs to handle any number of arguments.
*/

//function myFunc(...args) {
  // args is an array }


  //Basic Example

  function showNames(...names) {
  console.log(names);
}

showNames("Fatima", "Zainab", "Areeba"); 
// Output: ["Fatima", "Zainab", "Areeba"]

// Rest with Other Parameters


function greet(greeting, ...names) {
  console.log(greeting + " " + names.join(", "));
}

greet("Hello", "Fatima", "Sara", "Ayesha"); 
// Output: Hello Fatima, Sara, Ayesha





