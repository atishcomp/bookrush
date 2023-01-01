
var mongoose = require("mongoose");

// BOOK DB SCHEMA DESIGN
var bookSchema=new mongoose.Schema({

book_name:{
    type:String,  
    trimm:true,
    required:true
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
    type:String,
    // required:true
},
image:{
    type:String,
    // required:true
},
image_hd:{
    type:String,
    
}


},{timestamps:true})




module.exports = mongoose.model("Book",bookSchema)