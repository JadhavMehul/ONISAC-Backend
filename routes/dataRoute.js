const express = require("express");
const router = express.Router();
const { addDataInLoop } = require("../controllers/dataController");


router.get("/addDataInLoop", addDataInLoop)



module.exports = router;