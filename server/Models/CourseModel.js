const mongoose = require("mongoose");

 
const CourseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the course title."],
        },
        description: {
            type: String,
            trim:true 
        },

        learnings: {
            type: [String]           
        },
        prerequisties: {
            type: [String],
  
        },
        chapters: {
            type:[{type:mongoose.Types.ObjectId, ref:"Chapter"}],
             
        },
        price: {
            type:Number,
        },
        image:{
            type:String,
            trim:true
        },
        category:{
            type: mongoose.Types.ObjectId,
            ref:"Category"

        },
        instructor: {
            type: mongoose.Types.ObjectId,
            ref:"user"

        },
        published: {
            type:Boolean,
            default: false
        }

    },
    { timestamps: true },
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;









