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


