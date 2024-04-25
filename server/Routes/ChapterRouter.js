const express = require('express');
const chapterController = require("../Controllers/ChapterController")
const verify = require("../Utils/Verifytoken");


const router = express.Router();


// router.route("/:courseId").get(verify.verifyToken,chapterController.getAllChapters)
router.route("/:chapterId").get(chapterController.getSingleChapter);

module.exports = router