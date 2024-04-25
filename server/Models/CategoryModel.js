const mongoose = require("mongoose");

 
const CategoryModel = new mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, "Please enter the category."],
        },
       

    },
    { timestamps: true },
);

const Category = mongoose.model("Category", CategoryModel);

module.exports = Category;
