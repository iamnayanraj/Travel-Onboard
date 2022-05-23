const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corporateRouter = require("./router/corporateRouter");
const corporateUserRouter = require("./router/corporateUserRouter");
const AppError = require("./util/appError");
const errorInfo = require("./util/errorInfo");
const handleError = require("./util/handleError");
const logInit = require("./util/logInit");
const { requestHandler, responseHandler } = require("express-intercept");
const { logError, logRequest, logReponse } = require("./logs/logSetting");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./util/swagger/swagger.json");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//swagger documentation

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//initialise traceid for log start
app.use(logInit);
//initialise traceid for log End

//Log request and response start
app.use(requestHandler().getRequest((req) => logRequest(req)));

app.use(
  responseHandler()
    .for((req) => (req.path = true))
    .getString((res) => logReponse(res))
);
//Log request and response End

//Routers start
app.use(corporateRouter);
app.use(corporateUserRouter);
//Routers End

// Path not found 404 start
app.all("*", (req, res, next) => {
  const err = new AppError(errorInfo.common.pathNotFound, 404);
  next(err);
});
// Path not found 404 End

// Error mideleware start
app.use(handleError);
// Error mideleware start

var port = process.env.PORT || 8090;
app.listen(port);
console.log("app running on port" + port);
