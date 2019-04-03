const express = require('express');
const Mongoose = require('mongoose');
const ArticleSchema = require('../api/models/Article')




const uri ='mongodb+srv://treek:pokemon1@project-k4ryz.mongodb.net/blog';


const options = {

    reconnectTries: Number.MAX_VALUE,
    poolSize:10,
    useNewUrlParser:true
}

Mongoose.connect(uri,options)
.then(() =>{
    console.log('the database has connected with the mongo')
},
 (err) =>{
     console.log(`this is the ${err}`)
 });

