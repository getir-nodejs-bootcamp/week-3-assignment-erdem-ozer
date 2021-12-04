const express = require("express");
const { todoController } = require("../controllers/index.js");
const router = express.Router();

router.post("/post", todoController.createTodo);
router.get("/post", todoController.getTodos);
router.delete("/post", todoController.deleteTodo);
router.patch("/post", todoController.updateTodo);

module.exports = router;
