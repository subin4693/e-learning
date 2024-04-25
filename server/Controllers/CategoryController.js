const Category = require("../Models/CategoryModel");
const asyncErrorHandler = require("../Utils/AsyncErrorHandler");

exports.createCategory = asyncErrorHandler(async(req,res,next)=>{
    
  
    const category = await Category.create({category: req.body.category});

    res.status(201).json({
        status: 'success',
        data: {
            category
        }
    });
})

exports.getAllCategorys = asyncErrorHandler(async(req,res,next)=>{
    
  
    const category = await Category.find();

    res.status(201).json({
        status: 'success',
        data: {
            category
        }
    });
})

