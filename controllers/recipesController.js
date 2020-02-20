const generic = require("../helpers/generic.js");

exports.getAllRecipes = (req, res) => {
  generic
    .get("recipes")
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.getRecipeById = (req, res) => {
  generic
    .getById("recipes", req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.getRecipeByUser = (req, res) => {
  generic
    .getBy("recipes", {user: req.body.user})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};
