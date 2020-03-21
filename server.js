const express = require("express")

const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//html
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})


//api
app.get("/api/notes", (req, res) =>{
    res.json(savedNotes)
})

app.post("/api/notes", (req, res) =>{
    savedNotes.push(req.body)
    res.json(true)
})





app.listen(port, () => {
    console.log(`listening to port: ${port}`)
})