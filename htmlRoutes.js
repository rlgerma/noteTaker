var path = require("path");

module.exports = function(app) {

    app.get("/", (req, res) => {
        console.log(`Received a ${req.method} from URL ${req.url}`)
        res.sendFile(path.join(__dirname, "/public/index.html"));
    });

    app.get("/notes", (req, res) => {
        console.log(`Received a ${req.method} from URL ${req.url}`)
        res.sendFile(path.join(__dirname, '/public/notes.html'));
    });

    app.get("*", (req, res) => {
        console.log(`Received a ${req.method} from URL ${req.url}`)
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });
};