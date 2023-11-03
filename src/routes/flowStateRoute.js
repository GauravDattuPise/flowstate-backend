

const express = require("express");

const { createFlowState } = require("../controllers/flowStateController");

const router = express.Router();

router.post("/createFlowState", createFlowState)

module.exports = router