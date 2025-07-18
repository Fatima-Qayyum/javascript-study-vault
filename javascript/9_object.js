// basic syntax of objects
const items = {
  name: 'milk',
  quantity: '1 liter',
  price: 370,
  brand: 'olpers'
}
console.log(items["name"]);       //methods for displaying properties of objects and their values
console.log(items.quantity);
console.log(items["name"])


items.name = "juice";// this will update name for milk to juice .
items.expireDate = '12.01.2026';// this will add this property in object items;
console.log(items)

delete items.expireDate; // this will delete the expirydate key form item object

console.log(items);


//-------------------------------------------------------------------------------------

//create an object using for the properties of twitter post using which includes username,content ,likes,reposts, tags;

const post = {
  username: '@fatima',
  content: 'variables in javascript',
  likes: 20,
  reposts: 2,
  tags: ['@asma', '@humna']
}


console.log(post['username']);
console.log(post.content);
console.log(post.reposts);
console.log(post.likes);
console.log(post.tags);
//-------------------------------------------------------------------------------------


//Concept: Storing Object Property in a Variable in JavaScript
let student = {
  name: "Fatima",
  age: 21
};

// Store property in a variable
let studentName = student.name;

// Use the variable later
console.log("Hello, " + studentName); // Hello, Fatima





//-------------------------------------------------------------------------------------


/*---------------------------------NESTED OBJECTS---------------------------------*/

const classInfo = {
  asma: {
    grade: 'A+',
    city: 'lahore'
  },
  faiza: {
    grade: 'A',
    city: 'faisalbad'

  },
  alia: {
    grade: 'B',
    city: 'jamshor'
  }
}


console.log(classInfo);  // it will display complete object 
console.log(classInfo.alia);// it will display object inside object
console.log(classInfo.asma);
console.log(classInfo.faiza);


console.log(classInfo.alia.grade);// it will display specific property of nested object

/*--------------------------------------ARRAY OF OBJECTS ----------------------------*/


const data = [{
  name: 'fatima', grade: 'A',
  city: 'faisalbad'
}, {
  name: 'ali',
  grade: 'A',
  city: 'faisalbad'
}, {
  name: 'alia',
  grade: 'A',
  city: 'faisalbad'
}, {
  name: 'asma', grade: 'A',
  city: 'faisalbad'
}]


console.log(data[0]);
console.log(data[0].grade);
data[0].age=24;// ADD KEY INSIDE OBJECT IN AN ARRAY
console.log(data);



/*--------------------------------------------MATH OBJECT--------------------*/



/*In JavaScript, the Math object is a built-in object that lets you perform mathematical operations like rounding numbers, generating random numbers, and more
*/


Math.abs(-5); //   5  	Returns the absolute value
Math.pow(2, 3);//  8      Math.pow(x, y) Raises x to the power y   
Math.sqrt(16); // 4       	Returns the square root
Math.floor(4.9) ; //4      	Rounds down to the nearest int
Math.round(4.7);  //5  
Math.random();//      Returns a random number (0 to 1)
Math.max(3, 7, 1)//7;   	Returns the largest number
Math.min(3, 7, 1)//1;     Returns the smallest number
Math.round(4.7) //5;      Rounds to the nearest integer




/* ---------------------------------PRACTICE  QUESTION----------------------*/


/* Q1 :create a program that represents a random number representing a dice roll,the number should be between 1 and 6*/

let Number1 =Math.floor(Math.random()*6)+1;
console.log(Number1);

/* Q2 : Create an object representing a car that stores the following properties for the car: name , model, colour; print the cars name;*/


const car={
  name:'civic',
  model:2011,
  color:'black'
}
console.log(car.name);
console.log(car["name"]);


/* Q3: Create an object person with their name,age ,city . Edit city original value to newyork  add a new value country and set it to united states;*/
 const person={

  name:'kaif',
  age:32,
  city:'Istanbul',

 }

 console.log(person);  //{ name: 'kaif', age: 32, city: 'Istanbul' }
 person.city='New york';
 person.country="United States";
 console.log(person);//{ name: 'kaif', age: 32, city: 'New york', country: 'United States' }






