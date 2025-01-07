const express = require('express');
const app = new express();

app.use("/user/:id",function (req, res, next) {
    if(req.params.id == 1) {
        throw new Error("Trying to access admin login")
    } else{
        console.log('no problemas in middleware')
        next();
    }
})

app.get("/user/:id", (req,res) => {
    res.status(200).send("Hello! User Id " + req.params.id);

});


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

