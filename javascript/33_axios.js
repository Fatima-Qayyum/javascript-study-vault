/*What is Axios.js?
Axios is a JavaScript library used to make HTTP requests from the browser or Node.js. It’s commonly used in front-end applications (especially with React, Vue, or Angular) to fetch or send data to APIs.

✅ Key Features:
Promise-based: Works like fetch but with more powerful features.

Supports async/await.

Works in both browser and Node.js.

Handles JSON automatically.

Supports request/response interceptors.

Can send data using GET, POST, PUT, DELETE, etc.
*/

/*const axios = require('axios');
axios.get('https://catfact.ninja/fact')
  .then(response => {
    console.log(response.data); // shows the cat fact
  })
  .catch(error => {
    console.error(error);
  });*/


  /*❓ Is axios.get() used instead of .json()?
🟡 Not exactly. They serve different roles:

✅ 1. axios.get()
Used to send a GET request to a server.

It automatically parses the JSON response, so you don’t need .json().


axios.get('https://catfact.ninja/fact')
  .then(res => {
    console.log(res.data); // JSON is already parsed
  });
✅ 2. .json()
Used with the fetch() API to manually parse the response into JSON.


fetch('https://catfact.ninja/fact')
  .then(response => response.json()) // <- .json() is needed
  .then(data => {
    console.log(data);
  });*/
