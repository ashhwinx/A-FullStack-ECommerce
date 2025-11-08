const express = require("express")
const Router = express.Router()
const productController = require("../controllers/product.controller")
const sellerMiddleware = require("../middleware/user.middleware")

Router.post("/add",sellerMiddleware.sellerMiddleware,productController.productManage)

Router.post("/products", sellerMiddleware.authMiddelware,productController.productGet)

module.exports = Router