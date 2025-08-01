/*
AJAX stands for Asynchronous JavaScript and XML. It is a technique used in JavaScript to send and receive data from a server without reloading the entire web page

Why Use AJAX?
-> Update a web page without reloading.

-> Send data to a server or receive data from a server in the background.

->Make your web app faster and smoother.
*/




/*What are HTTP Verbs?
HTTP verbs (also called HTTP methods) tell the server what action to perform on a given resource (like data or files). They are used in client-server communication, especially in AJAX, REST APIs, and web development.

GET	     Retrieve data from the server (read-only)
POST 	 Send new data to the server (create)
PUT	     Update existing data (replace entire record)
PATCH	  Partially update existing data
DELETE	  Remove data from the server

*/



/*🔹 What are Status Codes in JavaScript?
Status codes are numbers sent by the server to tell the browser (or your JavaScript code) what happened to your HTTP request.

They help you know if a request was successful, redirected, or failed.


 Common Status Codes
Code	Meaning  	Description
200	  OK	         Request successful
201	  Created	     New resource created (POST)
204	  No Content	 Request successful, no response body
400	  Bad Request	 Invalid request sent by client
401   Unauthorized	 User not authenticated
403	  Forbidden	     User not allowed to access
404	  Not Found	     Resource doesn't exist
500	 Internal Server Error	Server problem
*/


/* adding information to url


 Two Methods of Adding Information to a URL
There are two common ways to add information to a URL when sending data from the browser to a server:

✅ 1. Query Parameters (GET method)
Used to send data in the URL. Common in searches, filters, etc.

plaintext
Copy
Edit
https://example.com/search?name=Fatima&age=22
✅ Easy to see and bookmark
❌ Limited to short data, not secure for sensitive info

Example in JavaScript:


let name = "Fatima";
let age = 22;

let url = `https://example.com/search?name=${name}&age=${age}`;
fetch(url).then(res => res.json()).then(data => console.log(data));
✅ 2. Path Parameters (URL Segments)
Data is added directly into the path of the URL.

plaintext
Copy
Edit
https://example.com/users/123
Here, 123 is the user ID.

✅ Looks cleaner
✅ Common in REST APIs
❌ Less flexible than query parameters

Example in JavaScript:


let userId = 123;
let url = `https://example.com/users/${userId}`;
fetch(url).then(res => res.json()).then(data => console.log(data))


*/