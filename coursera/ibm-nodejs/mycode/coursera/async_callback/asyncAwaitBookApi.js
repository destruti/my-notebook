const axios = require('axios').default;
const connectToURL = async(url)=>{
    //let list_api = axios.get(url);
    let list_api = await axios.get(url);
    console.log(list_api.status)
    return 
}

console.log("Before connect URL")
let list_api = connectToURL('https://bored-api.appbrewery.com/random').catch(err=>console.log(err.toString()));
console.log(list_api)
console.log("After connect URL")