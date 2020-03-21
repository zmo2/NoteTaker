
const savedNotes = require("./db/db.json")

module.exports = function(app){
    app.get("/api/notes", (req, res) =>{
        res.json(savedNotes)
    })
    
    app.post("/api/notes", (req, res) =>{
        savedNotes.push(req.body)
        res.json(true)
    })
}
