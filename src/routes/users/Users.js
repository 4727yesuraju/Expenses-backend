const express = require("express");
const { test, userRegister, fetchUsers } = require("../../controllers/user/User");

const userRouter = express.Router();

userRouter.get("/",test);
userRouter.post("/register",userRegister);
userRouter.get("/",fetchUsers);

module.exports = userRouter;