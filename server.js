const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');

// db isntance connection

require("./config/db");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//(Cross-Origin REesource Sharing) headers to support CROSS-SITE http requests

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Acess-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With');


    // allow preflight
    if(req.method === 'options'){
        res.send(200);
    }
         else{
             next()
         }
     
});

var routes = require('./api/routes/articleListRoutes');

routes(app);


app.listen(port,(req,res)=>{
 console.log(`you are listening on ${port}`)})




