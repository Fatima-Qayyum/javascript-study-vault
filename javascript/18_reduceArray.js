/*----------------------------------------------------- REDUCE ARRAY -----------------------------------*/
//The reduce() method takes an array and reduces it to a single value by applying a function to each element.

/*    SYNTAX:

array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

*/



// Q 1: Sum all numbers

let num=[1,2,3,4,5,6,7,8,9,10];
let sum1= num.reduce((accumulator,element)=>{

    return accumulator+element;
},0
)

console.log(`sum1    :${sum1}`);



// Q2:Multiply all numbers

let num1=[1,2,3,4];
let MUL= num1.reduce((accumulator,element)=>{
   
    return accumulator*element;
},1
)
console.log(`MUL   : ${MUL}`);



// Q3 : Count total characters

const words = ['hi', 'hello', 'wow'];
const totalChars = words.reduce((acc, word) => acc + word.length, 0);
console.log(totalChars); // 10

//Q4: find max of an array

let data=[10,30,34,54,67,87,98,555,23];
let maxNumber=data.reduce((max,element)=>{
    
    if(max<element){
        max=element;
    }
    return max;
},0)

console.log(` maxNumber  :  ${maxNumber}`)



// Q5: check min element in an array

let arrayData=[23,42,33,55,3,35,2,5,5,66];
let checkMin=arrayData.reduce((min,element)=>{
    if(min>element){
        min=element;
    }

return min;
    
},arrayData[0]);
console.log(`checkMin  :  ${checkMin}`);


// Q6:  Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let data1=[1,2,3,4,5];
let dataSquare=data1.map((e)=>e*e);
console.log(` Data Square=[ ${dataSquare}]`);

let ArraySum=data1.reduce((sum1,element)=>{
return sum1+element
},0)

console.log(`Arraysum = ${ArraySum}`);

let totalElements=data1.length;
let ArrayAvg = ArraySum/totalElements;
console.log(` Array Average = ${ArrayAvg}`);


// Q7: Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let array2=[5,10,15,20];
let arrayChanged=array2.map((e)=>e+5);
console.log(` Multiple Array = ${arrayChanged}`);


//Q8:  Create a new array whose elements are in uppercase of words present in the original array.

let string1=['bob','alia','ali','faiza'];
let upperString=string1.map((strings)=>strings.toUpperCase());
console.log(upperString)



//Q9: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original  array values and all of the additional arguments doubled.

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,...args.map((v)=>v*2),
];

 let res=doubleAndReturnArgs([1,2,3],4,4);
 let res2=doubleAndReturnArgs([2],10,4);

 console.log(res);
 console.log(res2);










 // Q10: Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.


const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
 let result=mergeObjects({a:1,b:2},{c:3,d:4});
console.log(result);


