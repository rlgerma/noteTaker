var path = require('path');
var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/noteRoutes")(app);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function()
{
    console.log("app listening on PORT: " + PORT);
});
