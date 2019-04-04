const express = require('express');

const Mongoose = require('mongoose');


let Schema = Mongoose.Schema;


let ArticleSchema = new Schema ({
  title:{
      type: String,
      required:true
  },
   body:String,
   tag:{
    type:String,
    enum:['Politics','Economy','Education','Story','Tech']
   },
   createdOn:{
       type: Date,
       default:Date.now
   },
   photo:{
       type: String,
       required:true
   }
});

module.exports = Mongoose.model('ArticleModel',ArticleSchema);