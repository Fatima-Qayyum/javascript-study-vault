// Q1:Task: Create a promise that resolves with "Hello, Fatima!" after 1 second.
/*
function message(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve('done showing message');

        },1000);
    })
    }
message('hello').then((result)=>{console.log(result)});

/*  Q2: Create a function greet(name) that returns a Promise.
After 1 second, it should print:
Hello, [name]!
Then resolve the promise with the message "Greeting complete".

Call the function and log the result.


function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hello ,${name}`);
            resolve('greeting complete');
        }, 1)
    })
}
greet('fatima').then((msg) => {
    console.log(msg)
})

    
//Q3: . Create a Promise that resolves after 2 seconds and prints “Task completed!”
let result =  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('task completed');
        resolve('we resolve it ');
    }, 2000)

})

result.then((msg) => {

    console.log(msg);


})


// Q4. Create a function fetchData() that returns a Promise. If dataFound is true, resolve with "Data loaded", else reject with "No data found".

function fetchdata(data){
    return new Promise((resolve,reject)=>{
        if(data){
            console.log('found');
            resolve ('data loaded')
        }
        else{
            reject('no data found')
        }


    })
}
fetchdata().then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})
    
   //Q5:  Chain Promises to simulate this flow:  Start   Load user  Load post  Show on UI   Practice: .then() chaining.
function start() {
    return new Promise((resolve) => {
        console.log("Start");
        resolve();
    });
}

function loadUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User loaded");
            resolve({ id: 1, name: "John" });  // sample user data
        }, 1000);
    });
}

function loadPosts(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Posts loaded for ${user.name}`);
            resolve(["Post 1", "Post 2"]);  // sample posts
        }, 1000);
    });
}

function showOnUI(posts) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Showing posts on UI:", posts);
            resolve();
        }, 1000);
    });
}

// Chaining the promises
start()
    .then(loadUser)
    .then(loadPosts)
    .then(showOnUI)
    .catch((error) => {
        console.error("Something went wrong:", error);
    });
*/

    //  Q6:    Q5. Use Promise.all to run 3 Promises in parallel that resolve after 1s, 2s, and 3s. Show all results.

    function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task1')
            resolve("Task 1 done (1s)");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task2')
            resolve("Task 2 done (2s)");
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task3')
            resolve("Task 3 done (3s)");
        }, 3000);
    });
}

Promise.all([task1(), task2(), task3()])
    .then((results) => {
        console.log("All tasks done:");
        console.log(results);  // ["Task 1 done (1s)", "Task 2 done (2s)", "Task 3 done (3s)"]
    })
    .catch((error) => {
        console.error("One task failed:", error);
    });


    //note We use Promise.all() when we want to run multiple Promises in parallel and wait for all of them to finish before moving forward.


    //Q7 . Create a Promise-based function doubleAfter1Sec(num) that returns double the number after 1 second. Then use it to double 5. Practice: Return values from Promises.

    function doubleAfter1Sec(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);  // double the number after 1 sec
        }, 1000);
    });
}

// Use the function
doubleAfter1Sec(5).then((result) => {
    console.log("Doubled value is:", result);  // Output: 10
});
