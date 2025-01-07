const axios = require('axios').default;

const connectToURL = (url)=>{
  const req = axios.get(url);
  console.log(req);
  req.then(resp => {
      let listOfWork = resp.data;
      //console.log(listOfWork)
      console.log('success')
    })
  .catch(err => {
      console.log(err.toString())
  });
}

console.log("Before connect URL")
connectToURL('https://dummyjson.com/carts');
console.log("After connect URL")