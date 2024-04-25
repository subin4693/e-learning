const express = require('express');
const instructorController = require("../Controllers/InstructorController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();

router.route("/").post(verify.verifyToken,instructorController.userToInstructor);
router.route("/courses").get(verify.verifyToken,instructorController.getAllCourses).post(verify.verifyToken,instructorController.createNewCourse)
router.route("/courses/:id").put(verify.verifyToken,instructorController.updateCourseDetails)
.delete(verify.verifyToken,instructorController.deleteCourse);
router.route("/courses/:id/chapters").post(verify.verifyToken,instructorController.addNewChapter)
router.route("/courses/:courseId/chapters/:chapterId").put(verify.verifyToken,instructorController.updateChapterDetails).delete(verify.verifyToken,instructorController.deleteChapter);

// router.route("/courses/:courseId/students").get(verify.verifyToken,instructorController.getEnrolledStudents)




module.exports = router