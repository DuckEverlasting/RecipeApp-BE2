const express = require("express");
const router = express.Router();

const generic = require("../helpers/generic.js");
const requireToken = require("../middleware/requireToken.js");

router.get("/", requireToken, (req, res) => {
  generic
    .get("recipes")
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
});

module.exports = router;
