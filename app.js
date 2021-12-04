const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const router = require("./routes/todos"); // importing routes
const userRoute = require("./routes/users");

const app = express();
dotenv.config();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);
app.use("/userApi", userRoute);

app.all("*", (request, response) => {
  // to handle all requests
  response.status(404).send("Page not found");
});

app.listen(process.env.PORT_NUMBER, () => {
  // server listening on port 3000
  console.log("Server started on port " + process.env.PORT_NUMBER);
});
