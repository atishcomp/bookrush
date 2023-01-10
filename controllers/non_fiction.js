const Book = require("../models/book")
const Fiction = require("../models/fiction")
const Nonfiction = require("../models/non_fiction")
require('dotenv').config();

//THIS WILL RETURN THE LIST OF ALL BOOKS
exports.getAllNonfictionBooks = (req,res)=>{
    Nonfiction.find().exec((err,users)=>{   
        if(err || !users){
             return res.status(400).json({
                 error:"SOME ERROR OCCURRED IN GETTING FICTION BOOK DATA"
             })
        }
        res.json(users);

   })
}