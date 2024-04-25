const mongoose = require('mongoose');
 

//name, email, password, confirmPassword, photo
const MessageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, 'Please provide a userId.']
    },
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required: [true, 'Please provide a chat id.']
    },
    message: {
        type:String,
        trim:true
    },
    type:{
        type:String,
        enum:["private","group"],
        default:"private"
    },
    to : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    
  
},{timestamps:true})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
