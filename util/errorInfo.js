const errorInfo = {
  corporate: {
    corporateNameIsBlank: {
      code: "NR002",
      message: "CorporateName cannot be blank",
    },
  },
  common: {
    pathNotFound: {
      code: "NR000",
      message: "Address url is not found",
    },
    internalServiceError: {
      code: "NR500",
      message: "Internal Server Error",
    },
  },
};

module.exports = errorInfo;
