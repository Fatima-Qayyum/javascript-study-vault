/*-------------------------------------Loops-----------------------------------------------*/


//print odd numbers from(1 to 15)

for (let i = 1; i <= 15; i = i + 2) {

    console.log(i);
}

//print all even number from (2 to 10);

console.log('----------even number----------------')
for (let i = 2; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}




// print multiplication table of 5;

let n = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}


//loops with Arrays

let fruits = ['apple', 'mango', 'pear', 'peach'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);


}

//loops with nested arrays

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder", "woman", "flash"]];
for (let i = 0; i < heroes.length; i++){
 console.log(`list # ${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

// -------------------for of loop -------------
let fruites=['mango','apple','banana','orange','litchi'];
for (fruit of fruites){
    console.log(fruit)
}


let name='fatima';
for(char of name){
    console.log(char);
}

/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]*/

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num=2;

let arr1=[];
for (let i=0;i<arr.length;i++)
{

    if(arr[i]!=num){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

//Write a JS program to find the no of digits in a number.Example : if number = 287152, count = 6

let number=287152;
count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}

console.log(count);


//Qs3. Write a JS program to find the sum of digits in a number.Example : if number = 287152, sum = 25


let number1=287152;
sum=0;
let copy1=number;

let quotient=0;
let remainder=0;
while(number1>10){
    quotient=number/10;
    remainder=num%10;
}


















