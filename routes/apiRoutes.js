var notes = require("../db/db.json");
var path = require("path");
var fs = require("fs");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
  
  app.post("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), function() {
      req.body.id = notes.length;
      notes.push(req.body);
      console.log(notes);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function() {});
    })
  });

  app.delete("/api/notes/:id", function(req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), function() {
      var noteId = req.params.id;
      var deleteNote = JSON.stringify(notes.filter(note => note.id != noteId))
      fs.writeFile(path.join(__dirname, "../db/db.json"), deleteNote, () => {
        console.log(`deleted`)
      }); 
    });
  });
};