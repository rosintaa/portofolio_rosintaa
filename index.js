const express = require("express");

const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const sintaController = require('./controller/sintaController');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs")

const port = process.env.PORT || 3000;

app.use(sintaController);

app.get("/ping", (req, res) => res.send("Pong"));
app.get("/felix", (req, res) => res.send("Liawi"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
