const express = require("express")
const Router  = express.Router()
const authMiddleware = require("../middleware/user.middleware")
const orderController = require("../controllers/order.controller")

Router.get("/buy",authMiddleware.authMiddelware,orderController.confirmOrders)


module.exports = Router