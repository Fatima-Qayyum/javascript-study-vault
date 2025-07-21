/*-------------------------------------setInterval() in JavaScript----------------------------------*/

 /*syntax:  setInterval(function, milliseconds);
function sayHello() {
 console.log("Hello World!");
}
setInterval(sayHello, 2000); -> Prints "Hello World!" every 2 seconds*/


//With Arrow Function

/*setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);*/

//Stop setInterval() using clearInterval()

/*let count = 0;

let intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // stops the interval after 5 runs
  }
}, 1000);*/


/*------------------------------------------------------------set interval functions----------------------*/

// Q1 : write a function that prints "hello world " 5 times at intervals of 2s each;

let count = 0;

let id1 = setInterval(() => {
  if (count < 5) {
    console.log("hello world");
    count++;
  } else {
    clearInterval(id1);
  }
}, 2000);











