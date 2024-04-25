const  mongoose  = require("mongoose");
const Chat = require("../Models/ChatModel");
const Course = require("../Models/CourseModel")
const Purchease = require("../Models/PurcheasedCourse");
const asyncErrorHandler = require("../Utils/AsyncErrorHandler");
const CustomError = require("../Utils/CustomError");

const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.getAllCourses = asyncErrorHandler(async (req, res, next) => {
    let query = {published:true};
    let page = req.query.page || 1; // Default page is 1
    let limit = req.query.limit || 30; // Default limit per page

    if (req.query.search) {
        const searchRegex = new RegExp(req.query.search, "i");
        query.$or = [
            { title: searchRegex },
            { description: searchRegex },
             
        ];
    }

    if (req.query.cat) {
        query.category = req.query.cat;
    }
    const count = await Course.countDocuments(query);
 
    const totalPages = Math.ceil(count / limit);
     

    page = Math.min(page, totalPages);
   
    let skip = (page - 1) * limit ;
    skip = skip < 0 ?0:skip
 
    const courses = await Course.find(query).skip(skip).limit(limit);

    res.status(200).json({
        status: "success",
        data: {
            courses,
            page,
            totalPages,
        },
    });
});

exports.getSinleCourse = asyncErrorHandler(async(req,res,next)=>{
    const courseId = req.params.id
 

 
const course = await Course.findById(courseId)
      .populate("category")
      .populate({
        path: "chapters",
        select: {
          title: true,
          video: { $cond: [{ $eq: ["$freePreview", true] }, "$video", "$$REMOVE"] }, // Conditional selection based on freePreview
        },
      });


 
   if(!course){
        const error = new CustomError("Course not found", 500);
        return next(error);
   }
   res.status(200).json({
    status: "success",
    data: {
        course
   
    },
});
})

exports.enroll = asyncErrorHandler(async(req,res,next)=>{   
    const isPurcheased = await Purchease.findOne({userId:req.body.user.id,courseId: req.params.id})

    if(isPurcheased){
        const error = new CustomError("User has already purcheased this course", 400);
        return next(error);
    }

    const course = await Course.findById(req.params.id).select("price");
     

    const paymentIntent = await stripe.paymentIntents.create({
        amount: course.price * 100,
        currency: "inr",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });

    const purchease = await Purchease.create({userId:req.body.user.id,courseId: req.params.id})

    await Chat.findOneAndUpdate(
        {courseId:req.params.id},
        {$addToSet: {users:req.body.user.id}},
        {new:true, upsert: true}
    )
     

    res.status(200).json({
        status: "success",
        data: {
            clientSecret: paymentIntent.client_secret,
           
        },
    })
})

 