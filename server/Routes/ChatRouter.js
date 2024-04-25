const express = require('express');
const chatsController = require("../Controllers/ChatController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();

router.route("/").get(verify.verifyToken,chatsController.getAllChats);


module.exports = router

