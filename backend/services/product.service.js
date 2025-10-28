const productModel = require("../models/product.model")


module.exports.createProduct =  async ({title,description,salePrice,price,category,image,size,productby})=>{
    console.log(title,description,salePrice,price,category,image,size,productby)
    if(!title ||!description ||!salePrice ||!price ||!category ||!image ||!size ||!productby ){
        throw new Error("all files required")
    }

    const product = await productModel.create({
        title,
        description,
        salePrice,
        price,
        category,
        image,
        size,
        productby
    })

    return product
}