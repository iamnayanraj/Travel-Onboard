const AppError = require("./appError");
const errorInfo = require("./errorInfo");

const customError = (req, apiEndPoint) => {
  switch (apiEndPoint) {
    case "corporate":
      if (req.corporateName.length === 0)
        return new AppError(errorInfo.corporate.corporateNameIsBlank, 200);
      else return new AppError(errorInfo.common.internalServiceError, 500);
    default:
      return new AppError(errorInfo.common.internalServiceError, 500);
  }
};

module.exports = customError;
