
var mongoose = require("mongoose");

// BOOK DB SCHEMA DESIGN
var non_fictionSchema=new mongoose.Schema({

book_id:{
    type:String
},    
book_name:{
    type:String,  
    trimm:true,
    required:true,
    
},

price:{
    type:String,
    // required:true
},
image:{
    type:String,
    // required:true
},




},{timestamps:true})




module.exports = mongoose.model("Nonfiction",non_fictionSchema)