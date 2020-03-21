const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const port = process.env.PORT || 8000

// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", function(req, res){
    res.send("testing")
})


// app.get("*", function(req, res){
    
// })

app.listen(port, function(){
    console.log(`listening to port: ${port}`)
})