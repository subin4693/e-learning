const mongoose = require('mongoose');
 

//name, email, password, confirmPassword, photo
const PurcheaseSchema = new mongoose.Schema({
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

const Purchease = mongoose.model('Purchease', PurcheaseSchema);

module.exports = Purchease;