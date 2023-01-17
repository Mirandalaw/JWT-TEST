const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userRouter = require('./apis/user/router/user');
const boardRouter = require('./apis/board/router/board');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRouter);
app.use('/board',boardRouter);

module.exports = app;