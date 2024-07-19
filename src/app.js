const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/dbConnect");

const userRouter = require("./routes/users/Users");

const {errorHandler, notFound} = require("./middlewares/errorMiddleware")
const app = express();
app.use(express.json());

// const logger = (req, res, next)=>{
//     console.log("logger function ");
//     next();
// }
// app.use(function(req,res,next){
//     console.log("logger");
//     next();
// });

app.use("/api/users",userRouter);

app.use(notFound);
app.use(errorHandler);
dbConnect();

module.exports = app;