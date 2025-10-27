const productModel = require("../models/product.model")


module.exports.createProduct =  async ({title,description,salePrice,price,category,image,size})=>{
    console.log(title,description,salePrice,price,category,image,size)
    if(!title ||!description ||!salePrice ||!price ||!category ||!image ||!size ){
        throw new Error("all files required")
    }

    const product = await productModel.create({
        title,
        description,
        salePrice,
        price,
        category,
        image,
        size
    })

    return product
}