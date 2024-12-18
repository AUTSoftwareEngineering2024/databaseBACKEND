"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getUsersPost = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
  const updatePost = (req, res) => {
    Models.Post.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    })
      .then(async (data) => {
        console.log( "data", data)
        const updatedPost = await Models.Post.findOne({ where: { id: req.params.id } });
        res.send({ result: 200, data: updatedPost });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  // deletes user matching ID from params
  const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  module.exports = {
    getUsersPost,
    createPost,
    updatePost,
    deletePost,
  };
