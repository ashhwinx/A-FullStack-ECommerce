const express = require("express")
const Router = express.Router()
const authMiddleware = require("../middleware/user.middleware")
const cartController = require("../controllers/cart.controller")

Router.post("/add",authMiddleware.authMiddelware,cartController.addToCart  )

Router.delete("/delete",authMiddleware.authMiddelware,cartController.deleteToCart)


module.exports = Router