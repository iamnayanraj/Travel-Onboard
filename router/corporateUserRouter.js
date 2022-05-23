const express = require("express");
const router = express.Router();
const corporateUserController = require("../controller/corporateUserController");

router.get("/user", corporateUserController.getAllCorporateUsers);

router.get("/user/:id", corporateUserController.getCorporateUserById);

module.exports = router;
