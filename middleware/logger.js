const fs = require("fs");

logFile = (request, response) => {
  var date = new Date();

  let logger =
    date +
    ` => ${request.method}, status: ${response.statusCode} ` +
    "\n" +
    JSON.stringify(request.headers) +
    "\n" +
    "---------------------" +
    "\n";

  console.log(logger);

  fs.appendFile("logger.txt", logger, "utf8", (err) => {
    if (err) {
      console.log("Error while appending file : ", err);
      throw err;
    } else {
      console.log("The file has been saved!");
    }
  });
};

logErrorFile = (request, response, err) => {
  var date = new Date();

  let logger =
    date +
    ` => ${request.method}, status: ${response.statusCode} ` +
    "\n" +
    JSON.stringify(request.headers) +
    "\n" +
    JSON.stringify(err) +
    "\n" +
    "---------------------" +
    "\n";

  console.log(logger);

  fs.appendFile("logger.txt", logger, "utf8", (err) => {
    if (err) {
      console.log("Error while appending file : ", err);
      throw err;
    } else {
      console.log("The file has been saved!");
    }
  });
};

module.exports = {
  // export all functions
  logErrorFile,
  logFile,
};
