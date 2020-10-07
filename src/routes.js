const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Gabriel",
  email: "gabriel.ctiunesp@gmail.com",
  password_hash: "123321",
});

module.exports = routes;
