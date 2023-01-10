const express = require("express");
const router = express.Router();
const {getAllFictionBooks} = require("../controllers/fiction.js")



router.get("/fiction/fictionbooks",getAllFictionBooks)


module.exports= router;