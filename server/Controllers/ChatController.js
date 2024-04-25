const Chat = require("../Models/ChatModel")
const AsyncErrorHandler = require("../Utils/AsyncErrorHandler")


exports.getAllChats = AsyncErrorHandler(async(req,res,next)=>{
    
    const userId = req.body.user.id
    const chats = await Chat.find({
        $or: [
            { users: userId }, // Check if the user ID exists in the users array
            { instructor: userId } // Check if the user ID is the instructor
        ]
    }).populate({
        path:"courseId",
        select:"title image"
    }
    );

    res.status(200).json({
        status: "success",
        data: {
            chats
        }
    })
})