const express = require("express");
const router = express.Router();
const { registerUser, loginUser, refreshToken, getMe, logoutUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/refresh", refreshToken);
router.get("/me", getMe)


router.post('/logout', logoutUser);

module.exports = router;