const generic = require("../helpers/generic.js");

exports.getFolderById = (req, res) => {
  generic
    .getById("folders", req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.getFoldersByUser = (req, res) => {
  generic
    .getBy("folders", {user: req.body.user})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.insertFolder = (req, res) => {
  generic
    .insert("folders", req.body.folder)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.updateFolder = (req, res) => {
  generic
    .updateById("folders", req.body.id, req.body.changes)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};

exports.deleteFolder = (req, res) => {
  generic
    .deleteById("folders", req.body.id)
    .then(() => res.status(204))
    .catch(err => res.status(500).json({ message: "Error", error: err }));
};