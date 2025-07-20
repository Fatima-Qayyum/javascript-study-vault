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

let count = 0;

let intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // stops the interval after 5 runs
  }
}, 1000);
