onst url = 'https://icanhazdadjoke.com/';
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