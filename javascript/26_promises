// practice question 

/*function savetoDB(data, success, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDB('fatima',
  () => {
    console.log('success: your data was saved');
    savetoDB('hello',
      () => {
        console.log('data 2 was saved');
        savetoDB('world',
          () => {
            console.log('data 3 was saved');
          },
          () => {
            console.log('failure: your data 3 was not saved');
          }
        );
      },
      () => {
        console.log('failure: your data 2 was not saved');
      }
    );
  },
  () => {
    console.log('failure: your data 1 was not saved');
  }
);*/
// all the above code is prone to callback hell, which can be avoided using promises or async/await syntax.

/* 🔷 What is a Promise?
A Promise is a JavaScript object that represents a future result of an asynchronous operation — either:

✅ Success (fulfilled), or

❌ Failure (rejected)

Promises help us avoid callback hell and write cleaner, more manageable async code.


let promise = new Promise(function(resolve, reject) {
   asynchronous task here...

  if ( task successful ) {
    resolve("Success message");
  } else {
    reject("Error message");
  }
}); */



function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve(`Success: ${data} was saved`);
    } else {
      reject(`Failure: ${data} was not saved`);
    }
  });
}

savetoDB('fatima')
  .then((msg) => {
    console.log(msg);
     // from resolve()
    return savetoDB('hello');
    
  })
   .then(() => {console.log(
        'data 2 was saved') // from resolve()
  })
  .catch((err) => {
    console.log(err); // from reject()
  });
