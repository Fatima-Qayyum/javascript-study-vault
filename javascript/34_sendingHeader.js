
const axios = require('axios');
const url = 'https://icanhazdadjoke.com/';
async function fetchJoke() {
  try{
    const config={headers:{Accept:'application/json'}};
    const response = await axios.get(url, config);
    console.log(response.data.joke);

  }
  catch (error) {
    console.error('Error fetching joke:', error);
  } 
}

fetchJoke();

/* config
A plain JavaScript object that you pass to axios.get() as the second argument — this object contains configuration for the request.

🔸 headers
A key in the config object — it holds another object with key-value pairs representing HTTP headers.

🔸 Accept: 'application/json'
This tells the server:

“I want the response in JSON format.”

If you don’t include this, https://icanhazdadjoke.com/ would return HTML, not JSON.*/