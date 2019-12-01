var fs = require("fs")

const getNotes = () => {
  const note = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  
  for (let i = 0; i < note.length; i++) {
    note[i].id = '' + i;
  }
  return note;
}

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = getNotes();
        res.json(notesData);
        console.log(`Received a ${req.method} request from ${req.url}`);
    });

    app.post("/api/notes", function (req, res) {
        notesData = getNotes();
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
        console.log(`Received a ${req.method} request from ${req.url}`);
    });

    app.delete("/api/notes/:id", function (req, res) {
        const noteID = req.params.id;
        console.log(noteID);

        let note = notesData.filter(note => {
            return note.id === noteID;
        })[0];

        console.log(note);
        const index = notesData.indexOf(note);

        notesData.splice(index, 1);

        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        console.log(`Received a ${req.method} request from ${req.url}`)
        res.json("Note deleted");
    });
};
