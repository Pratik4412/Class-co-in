const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const { sendCareerMail } = require("../controller/careerController");

router.post("/career", upload.single("resume"), sendCareerMail);

module.exports = router;
