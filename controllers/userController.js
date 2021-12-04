const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ name: username }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "24h",
  });
  return res.status(200).send({ "TOKEN: ": token });
};

module.exports = {
  login,
};
