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

//array.every() Returns true only if all elements in the array match the condition.

const scores = [80, 70, 90];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); // true (because all scores ≥ 50)


 //array.some() Returns true if at least one element in the array matches the condition.


 const score1 = [30, 40, 70];
const someonePassed = score1.some(score => score >= 50);
console.log(someonePassed); // true (only 70 is ≥ 50)



const score2 = [20, 10, 30];
const anyPass = score2.some(score => score >= 50);
console.log(anyPass); // false


/*-------------------------------------practice of some and every------------------------------*/


//Q1: Check if all numbers are positive  
const nums = [3, 5, 8, 10];
const allPositive = nums.every(n => n > 0);
console.log(allPositive); // true



//Q2: Check if all names are strings
const name1 = ['Ali', 'Sara', 'Zainab'];
const allStrings = names.every(name => typeof name === 'string');
console.log(allStrings); // true



//Q3: Check if all scores are above 70

const score3 = [85, 72, 69];
const allAbove70 = score3.every(score => score > 70);
console.log(allAbove70); // false (69 fails)

//Q4: Check if any number is even
const number3 = [1, 3, 7, 8];
const hasEven = number3.some(n => n % 2 === 0);
console.log(hasEven); // true (8 is even)


//Q5: Check if any fruit is "banana"
const fruits = ['apple', 'peach', 'banana'];
const hasBanana = fruits.some(fruit => fruit === 'banana');
console.log(hasBanana); // true


// Q6: Check if all numbers are multiple of 10 or not;

let  multipleArray=[10,20,30,40,35,60,70];
let checkMultiple=multipleArray.every((e)=> e%10==0);
console.log(` checkmultiple : ${checkMultiple}`);  //false