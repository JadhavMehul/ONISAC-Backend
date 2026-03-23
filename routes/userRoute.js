const express = require("express");
const { addTokens } = require("../controllers/userController");
const router = express.Router();

router.post("/addTokens", addTokens);

module.exports = router;