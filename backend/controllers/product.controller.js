const productModel = require("../models/product.model")
const productService  = require("../services/product.service")



module.exports.productManage = async (req,res)=>{
    try{
        const {title,description,salePrice,price,category,image,size,productby} = req.body
        const seller = req.seller

        const product = await productService.createProduct({
        title,
        description,
        salePrice,
        price,
        category,
        image,
        size,
        productby:seller.storeName,
        })

        res.status(200).json({product})

    }catch(error){
        res.status(500).json({error:error.message})
    }
}