
var path = require('path');
var fs = require('fs');

const readNote = () => {

  const noteData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')))
  return noteData;
}

const writeNote = (db) => {
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteData), (err) => {
      if (err) return ({ err });
  })
}

module.exports = function(app){
    app.get("/api/notes", function(req,res){
        const db = readNote();
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        let newNote = req.body;

        let db = noteData();

        db.push(newNote);

        writeNote(db);

        return res.json(db);
    });

    app.delete("/api/notes/:id", function(req, res){
        const db = noteData();
        
        const deleteId = req.params.id;
        for (let i=0; i<db.length; i+=1 ){
          if (db[i].id === deleteId){
            
            db.splice(i,1);
            break;
          }}
        res.json(db);
      });
};