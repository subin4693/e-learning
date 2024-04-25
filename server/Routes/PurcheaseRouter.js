const express = require('express');
const purcheaseController = require("../Controllers/PurcheaseController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();

router.route("/").get(verify.verifyToken,purcheaseController.getAllPurcheases);
router.route("/:courseId").get(verify.verifyToken,purcheaseController.getSingleCourse);

module.exports = router

