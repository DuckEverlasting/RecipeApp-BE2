const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipesController.js");
const requireToken = require("../middleware/requireToken.js");

router.get("/", requireToken, recipeController.getAllRecipes);

module.exports = router;
