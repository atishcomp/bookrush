const express = require("express");
const router = express.Router();
const {getAllFictionBooks} = require("../controllers/fiction.js")


//route
router.get("/fiction/fictionbooks",getAllFictionBooks)


module.exports= router;
