const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const port = process.env.PORT || 8090

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')));

//html Section
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

//api Section
const savedNotes = require("./db/db.json")

app.get("/api/notes", (req, res) =>{
    res.json(savedNotes)
})

let idNum = 0
app.post("/api/notes", (req, res) =>{
    if(savedNotes[0] === undefined){
        idNum = 1
    }else{
        idNum = savedNotes[savedNotes.length-1].id + 1
    }
    req.body.id = idNum
    savedNotes.push(req.body)
    res.json(true)
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes))
})

app.delete("/api/notes/:id", (req, res) =>{
    let inputId = parseInt(req.params.id)

    for(let i = 0; i<savedNotes.length; i++){
        if(savedNotes[i].id === inputId){
            savedNotes.splice(i,1)
            fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes))
            res.json(true)
            console.log("done")
        }
    }
})

//default url
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(port, () => {
    console.log(`listening to port: ${port}`)
})