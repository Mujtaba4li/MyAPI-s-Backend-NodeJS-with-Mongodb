const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
require('dotenv/config');
// routes
const user=require('./routes/user');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/user',user);

//home req
app.get('/',(req,res)=>{
   res.send("Welcome to home");
});
app.get('/api',(req,res)=>{
   res.send("Welcome to home");
});

// DB Connection 
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connect with MongoDB is successfull");
});


// Port running on 
const port=320;
app.listen(port,()=>{
    console.log(`App running at http://localhost:${port}`);
});