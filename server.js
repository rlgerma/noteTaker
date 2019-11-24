var express = require("express");
const fs = require("fs");
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname)));

require("./Develop/routes/htmlRoutes")(app);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function()
{
    console.log("app listening on PORT: " + PORT);
});
