let cars=["corolla","toyota","bmw"];
console.log(cars);//[ 'corolla', 'toyota', 'bmw' ]
cars.push('mehran');
console.log(cars);//[ 'corolla', 'toyota', 'bmw', 'mehran' ];


cars.pop();
console.log(cars);//[ 'corolla', 'toyota', 'bmw' ]

cars.unshift('mehran');
console.log(cars);//[ 'mehran', 'corolla', 'toyota', 'bmw' ]

cars.shift();
console.log(cars);//[ 'corolla', 'toyota', 'bmw' ];


//practice question
let months=['january','july','march','august'];
months.shift();
months.shift();

console.log(months);
months.unshift('june');
months.unshift('july');
console.log(months);//[ 'july', 'june', 'march', 'august' ]

//idex Of 

console.log(months.indexOf('august'));//->3



//include [search for value it returns true if value is available and return false if value is not availabe];


console.log(months.includes('august'));//-> it will display true because months have ausgust value;


console.log(months.includes('january'));//it will display false;






/* --------------------------------------concat--------------------------------------- */


let primary=['red','yellow','blue'];
let secondary=['orange','green','violet'];

let newPrimary=primary.concat(secondary);
console.log(newPrimary);///[ 'red', 'yellow', 'blue', 'orange', 'green', 'violet' ]  



 primary.reverse();
 console.log(primary);





 /*------------------------------------slice in arrays*/


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













