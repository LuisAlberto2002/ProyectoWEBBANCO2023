const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/loginController");

// Ruta para manejar el login
router.post("/login", loginUser);

module.exports = router;