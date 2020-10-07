const routes = require("express").Router();
const { User } = require("./app/models");

routes.post("/sessions", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
