const express = require('express');
const app = express();
const userRouter = require('./apis/user/router/userRouter');

// app.set("view engine","pug");
// app.set("views",__dirname+"/views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRouter);

module.exports = app;