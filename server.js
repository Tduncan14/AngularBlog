const express =require('express');
const Mongoose = require('mongoose');

const app = express();

const uri ='mongodb+srv://treek:pokemon1@project-k4ryz.mongodb.net/blog';
//let localhost ='';


let port = 8000


app.listen(port,(req,res) =>{
    console.log(`you are listen on ${port}`)
})

