function getdata(){
    fetchinfo().then(data => console.log(data));
   
}
async function fetchinfo(){
    return 'data loaded successfully';
}