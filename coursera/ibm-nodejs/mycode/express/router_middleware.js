const express = require('express');

const app = new express();

let userRouter = express.Router();
let itemRouter = express.Router();

userRouter.use(function (req, res, next) {
    console.log('user router middleware:', Date());
    next();
});

// curl http://localhost:3333/user/1
userRouter.get('/:id', function (req, res, next) {
    res.send("User " + req.params.id + " last successful login " + Date());
});

itemRouter.use(function (req, res, next) {
    console.log('item router middleware:', Date());
    next();
});

// curl http://localhost:3333/item/1
itemRouter.get('/:id', function (req, res, next) {
    res.send("Item " + req.params.id + " last enquiry " + Date());
});

app.use('/user', userRouter);
app.use('/item', itemRouter);

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
