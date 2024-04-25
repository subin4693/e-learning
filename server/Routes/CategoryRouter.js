const express = require('express');
const categoryController = require("../Controllers/CategoryController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();


router.route("/").get(categoryController.getAllCategorys).post(categoryController.createCategory)

module.exports = router