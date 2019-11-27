var fs = require('fs');
var db = readNote();

 function readNote(){
  let note = fs.readFileSync('./db/db.json');
  console.log("read note");
  return note;
}

function writeNote() {
  fs.writeFileSync('./db/db.json'), JSON.stringify(db)
  console.log("written note")
}

module.exports = function(app){
  app.get("/api/notes", function(req,res){
    db = readNote();
    res.json(db);
  });
  
  app.post("/api/notes", function(req, res){
    if(db.push != null){
      db.push(req.body);

      writeNote(db);

      res.json(true);
    }
  });

  app.delete("/api/notes/:id", function(req, res){
    const db = readNote();  
    
    const deleteId = req.params.id;
    
    for (let i=0; i<db.length; i+=1 ){
      if (db[i].id === deleteId){    
        db.splice(i,1);
        break;
    }}
    res.json(db);
    console.log("Note Deleted")
  });
};