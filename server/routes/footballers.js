const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Footballer   = require('../models/Footballer').Footballer;

/**
 * Functionality for this route:
 *  C   POST    /Footballers/        Create a new Footballer
 *  R   GET     /Footballers         Gets an array of all Footballers
 *  R   GET     /Footballers/:id     Get a single Footballer, by ID
 *  U   PUT     /Footballers/:id     Update a single Footballer, by id
 *  D   DELETE  /Footballers/:id     Delete a single Footballer, by ID
 */

// GET an array of all Footballers change
router.get('/', (req, res) => {
    return mongoose
      .model('Footballer')
      .find({})
      .then (footballers => res.json(footballers))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single footballer by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Footballer')
    .findOne({_id: req.params.id})
    .then (footballer => res.json(footballer))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new footballer
router.post('/', (req, res) => {
  return new Footballer({
    title     : req.body.title,
  })
  .save()
  .then (footballer => Footballer.populate(footballer, {path: '_id'}))
  .then (footballer => res.json(footballer))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Footballer
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a footballer
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Footballer
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
      }},
      {new: true}
    )
    .then (footballer => Footballer.populate(footballer, {path: '_id'}))
    .then (footballer => res.json(footballer))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;