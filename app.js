var express =require("express");
require('dotenv').config();
var app= express();
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser= require("body-parser");



app.use(cors())
app.use(bodyParser.json())

const bookRoutes = require("./routes/book") 

mongoose.connect(process.env.DATABASE_CONNECTION,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("DB CONNECTED") 
    }).catch((error)=>console.log(error.message))

    app.use("/",bookRoutes);

app.get('/',(req,res)=>{
    res.send("WELCOME TO HACKSCRIPT BACKEND SERVICE,updated(21/12/22)")
  })
  

const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })