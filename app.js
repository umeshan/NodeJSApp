const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');
const postRouter = require('./routes/posts')

//MiddleWare
 app.use(bodyParser.json())
 app.use('/posts',postRouter);

 //ROUTES
app.get('/',(req,res)=>{
   res.send('Hello in home page')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=> console.log(' ==== DB Connected Successfully !!! ==='));

//Start listen to server
app.listen(3000);