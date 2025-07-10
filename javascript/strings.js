

/*----------------------------------------------strings-----------------------------------------------------------*/
// let msg='help! ' trim it and convert it to uppercase
let msg='help!  ';
let newMsg=msg.trim().toUpperCase();
console.log(newMsg);


let name='ApnaCollege';
console.log(name.slice(4,9));
console.log(name.indexOf('na'));
console.log(name.replace('Apna','our'));



// in javascript strings are immutable 

//Qs3. Write a JavaScript program to check whether a string is blank or not.

let string1="";
if ((string1.length)==0){
    console.log('it is empty');
}
else console.log('string has elements');

//Qs4. Write a JavaScript program to test whether the character at the given (character)index is lower case.

let character1='fatima';;
if (character1[5]==character1[5].toLocaleLowerCase()){
    console.log('index is in lower case ')
}
else{
    console.log('index is not in lower case');
}



//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.


let myname='          fatima    ';
console.log(myname.trim());


//Q Extract the last 3 characters of a given string

let class1='software engineering';
console.log(class1.slice(-3));
console.log(class1.slice(class1.length-3));

//Concatenate two strings stored in variables and print the result.

let firstName='Ali';
let lastName='Abdal';
console.log(firstName+' '+lastName);
//Count the number of characters in a given string.

let skill='graphic designing';
console.log(skill.length);

//Convert a string to uppercase and print the result.

console.log(skill. toLocaleLowerCase());

 //Replace all spaces with hyphens
 console.log(skill.replace(" ","-"));


  //Convert only the last character to uppercase

let str = "apple";
let lastCharUpper = str[str.length - 1].toUpperCase();
let result = str.slice(0, str.length - 1) + lastCharUpper;
console.log(result); // Output: applE



console.log(list1.includes('sugar'));

