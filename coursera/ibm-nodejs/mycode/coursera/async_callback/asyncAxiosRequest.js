const axios = require('axios').default;

const connectToURL = (url) => {

    const req = axios.get(url);
    console.log(req);

    req.then(resp => {
        console.log("Fulfilled");
        console.log(resp.data);
    })

    .catch(err => {
        console.log("Rejected for url " + url);
        console.log(err.toString());
    });

}

console.log(".");
console.log(".");
console.log(".");
console.log("1 call start");
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json');
console.log("1 call end");
console.log(".");
console.log(".");
console.log(".");

console.log(".");
console.log(".");
console.log(".");
console.log("2 call start");
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json');
console.log("2 call end");
console.log(".");
console.log(".");
console.log(".");

console.log(".");
console.log(".");
console.log(".");
console.log("3 call start");
connectToURL('https://dummyjson.com/carts');
console.log("3 call end");
console.log(".");
console.log(".");
console.log(".");
