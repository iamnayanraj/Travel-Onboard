const express = require("express");
const router = express.Router();
const corporateController = require("../controller/corporateController");

router.get("/corporate", corporateController.getAllCorporates);

router.get("/corporate/:id", corporateController.getCorporateById);

router.post("/corporate", corporateController.addCorporateAndUsers);

module.exports = router;
