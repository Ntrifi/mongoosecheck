const { Register } = require("../Controllers/Contact");
const express = require('express');
const router = express.Router();

router.post("/register", Register);

module.exports = router;