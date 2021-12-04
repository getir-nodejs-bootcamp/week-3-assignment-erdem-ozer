const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const logger = require("../middleware/logger");

dotenv.config();

let todos = [
  // array of todos, please send your request with these parameters
  {
    id: 1,
    title: "delectus aut autem",
  },
];

const createTodo = async (req, res) => {
  // create new todo

  const authHeader = req.headers["authorization"]; // get authorization header
  const token = authHeader && authHeader.split(" ")[1]; // get token from header
  if (token == null) return res.sendStatus(401); // if token is null, return 401

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, async (err) => {
    // verify bearer token
    if (err) {
      res.sendStatus(403);
      console.log(err);
    } else {
      var todo = req.body;

      try {
        await todos.push(todo);
        res.json(todos);
        logger.logFile(req, res);
      } catch (error) {
        console.log(error);
        logger.logErrorFile(req, res, error);
      }
    }
  });
};

const getTodos = async (req, res) => {
  // get all todos

  const authHeader = req.headers["authorization"]; // get authorization header
  const token = authHeader && authHeader.split(" ")[1]; // get token from header
  if (token == null) return res.sendStatus(401); // if token is null, return 401

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, async (err) => {
    if (err) {
      res.sendStatus(403);
      console.log(err);
    } else {
      try {
        const post = todos;
        res.json(post);
        logger.logFile(req, res);
      } catch (error) {
        console.log(error);
        logger.logErrorFile(req, res, error);
      }
    }
  });
};

const deleteTodo = async (req, res) => {
  // delete todo

  const authHeader = req.headers["authorization"]; // get authorization header
  const token = authHeader && authHeader.split(" ")[1]; // get token from header
  if (token == null) return res.sendStatus(401); // if token is null, return 401

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, async (err) => {
    // verify bearer token
    if (err) {
      res.sendStatus(403);
    } else {
      const { id } = req.body;

      try {
        const index = todos.findIndex((todo) => todo.id === id);
        todos.splice(index, 1);
        res.json(todos);
        logger.logFile(req, res);
      } catch (error) {
        console.log(error);
        logger.logErrorFile(req, res, error);
      }
    }
  });
};

const updateTodo = async (req, res) => {
  // update todo

  const authHeader = req.headers["authorization"]; // get authorization header
  const token = authHeader && authHeader.split(" ")[1]; // get token from header
  if (token == null) return res.sendStatus(401); // if token is null, return 401

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, async (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const { id, title } = req.body;
      const postObj = await todos.find((todo) => todo.id === id);

      try {
        postObj.title = title;
        res.json(todos);
        logger.logFile(req, res);
      } catch (error) {
        console.log(error);
        logger.logErrorFile(req, res, error);
      }
    }
  });
};

module.exports = {
  // export all functions
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};
