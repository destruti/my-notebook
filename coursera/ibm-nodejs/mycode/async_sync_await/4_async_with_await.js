const axios = require('axios').default;

const connectToURL = async(url)=>{
    let list_api = await axios.get(url);
    console.log(list_api)
}

console.log("Before connect URL")
let list_api = connectToURL('https://jsonplaceholder.typicode.com/posts').catch(err=>console.log(err.toString()));
console.log(list_api)
console.log("After connect URL")