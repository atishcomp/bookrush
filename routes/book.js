const express = require("express");
const router = express.Router();
const {createBook,getAllBooks} = require("../controllers/book.js")



router.post("/book/create",createBook)
router.get("/book/getbooks",getAllBooks)
module.exports= router;