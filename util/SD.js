const SD = {
  cache: {
    CACHE_KEY_ALL_CORPORATES: "allCorporates",
    CACHE_KEY_CORPORATE_BY_ID: "corporateById",
    CACHE_KEY_ALL_CORPORATE_USERS: "allCorporateUsers",
    CACHE_KEY_CORPORATE_USER_BY_ID: "corporateUserById",
  },
  logServiceName: {
    LOG_ALL_CORPORATES: "getAllCorporates",
    LOG_CORPORATE_BY_ID: "getCorporateById",
    LOG_ALL_CORPORATE_USERS: "getAllCorporateUsers",
    LOG_CORPORATE_USER_BY_ID: "getCorporateUserById",
    LOG_ADD_CORPORATE_AND_USER: "addCorporateAndUser",
  },
  logPath: {
    REQUEST_RESPONSE_DATE_LOG_PATH:
      "./logs/requestResponseDate/requestResponse.log",
    ERROR_DATE_LOG_PATH: "./logs/errorDate/error.log",
    TRACE_DATE_LOG_PATH: "./logs/traceDate/trace.log",
  },
};

module.exports = SD;
