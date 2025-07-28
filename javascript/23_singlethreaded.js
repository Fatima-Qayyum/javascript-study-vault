/*
 What does **single-threaded** mean in JavaScript?

JavaScript is **single-threaded**, which means:

🧵 **It does one thing at a time**.
It runs your code **line by line**, from top to bottom.



### ❓ Then how does `setTimeout()` work if JS runs one line at a time?

Even though JavaScript runs one line at a time, **the browser helps it with special features**.

These features are **not part of JavaScript**, but the **browser gives support** to do things like:

* Waiting for some time (`setTimeout`)
* Waiting for user actions (like clicking a button)
* Making network requests*/





console.log("Start");

setTimeout(() => {
  console.log("Waited 2 seconds");
}, 2000);

console.log("End");


/* Output will be:**

```
Start
End
Waited 2 seconds
```

Even though we told JavaScript to wait 2 seconds, it doesn’t stop everything. Instead:

1. JavaScript says, “Hey browser, please wait 2 seconds.”
2. The browser waits in the background.
3. JavaScript moves on and prints “End.”
4. After 2 seconds, the browser tells JavaScript: “Time's up! Now run this function.”
5. Then it prints “Waited 2 seconds.”

---

### 🎯 Simple Idea

* JavaScript runs **one line at a time**.
* For things that take time (like waiting), it asks the **browser to help**.
* JavaScript continues, and when the time is ready, the browser gives the result back.

---

Let me know if you want a drawing or visual example to understand it even better!*/
