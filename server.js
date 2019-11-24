const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static(path.join(__public)));


const PORT = 3000;
app.listen(PORT);

