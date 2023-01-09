
var mongoose = require("mongoose");

// BOOK DB SCHEMA DESIGN
var bookSchema=new mongoose.Schema({

book_name:{
   
    type:String,  
    trimm:true,
    required:true,
    
},
book_id:{
    type:String,
    
},
author_name:{
    type:String,
    trimm:true,
    required:true

},
description:{
    type:String,
},

page:{
    type:String
},
rating:{
    type:String,

},
date:{
    type:String,
    // required:true
},
price:{
    type:Number,
    // required:true
},
image:{
    type:String,
    // required:true
},
image_hd:{
    type:String,
    
},
home_category:{
    type:String
},
stock:{
    type:Number
},
category:{
    type:Array
}



},{timestamps:true})




module.exports = mongoose.model("Book",bookSchema)