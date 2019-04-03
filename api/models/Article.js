const express = require('express');

const Mongoose = require('mongoose');


let Schema = Mongoose.Schema;


let ArticleSchema = new Schema ({
  title:{
      type: String,
      required:true
  },
   body:String,
   createdOn:{
       type: Date,
       default:Date.now
   }
});




module.exports = Mongoose.model('Article',ArticleSchema);