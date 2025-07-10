
/*-------------------------------------------------ARRAYS IN JAVASCRIPT--------------------------------------------*/
let cars=["corolla","toyota","bmw"];
console.log(cars);     //[ 'corolla', 'toyota', 'bmw' ]
cars.push('mehran');
console.log(cars);      //[ 'corolla', 'toyota', 'bmw', 'mehran' ];


cars.pop();
console.log(cars);   //[ 'corolla', 'toyota', 'bmw' ]

cars.unshift('mehran');
console.log(cars);   //[ 'mehran', 'corolla', 'toyota', 'bmw' ]

cars.shift();
console.log(cars);    //[ 'corolla', 'toyota', 'bmw' ];


//----------------------------------------------practice question-------------------------------------------------------
let months=['january','july','march','august'];
months.shift();
months.shift();

console.log(months);
months.unshift('june');
months.unshift('july');
console.log(months);//[ 'july', 'june', 'march', 'august' ]

/*--------------------------------------------------Idex Of -----------------------------------------------------------*/

console.log(months.indexOf('august'));//->3

let lang=['c','c++','html','javascript','python','java','c##','sql'];
console.log(lang. reverse().indexOf('c'));//7



//include [search for value it returns true if value is available and return false if value is not availabe];


console.log(months.includes('august'));//-> it will display true because months have ausgust value;


console.log(months.includes('january'));//it will display false;






/* ----------------------------------------------concat-------------------------------------------------------------- */


let primary=['red','yellow','blue'];
let secondary=['orange','green','violet'];

let newPrimary=primary.concat(secondary);
console.log(newPrimary);///[ 'red', 'yellow', 'blue', 'orange', 'green', 'violet' ]  



 primary.reverse();
 console.log(primary);





 /*------------------------------------slice in arrays------------------------------------------------------------*/


 let alphabets=['a','b','c','d','e','f'];
 let short=alphabets.slice();
 let short1=alphabets.slice(2);
 console.log(alphabets);//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
 console.log(short);//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
 console.log(short1);//[ 'c', 'd', 'e', 'f' ]

 let short2=alphabets.slice(2,4);
 let short3=alphabets.slice(-2);
 console.log(short2);    //[ 'c', 'd' ]
 console.log(short3);    //[ 'e', 'f' ]



 /*---------------------------------------------------------SPLICE--------------------------------------------*/



 let colors=['red','blue','yellow','green','pink','white','black'];
 colors.splice(5);
 console.log(colors);          //[ 'red', 'blue', 'yellow', 'green', 'pink']
 colors.splice(0,1);
 console.log(colors);           //[ 'blue', 'yellow', 'green', 'pink' ]
colors.splice(0,0,'voilet','silver','grey','purple');//['voilet', 'silver', 'grey',   'purple', 'blue',   'yellow' 'green',  'pink']
console.log(colors);



let mons=['jan','july','march','august'];
 mons.splice(0,2,'july','june');
 console.log(mons);  //[ 'july', 'june', 'march', 'august' ]



//--------------------------------------------practicejavascriptconcepts-------------------------------------------------------


//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].For example: for array [7, 9, 0, -2] and n=3


let prArray=[7, 9, 0, -2];
let newPrArray=prArray.slice(0,3);
console.log(newPrArray);

let array1=prArray.slice(-3);
console.log(array1);

//Qs6. Write a JavaScript program to check if an element exists in an array or not.


let list1=['sugar', 'milk','eggs','tea', 'cofee'
];

// 1.Create an array of 3 colors. Add one more color to the end of the array and print the updated array.

let colors1=['pink','red','red','yellow'];
colors1.push('white');
console.log(colors);



//Given an array of numbers: [5, 10, 15, 20, 25], print the second and fourth elements.
let numbers= [5, 10, 15, 20, 25];
console.log(numbers[0]);
console.log(numbers[3]);


//Remove the last item from the array ["pen", "pencil", "eraser", "sharpener"] and print the result.

let stationary=["pen", "pencil", "eraser", "sharpener"];
stationary.pop();
console.log(stationary);


//Check if "banana" exists in the array ["apple", "banana", "grape"].If yes, print "Yes", otherwise print "No".


let fruits=["apple", "banana", "grape"];
console.log(fruits.includes('banana'));


//Create an array of 4 items. Print the total number of items using .length.

let items=[1, 2 , 3 , 5];
console.log(items.length);


//Create an array of 5 student names. Change the third student's name to "Ali" and print the updated array.


let studentsName=['bilal','asim','azeem','asif','salar'];
studentsName[2]='ali';
console.log(studentsName);



//Given an array let numbers = [2, 4, 6, 8, 10];, increase the first number by 5 and print the array.
numbers = [2, 4, 6, 8, 10];
numbers[0]=numbers[0]+2;
console.log(numbers);


//Make an empty array called fruits. Add "apple" and "mango" to it using .push(), then print the array.

let fruits2=[];
fruits2.push('apple');
fruits2.push('mango');
console.log(fruits2);


//Given let items = ["book", "pen", "notebook", "bag"];,print a new string that says: "I have a bag" using the last element from the array


let items2 = ["book", "pen", "notebook", "bag"];
let message = "I have a " + items2[items2.length - 1];
console.log(message); // Output: I have a bag
































