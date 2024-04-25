const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const userRouter = require("./Routes/UserRouter");
 const courseRouter = require("./Routes/CourseRouter");
const cartRouter = require("./Routes/CartRouter");
const categoryRouter = require("./Routes/CategoryRouter");
const chapterRouter = require("./Routes/ChapterRouter");
const messageRouter = require("./Routes/MessageRouter");
const purcheaseRouter = require("./Routes/PurcheaseRouter");
const chatsRouter = require("./Routes/ChatRouter");
const instructorRouter = require("./Routes/InstructorRouter");

const CustomError = require("./Utils/CustomError");
const globalErrorHandler = require("./Controllers/errorController");

let app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//USING ROUTES

app.use("/api/v1/users", userRouter);
 app.use("/api/v1/courses", courseRouter);
app.use('/api/v1/cart',cartRouter)
app.use('/api/v1/categorys',categoryRouter)
app.use('/api/v1/chapters',chapterRouter)
app.use('/api/v1/messages',messageRouter)
app.use('/api/v1/purcheases',purcheaseRouter)
app.use('/api/v1/chats',chatsRouter)

app.use("/api/v1/instructor", instructorRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on the server!`,
  });
  // const err = new Error(`Can't find ${req.originalUrl} on the server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  const error = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;

