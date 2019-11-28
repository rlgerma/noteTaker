const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

require("./htmlRoutes")(app);
require("./noteRoutes")(app);

var PORT = process.env.PORT || 5500;
app.listen(PORT, function () {
    console.log("App listening on http://localhost: " + PORT);
});
