const express = require("express");
const router = express.Router();
const {createBook,getAllBooks,updateBook,deleteBook} = require("../controllers/book.js")


router.post("/book/create",createBook)
router.get("/book/getbooks",getAllBooks)
router.put("/book/update",updateBook)
router.delete("/book/delete",deleteBook);

module.exports= router;