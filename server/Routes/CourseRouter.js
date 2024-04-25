const express = require('express');
const courseController = require("../Controllers/CourseController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();

router.route("/").get(courseController.getAllCourses);
router.route("/:id").get(courseController.getSinleCourse);
router.route("/:id/enroll").post(verify.verifyToken,courseController.enroll)




// router.route('/admin').post(verify.verifyToken,productController.createProduct)
//                         .delete(verify.verifyToken,productController.deleteProduct)
//                         .put(verify.verifyToken,productController.updateProductDetails)

// router.route('/').get(productController.getAllProducts);

// router.route('/:id').get(productController.getSingleProducts);

// router.route('/cart/carts').post(verify.verifyToken,productController.addtoCart)
//                         .delete(verify.verifyToken, productController.deleteCart)
//                         .get(verify.verifyToken, productController.getAllCarts)

// router.route("/order/orders").post(verify.verifyToken,productController.buyProduct)
//                         .get(verify.verifyToken,productController.getLatestTransaction)


module.exports = router;