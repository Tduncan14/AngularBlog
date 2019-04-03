var express = require('express');

var BlogSchema =require('./config/db.js')


if(BlogSchema){
    console.log(`the model has has been successfully exported`)
}
