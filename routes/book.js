const express = require("express");
const router = express.Router();
const {createBook,getAllBooks,updateBook,deleteBook,getBook} = require("../controllers/book.js")


router.post("/book/create",createBook)
router.get("/book/allbooks",getAllBooks)
router.get("/book/getbook",getBook)
router.put("/book/update",updateBook)
router.delete("/book/delete",deleteBook);

module.exports= router;