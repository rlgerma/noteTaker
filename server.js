const express = require("express");
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

require("./htmlRoutes")(app);
require("./noteRoutes")(app);

var PORT = process.env.PORT || 3030;
app.listen(PORT, function()
{
    console.log("app listening on PORT: " + PORT);
});
