const db = require("../models");

// Defining methods for the TibitsController
module.exports = {
  findAll: function(req, res) {
    db.Tibit.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Tibit.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Tibit.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Tibit.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Tibit.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    const searchString = new RegExp(req.params.phrase);
    console.log("getting query " + searchString);
    db.Tibit.find({action : {$regex: searchString ,$options:'i'}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
