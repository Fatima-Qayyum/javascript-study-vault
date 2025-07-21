/*------------------------ARRAY (MAP & FILTER )----------------------------------------------------*/

//map() creates a new array by transforming each element of the original array.I want to change every item in the array.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]


//filter() creates a new array with elements that pass a condition. want to keep only the items that match a condition.


const number = [1, 2, 3, 4, 5];
const even = number.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]


// Q1: Double all numbers in the array.

let array1=[1,2,3,4,5,6,7,8,9,10];
let doubleArray1=array1.map((num)=>{
    return num*10;
})

console.log(doubleArray1);


//  Q2: Convert all strings to uppercase.
const words = ['apple', 'banana', 'cherry'];
let upperCased=words.map((word)=>{
   return( word.toUpperCase());
    
})

console.log(upperCased);

// Q3:  Extract only the names from the array of objects.


const users = [
  { name: 'Ali', age: 22 },
  { name: 'Sara', age: 30 }
];

const names = users.map(user => user.name);
console.log(names); // ['Ali', 'Sara']





// Q4 : Q4: Keep only even numbers.

const num = [1, 2, 3, 4, 5, 6];
let evenNum=num.filter((n)=>
    (n%2==0)
)

console.log(evenNum);


//Q5 : Filter students who passed (score >= 50)

const student = [
  { name: 'Ahmed', score: 45 },
  { name: 'Zainab', score: 75 }
];

let studentsScore=student.filter((s)=>{
    return(s.score>=50)});
console.log(studentsScore);




/*---------------------------------------ARRAY(SOME& EVERY)-------------------------------------*/






