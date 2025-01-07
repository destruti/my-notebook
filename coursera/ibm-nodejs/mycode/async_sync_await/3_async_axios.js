const axios = require('axios').default;

const connectToURL = (url) => {

    const req = axios.get(url);
    // Promise { <pending> }
    console.log(req);

    req.then(resp => {
        let listOfWork = resp.data;
        //console.log(listOfWork)
        console.log('success')
    })
    .catch(err => {
        console.log("Rejected for url " + url);
        console.log(err.toString());
    });

}

console.log(".");
console.log(".");
console.log(".");
console.log("call start");
connectToURL('https://dummyjson.com/carts');
console.log("call end");
console.log(".");
console.log(".");
console.log(".");
