const productModel = require("../models/product.model")
const productService  = require("../services/product.service")



module.exports.productManage = async (req,res)=>{
    try{
        const {title,description,salePrice,price,category,image,size} = req.body

        const product = await productService.createProduct({
            title,
        description,
        salePrice,
        price,
        category,
        image,
        size
        })



        res.status(200).json({product})








    }catch(error){
        res.status(500).json({error:error.message})
    }
}