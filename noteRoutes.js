var fs = require("fs")
var notesData = getNotes();

const getNotes = () => {
  const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = '' + i;
  }
  
  return notes;
}

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = getNotes();
        res.json(notesData);
        console.log(`Received a ${req.method} request from ${req.url}`);
    });

    app.post("/api/notes", function (req, res) {
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
        console.log(`Received a ${req.method} request from ${req.url}`);
    });

    app.delete("/api/notes/:id", function (req, res) {
        const requestID = req.params.id;
        console.log(requestID);

        let note = notesData.filter(note => {
            return note.id === requestID;
        })[0];

        console.log(note);
        const index = notesData.indexOf(note);

        notesData.splice(index, 1);

        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        console.log(`Received a ${req.method} request from ${req.url}`)
        res.json("Note deleted");
    });
};
