const Course = require("../Models/CourseModel");
const Chapter = require("../Models/ChapterModel");
const Chat = require("../Models/ChatModel");
const User = require("../Models/UserModel");
const asyncErrorHandler = require("../Utils/AsyncErrorHandler");
const Purchease = require("../Models/PurcheasedCourse");

const stripe = require("stripe")(process.env.STRIPE_KEY);
 
exports.getAllCourses = asyncErrorHandler(async (req, res, next) => {
   
    const instructor = req.body.user.id

    const data = await Course.find({instructor}).populate("category").select("title category price published")

    res.status(201).json({
        status:"success",
        data:{
            data
        }
    })
})

exports.createNewCourse = asyncErrorHandler(async (req, res, next) => {
    const title = req.body.title;
    const instructor = req.body.user.id

    const data = await Course.create({title,instructor});

    const chat = await Chat.create({instructor,courseId:data._id})

    res.status(201).json({
        status:"success",
        data:{
            data
        }
    })
})

exports.updateCourseDetails = asyncErrorHandler(async(req,res,next)=>{
    const courseId = req.params.id
 
 
    const data = await Course.findByIdAndUpdate(courseId, req.body,{new:true}).populate("category");
     
    res.status(201).json({
        status:"success",
        data:{
            data
        }
    })
})


exports.deleteCourse = asyncErrorHandler(async(req,res,next)=>{
    const {id} = req.params;

    await Course.findByIdAndDelete(id);
    await Purchease.deleteMany({courseId:id})
    await Chat.deleteOne({courseId:id})
    

    res.status(200).json({
        status:"success",
        
    })
})


exports.addNewChapter = asyncErrorHandler(async(req,res,next)=>{
    const {title,description, freePreview,video} = req.body;
    const courseId = req.params.id
    const createdChapter = await Chapter.create({title,description,freePreview,video})

    await Course.findByIdAndUpdate(courseId,{$push:{chapters:createdChapter._id}})

    res.status(201).json({
        status:"success",
        data:{
            chapter:createdChapter
        }
    })
})


exports.updateChapterDetails = asyncErrorHandler(async(req,res,next)=>{
    const {chapterId, courseId} = req.params;
   
    const chapter = await Chapter.findByIdAndUpdate(chapterId,req.body,{new:true})

    res.status(200).json({
        status:"success",
        data:{
            chapter
        }
    })
})


exports.deleteChapter = asyncErrorHandler(async(req,res,next)=>{
    const {chapterId, courseId} = req.params;

    await Chapter.findByIdAndDelete(chapterId);

    res.status(200).json({
        status:"success",
        
    })
})

exports.userToInstructor = asyncErrorHandler(async(req,res,next)=>{
    const user  = await User.findOneAndUpdate({_id:req.body.user.id},{role:"instructor"},{new:true})


 


    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000 * 100,
        currency: "inr",        
        automatic_payment_methods: {
          enabled: true,
        },
      });

     res.status(200).json({
        status: "success",
        data: {
            clientSecret: paymentIntent.client_secret,
            user
           
        },
    })
})
