//alert(3+3);  we are using nodejs not browser;
typeof "Ali"      // "string"
typeof 20         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" ❗ (JavaScript ka bug)
typeof [1, 2, 3]  // "object"
typeof {name: "Ali"} // "object"
typeof  function(){} // "function"

/*Symbol() unique hota hai, even if the description is the same. Ye mostly object properties ke liye use hota hai jab tum chaho ke key kisi aur ke access mein na aaye easily.*/
const id1 = Symbol("user");
const id2 = Symbol("user");

console.log(id1 === id2); // ❌ false — dono alag unique symbols hain

