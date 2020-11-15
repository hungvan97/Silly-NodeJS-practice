const { Router } = require("express");
const { router, _router } = require("../app");
const express = require('express');
const user_router = express.Router();
const user_controller = require("../controllers/user");

user_router.get("/", user_controller.index);

user_router.get("/search", user_controller.search);

user_router.get("/:id", user_controller.show);

module.exports = user_router;