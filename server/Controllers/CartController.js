 const Cart = require("../Models/CartModel");
const asyncErrorHandler = require('../Utils/AsyncErrorHandler');
const CustomError = require('../Utils/CustomError');

 


exports.addToCart = asyncErrorHandler(async(req,res,next)=>{
    
    const isInCart = await Cart.findOne({userId:req.body.user.id, courseId: req.body.courseid})

    if(isInCart){
        const error = new CustomError("User has already add cart this course", 400);
         return next(error);
    }
    

    const cart = await Cart.create({userId: req.body.user.id,courseId:req.body.courseid});

    res.status(201).json({
        status: 'success',
        data: {
            cart
        }
    });
})


 exports.removeItem = asyncErrorHandler(async(req,res,next)=>{
  
    const isInCart = await Cart.findById(req.params.id)

    if(!isInCart){
        const error = new CustomError("Course is not in cart", 400);
         return next(error);
    }
    await Cart.findByIdAndDelete(req.params.id)

     res.status(200).json({
        status:"success",
        
    })
 })

 exports.getCartItems = asyncErrorHandler(async(req,res,next)=>{
    const cartItems = await Cart.find({userId: req.body.user.id}).populate("courseId").select("image chapter title description price");
 
    res.status(200).json({
        status: "success",
        data: {
            cartItems
        }
    })
 })