const express = require("express")
const Router  = express.Router()
const UserController = require("../controllers/user.controller")
const userMiddleware  = require("../middleware/user.middleware")



Router.post("/register",UserController.registerUser)


Router.post("/login",userMiddleware.authMiddelware,UserController.loginUser)


module.exports = Router