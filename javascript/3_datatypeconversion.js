
let score='33abc';
console.log(typeof score);/*33abc true,false,undefined check all these things for better understanding*/
console.log(typeof (score));

let score1 =null;
console.log(typeof score1);
console.log(typeof (score1));



let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
//=======
let valueInNumber1=Number(score);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


//"33"-> 33
// "33abc"->NaN type of NaN is number;
// true->1  , false->0;


/*let isloggedIn=1;
let boolenaIsLoggedIn=Boolean(isloggedIn);
console.log(boolenaIsLoggedIn);*/

/*let isloggedIn="";
let boolenaIsLoggedIn=Boolean(isloggedIn);
console.log(boolenaIsLoggedIn);*/


let isloggedIn="fatima";
let boolenaIsLoggedIn=Boolean(isloggedIn);
console.log(boolenaIsLoggedIn);

//1-> ture; 0->false;
//""->false;
// "hitesh"->true;



// convert into string

let someNumber=22;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



//******************************************Operations***********************************


let value =3;
let negValue=-value;
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1='hello';
let str2='fatima';
let str3=str1+str2;
console.log(str3);


console.log("1"+2);//->12
console.log(1+"2");//->12
console.log("1"+2+2);//->122
console.log(1+2+"2");//->32

/*String + Number = String: If any operand is a string, JavaScript converts the other to a string and joins them.
Left to Right: JavaScript evaluates expressions from left to right, which affects how strings and numbers combine.*/

//INCREMENT IN JAVASCRIPT  


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);// Expected output: "x:4, y:3"


let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.*/


