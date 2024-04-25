const mongoose = require("mongoose");

 
const ChapterSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the course title."],
        },
        description: {
            type: String,
            trim:true 
        },
        freePreview: {
            type:Boolean,
            default: false,
        },
        video: {
            type:String, 
            trim: true,
        }
 

    },
    { timestamps: true },
);

const Chapter = mongoose.model("Chapter", ChapterSchema);

module.exports = Chapter;
