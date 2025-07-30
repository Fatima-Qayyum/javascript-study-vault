/* What is Promise Chaining?
Promise chaining means connecting multiple .then() calls together so that:

Each one runs after the previous one finishes successfully

You can return values or promises from one .then() to the next

One .catch() at the end can catch errors from any step

✅ Why use chaining?
It helps:

Avoid callback hell

Write clean, linear async logic

Handle multiple async steps in order*/

function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let speed = Math.random();
    if (speed > 0.5) {
      resolve(`✅ ${data} saved`);
    } else {
      reject(`❌ ${data} not saved`);
    }
  });
}

// Chaining promises
savetoDB("Fatima")
  .then((msg1) => {
    console.log(msg1);
    return savetoDB("Hello"); // return another promise
  })
  .then((msg2) => {
    console.log(msg2);
    return savetoDB("World");
  })
  .then((msg3) => {
    console.log(msg3);
  })
  .catch((err) => {
    console.log("Error:", err); // handles any rejection
  });
