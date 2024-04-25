const Chapter = require("../Models/ChapterModel");
const asyncErrorHandler = require("../Utils/AsyncErrorHandler");

exports.getSingleChapter = asyncErrorHandler(async(req,res,next)=>{
    
    const {chapterId} = req.params;
    
    
    const chapter = await Chapter.findById(chapterId);

    res.status(201).json({
        status: 'success',
        data: {
            chapter
        }
    });
})

// exports.getAllChapters = asyncErrorHandler(async(req,res,next)=>{
//     const courseId = req.params.courseId
  
//     const chapter = await Chapter.find({courseId});

//     res.status(201).json({
//         status: 'success',
//         data: {
//             chapter
//         }
//     });
// })

