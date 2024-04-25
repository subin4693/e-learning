const express = require('express');
const messageController = require("../Controllers/MessageController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();

router.route("/:chatId").get(verify.verifyToken,messageController.getAllMessages);
router.route("/send/:chatId").post(verify.verifyToken,messageController.sendMessage);

module.exports = router

