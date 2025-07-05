/*datatypes in js are divided into two main categories .
-> Primitive (call by value )
-> Non Prmitive(call by reference )
this reference is based on how we store data in memory, and how we can access it.
categorization is based on two points .
->how data stored in memory .
 -> how we access that data;
*/

/* primtive 
-> 7 categories
-> call by value
1 string , 2 number , 3 boolean , 4 null , 5 undefined (variable declate but value we will assign it is not decided yet.)
6 symbol (is used to make something unique ,the element we want to make unique we wrap that in symbol.
7 BigInt ( very big value that we dont cover in numbers)
 */


/* reference type or non primitive point
-> arrays 
-> objects 
-> Functions
*/


/*is javascript dynamic or static?
JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

*/


const score=100;
const scoreValue=100.3;

const isLoggedIn =false;
const outSideTemp=null;
 let userEmail;

 const id=Symbol('123');
 const anotherId =Symbol('123');
 console.log (id==anotherId) //false;

 const bidNumber=34555666666666666666n;


 const heros=['ali','hassan','hussain'];

 let person={name:hitesh,
    age:22,

 }


 const myFunction=function(){
    console.log('heelo world');


 }


 // type of tell us about the datatype of variable;
  


 

