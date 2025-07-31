/*✅ What is an API in JavaScript?
In JavaScript, an API (Application Programming Interface) is a set of tools or rules that lets your code communicate with other software, servers, or browsers.*/


/*
✅ What is JSON?
JSON stands for JavaScript Object Notation.
It is a lightweight data format used to store and exchange data, especially between a web browser and a server.



1. JSON.parse()
👉 Converts a JSON string into a JavaScript object.


✅ 2. JSON.stringify()
👉 Converts a JavaScript object into a JSON string.
*/


let jsonString = '{"name": "Fatima", "age": 21}';

let jsObject = JSON.parse(jsonString);

console.log(jsObject.name); // Output: Fatima
let jsObject1 = { name: "Fatima", age: 21 };

let jsonString1 = JSON.stringify(jsObject);

console.log(jsonString1); // Output: {"name":"Fatima","age":21}
