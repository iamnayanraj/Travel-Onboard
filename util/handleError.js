const { logError } = require("../logs/logSetting");
const customError = require("./customError");
const handleError = (error, req, res, next) => {
  const apiEndPoint =
    req.originalUrl.split("/")[req.originalUrl.split("/").length - 1];
  logError(error);
  if (!error.isOperational) {
    error = customError(req.body, apiEndPoint);
  }
  res.status(error.statusCode).json(error.message);
};

module.exports = handleError;
