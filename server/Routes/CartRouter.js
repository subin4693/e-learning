const express = require('express');
const cartController = require("../Controllers/CartController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();


router.route("/").get(verify.verifyToken,cartController.getCartItems)
router.route("/add").post(verify.verifyToken,cartController.addToCart)
router.route("/remove/:id").delete(verify.verifyToken,cartController.removeItem)

module.exports = router