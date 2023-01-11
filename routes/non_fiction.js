const express = require("express");
const router = express.Router();
const {getAllNonfictionBooks} = require("../controllers/non_fiction.js")



router.get("/nonfiction/nonfictionbooks",getAllNonfictionBooks)


module.exports= router;