const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB Connection Successful');
}).catch(err => {
    console.error('Error connecting to database:', err);
    process.exit(1); 
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log('server has started...');
})

const io = require("socket.io")(server,{
    pingTimeout: 60000,
    cors:{
        origin: "http://localhost:5173",
    }
})

io.on("connection",(socket)=>{
 
    socket.on("setup",(userid)=>{
       
        socket.join(userid);
        socket.emit("connected")        
    })
    
    socket.on("join chat",(room)=>{
        socket.join(room.roomId);
         
    })

    socket.on("new message", (newMessageRecived) => {
      
       if(!newMessageRecived.users) return console.log("chat users is not defined");

       newMessageRecived.users.forEach((user)=>{
        if(newMessageRecived.message.from == user) return;
        socket.in(user).emit("message recieved",newMessageRecived.message);
       })
    })

})


 