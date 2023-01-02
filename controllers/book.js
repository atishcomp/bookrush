const Book = require("../models/book")
const Fiction = require("../models/fiction")
const Nonfiction = require("../models/non_fiction")
require('dotenv').config();


// FUNCTION TO CREATE USER IN DB BY ADMIN
exports.createBook= (req,res)=>{   
    console.log(req.body)

   const book= new Book(req.body); 

   book.save((err,values)=>{
       if(err || !values){
           return res.status(400).json({
               error:"UNABLE TO CREATE BOOK IN DB"
           });
       }
         var category= req.body.category
       console.log(category[0]+"  "+category.length+"  "+category)
        
       for(var a=0;a<category.length;a++){

           var book_object={"book_name":req.body.book_name,"price":req.body.price,"image":req.body.image,"book_id":req.body.book_id}

           if(category[a]=="Fiction"){
 //SAVING FICTION BOOKS
 var fiction= new Fiction(book_object); 

 fiction.save((err,values)=>{
  if(err || !values){
return res.status(400).json({
   error:"UNABLE TO CREATE BOOK IN DB"
   });
 }
 console.log("Fiction book added.")
});
           }
           if(category[a]=="Nonfiction"){
            //SAVING NON-FICTION BOOKS
            var non_fiction= new Nonfiction(book_object); 
           
            non_fiction.save((err,values)=>{
             if(err || !values){
           return res.status(400).json({
              error:"UNABLE TO CREATE BOOK IN DB"
              });
            }
            console.log("Nonfiction book added.")
           });
                      }
         

       }

        
       res.send({
           "Message":"BOOK SUCCESSFULLY CREATED"
       })

   });
}

//BOOK DATA UPDATION BY ADMIN ONLY
exports.updateBook=(req,res,next)=>{  
   Book.findOneAndUpdate({"_id" :"63b1b37f26629d91e8e9476d"},
{ $set: { "book_name": req.body.book_name,"author_name":req.body.author_name,"description":req.body.description,"page":req.body.page,"rating":req.body.rating,"date":req.body.date,"price":req.body.price,"image":req.body.image,"image_hd":req.body.image,"home":req.body.home,"home_category":req.body.home_category, }}, 
    {new:true, useFindAndModify: false}, 

    (err,user)=>{
        if(err){
            return res.status(400).json({
                error:"ERROR IN UPDATING BOOK"
            })
        }
        res.json({"Result":"BOOK DATA UPDATED SUCCESSFULLY"})
        next();
    })

  }  

  //DELETING THE BOOK DATA BY ADMIN
  exports.deleteBook= async (req,res)=>{   
    console.log(req.query._id)
    try {
        const deleteDoc=await Book.findByIdAndDelete(req.query._id)
         if(!req.query._id){
            return res.status(400).send()
         }
         res.send(deleteDoc)
    } catch (error) {
        res.status(500).send(error)
    }

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
