const express = require("express")
const Router = express.Router()
const adminController = require("../controllers/admin.controller")
const adminMiddleware  =require("../middleware/user.middleware")

Router.post("/dashboard",adminMiddleware.sellerMiddleware,adminController.dashboard)


Router.post("/createSeller",adminMiddleware.sellerMiddleware,adminController.approveSeller)

Router.delete("/deleteSeller",adminMiddleware.sellerMiddleware,adminController.deleteSeller)

module.exports = Router