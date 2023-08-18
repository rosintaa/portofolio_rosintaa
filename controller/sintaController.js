const express = require("express");
const router = express.Router();
const sintamodel = require("../model/sintaModel");

router.get("/", (req, res) => {
  sintamodel.getHome(res);
});

module.exports = router;
