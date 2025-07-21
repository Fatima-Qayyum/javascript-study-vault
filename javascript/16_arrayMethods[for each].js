/*.....................................FOR EACH ................................................*/


//.forEach() is a JavaScript array method used to execute a function for each element in an array. It does not return anything—it just runs the function on each item.

/*
 array.forEach(function(element, index, array) {
  // Your code here
});
*/


let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});


// with arrow function
fruits.forEach(fruit => console.log(fruit));


fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});


/*------------------------------------------------practice questions-------------------------------*/

// Q1 : print all numbers in an array?
 let arr1=[1,2,3 ,4,5,6,];
 function printarray(arr){
console.log(arr);
 }

 arr1.forEach( printarray);



 arr1.forEach((data)=>{
console.log(data);
 });


 // Q 2:Use .forEach() to print the index and value of each fruit.

 let fruit=['apple','orange','banana','peach','pomegranate'];
 fruit.forEach((fruit,index)=>{
console.log(`[${index}] :  ${fruit}  `)

 });


 // Q3: Use .forEach() to print each number + 10.


let nums = [1, 2, 3];

nums.forEach(function(n) {
  console.log(n + 10);
});


// Q4:  Question 4: Sum of all numbers

let arr = [5, 10, 15];
let sum = 0;

arr.forEach(function(num) {
  sum += num;
});

console.log("Sum:", sum);


// Q5:Print only even numbers

let num = [1, 2, 3, 4, 5, 6];

num.forEach(function(n) {
  if (n % 2 === 0) {
    console.log(n);
  }
});



