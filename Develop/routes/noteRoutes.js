var express = require("express");
var noteData = require("../db/db.json");


module.exports = function(app){
    app.get("/api/notes", function(req,res){
        res.json(noteData);
    });

    app.post("/api/notes", function(req, res){
        if (noteData.length < CharacterData(10000)){
            noteData.push(req.body);
            res.json(true);
        }
        else prompt("Write a note, not an essay")
        .clearfix()
    });

    app.post("*", function (req, res){
        noteData.length = 0;

        res.json({ok: true})
    });
};