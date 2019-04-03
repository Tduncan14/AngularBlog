var express = require('express');


Router = express.Router();


Router.get('/',(req,res) =>{

    res.send('Welcome to the admin page');
});


Router.get('/about',(req,res) =>{
    res.send('Welcome to the about page')
})



module.exports = Router