var notes = require("../journal.json");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
    notes.push(newNote);
    res.json(newNote);
    console.log(newNote);
    // notes.push(req.body);
    });

  app.post("/api/notes/:id", function(req, res) {
    var chosen = req.params.notes;
    console.log(chosen);

    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(notes[i].length = 0);
      }
    }

    // notes[i].length = 0; 
    // res.json({ ok: true });
  });
};