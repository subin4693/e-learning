const mongoose = require('mongoose');
 

//name, email, password, confirmPassword, photo
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, 'Please provide a userId.']
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required: [true, 'Please provide a courseid.']
    },
    
  
},{timestamps:true})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;