const Chat = require("../Models/ChatModel");
const Message = require("../Models/MessageModel");
const AsyncErrorHandler = require("../Utils/AsyncErrorHandler");

exports.sendMessage = AsyncErrorHandler(async(req,res,next)=>{

    const chatId = req.params.chatId;
    const from = req.body.user.id;
    const message = req.body.message;
    const type = req.body.type
    const to = req.body.to;

    let msgData = {};
    
    if(type == "private"){
       msgData =  {from,chatId, message, type,to}
    }else {
       msgData =  {from,chatId, message, type}
    }
    
    let  messagee = await Message.create(msgData)

    res.status(201).json({
        status:"success",
        data:{
            message: messagee
        }
    })
})

exports.getAllMessages = AsyncErrorHandler(async(req,res,next)=>{
    const chatId  = req.params.chatId;
    let chatUsers,users,messages=[];
    const type = req.query.type;
const to  = req.query.to

 
    if(type=="group"){
      messages = await Message.find({chatId,type})

     chatUsers = await Chat.findById(chatId).select("users instructor")

     users = [...chatUsers.users,chatUsers.instructor]

      
    }else{
      messages = await Message.find({chatId,type,to})

        users = [to]
        

    }
  
 

    res.status(200).json({
        status: "success",
        data: {
            messages,
            users
        }
    })
})