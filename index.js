
const express= require('express')
var cors=require('cors')
require('./db')
const path = require("path");
const app=express()
app.use(express.json())
app.use(cors())
app.use('/',require('./Routes/Auth'))
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
app.listen(1000,()=>{
    console.log(` backend  is listening at http://localhost:1000`)
})