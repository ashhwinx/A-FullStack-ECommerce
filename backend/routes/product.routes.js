const express = require("express")
const Router = express.Router()
const productController = require("../controllers/product.controller")

Router.post("/add",productController.productManage)



module.exports = Router