const express = require("express");
const { userController } = require("../controllers/index.js");
const router = express.Router();

router.post("/post", userController.login);

module.exports = router;
