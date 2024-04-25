const mongoose = require('mongoose');
 

//name, email, password, confirmPassword, photo
const ChatSchema = new mongoose.Schema({
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, 'Please provide a userId.']
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required: [true, 'Please provide a courseid.']
    },
    users: {
       type:[ {type: mongoose.Schema.Types.ObjectId,
        ref:"User"}],
        default:[]
    },
    lastmessage: {
        type:String,
        trim:true,
        
    }
    
  
},{timestamps:true})

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;