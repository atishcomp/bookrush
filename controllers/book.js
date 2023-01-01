const Book = require("../models/book")
require('dotenv').config();



// FUNCTION TO CREATE USER IN DB
exports.createBook= (req,res)=>{   
    console.log(req.body)

   const book= new Book(req.body); 

   book.save((err,values)=>{
       if(err || !values){
           return res.status(400).json({
               error:"UNABLE TO CREATE BOOK IN DB"
           });
       }
       res.send({
           "Message":"BOOK SUCCESSFULLY CREATED"
       })

   });
}

//THIS WILL RETURN THE LIST OF ALL USERS
exports.getAllBooks = (req,res)=>{
    Book.find().exec((err,users)=>{   
        if(err || !users){
             return res.status(400).json({
                 error:"SOME ERROR OCCURRED IN GETTING DATA"
             })
        }
        res.json(users);

   })
}