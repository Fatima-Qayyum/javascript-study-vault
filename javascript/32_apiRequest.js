/* let url = "https://catfact.ninja/facts";

fetch(url)
  .then((response) => {
    return response.json(); // Parse first response
  })
  .then((response1) => {
    console.log("response1 =", response1); // log the actual object
    return fetch(url); // send 2nd request
  })
  .then((response) => {
    return response.json(); // parse second response too
  })
  .then((response2) => {
    console.log("response2 =", response2); // log the actual object
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  */
async function getapi(){
    let url = "https://catfact.ninja/fact";
    try {
        let response1 = await fetch(url);
        let data1 = await response1.json();
        console.log("response1 =", data1.fact); // log the actual object

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log("response2 =", data2.fact);
    } catch (error) {
        console.error("Error:", error);
    }
}

getapi();