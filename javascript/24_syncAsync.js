/*In JavaScript, **synchronous** and **asynchronous** refer to how tasks are executed:

**Synchronous (Blocking)**

Synchronous code runs **one line at a time**, **in order**.
JavaScript waits for each line to finish **before** moving to the next.*/
console.log("1");
console.log("2");
console.log("3");
/***Output:**
1  
2  
3
Everything runs in order.

### 🔹 **Asynchronous (Non-blocking)**

Asynchronous code **doesn't wait** for a task to complete.
It moves to the next line, and the slow task (like a timer or API call) finishes **later**.
*/
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");



/*
**Output:**
1  
3  
2
Line 3 runs **before** the `setTimeout`, because `setTimeout` is asynchronous.

 Why it matters:

JavaScript is **single-threaded**, so it uses **asynchronous** features (like `setTimeout`, `fetch`, `promises`) to handle time-consuming tasks **without freezing** the page.



 JavaScript Is Single-Threaded

JavaScript runs in a single thread – it can only do **one task at a time**.
So, how does it handle things like waiting for data from a server or a timer without **stopping everything**?

👉 The answer is: **Asynchronous behavior with the help of the Web APIs, Callback Queue, and Event Loop.**

🔹 How Asynchronous Code Works Internally

 🔸 Step-by-step:

1. **JavaScript calls Web APIs (provided by the browser)**
   These include:

   * `setTimeout`
   * `fetch`
   * `DOM events`
     These are handled **outside** the main JS thread.

2. **The task is handed over to the browser**
   For example, when you use `setTimeout`, JavaScript **doesn't wait**. It says:

   > "Browser, please wait 2 seconds and then run this function."

3. **The main thread continues running other code.**

4. **Once the async task is ready**, it's sent to the **Callback Queue**.

5. **The Event Loop** keeps checking:

   * "Is the call stack empty?"
   * If yes, it takes the function from the Callback Queue and runs it.

*/


console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");

/*
#### 🔸 What really happens:

1. `Start` → goes to console.
2. `setTimeout` is sent to **Web API**, and a timer starts.
3. `End` → goes to console.
4. After 2 seconds, the function inside `setTimeout` is sent to the **Callback Queue**.
5. **Event Loop** checks: "Is JS doing anything?" → No.
6. It sends the function to the **Call Stack**, and you see `Inside Timeout`.


 JavaScript uses the **browser’s Web APIs** to handle async tasks.
 The **Event Loop** ensures async functions are executed **only when the main thread is free**.
 This allows JavaScript to stay **non-blocking**, even with just one thread.

*/
   