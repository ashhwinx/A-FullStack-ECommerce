const express = require("express")
const Router = express.Router()
const sellerController = require("../controllers/seller.controller")
const sellerMiddleware = require("../middleware/user.middleware")

Router.post("/register",sellerController.registerSeller)

Router.post("/login",sellerMiddleware.sellerMiddleware,sellerController.loginSeller)


module.exports = Router