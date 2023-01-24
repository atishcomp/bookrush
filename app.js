var express =require("express");
require('dotenv').config();
var app= express();
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser= require("body-parser");



app.use(cors())
app.use(bodyParser.json())

const bookRoutes = require("./routes/book") 
const fictionRoutes = require("./routes/fiction") 
const non_fictionRoutes = require("./routes/non_fiction") 

mongoose.connect(process.env.DATABASE_CONNECTION,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("DB CONNECTED") 
    }).catch((error)=>console.log(error.message))

    app.use("/",bookRoutes);
    app.use("/",fictionRoutes);
    app.use("/",non_fictionRoutes);

app.get('/',(req,res)=>{
    res.send("WELCOME TO HACKSCRIPT BACKEND")
  })
  

const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })
