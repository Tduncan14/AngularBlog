const express =require('express');
const Mongoose = require('mongoose');

const app = express();

const uri ='mongodb+srv://treek:pokemon1@project-k4ryz.mongodb.net/';
let localhost ='';

const options = {
    reconnectTries:Number.MAX_VALUE,
    poolSize:10,
    useNewParserUrl: true
}

Mongoose.connect(uri,options)
.then(() =>{
    console.log('the database has been connected');
},
(err) =>{
 console.log(`this is the ${err}`)
});


let port = 8000


app.listen(port,(req,res) =>{
    console.log(`you are listen on ${port}`)
})

