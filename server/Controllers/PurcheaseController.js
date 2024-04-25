const AsyncErrorHandler = require("../Utils/AsyncErrorHandler");
const Purchease = require("../Models/PurcheasedCourse")

exports.getAllPurcheases = AsyncErrorHandler(async(req,res,next)=>{
    

    const courses = await Purchease.find({userId:req.body.user.id}).populate("courseId").select("title image description chapters")

    res.status(200).json({
        status: "success",
        data: {
            courses
        }
    })
})

exports.getSingleCourse = AsyncErrorHandler(async(req,res,next)=>{
    
    const {courseId} = req.params;


    const courses = await Purchease.findOne({userId:req.body.user.id, courseId})
    .populate({path:"courseId",select:"title chapters",populate:"chapters"})
   
    
    res.status(200).json({
        status: "success",
        data: {
            courses
        }
    })
})


