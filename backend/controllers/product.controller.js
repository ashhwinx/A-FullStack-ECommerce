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

module.exports.productGet = async (req,res)=>{
    const data = req.body;
    console.log(data);

    try {
        let query = {};
        let sortOption = {};
      
        // ✅ 1. Handle category filter
        if (data.category && data.category !== "All") {
          query.category = data.category;
        }
      
        // ✅ 2. Handle sort filter
        const sortValue = data.selectedPrice?.toLowerCase(); // normalize text
      
        if (sortValue === "price: low to high") {
          sortOption.price = 1;
        } else if (sortValue === "price: high to low") {
          sortOption.price = -1;
        } else if (sortValue === "newest") {
          sortOption.createdAt = -1;
        }
      
        // ✅ 3. Fetch data
        if(query && sortOption == {}){
          const products = await productModel.find(query).sort(sortOption);
          res.status(200).json({ products });
        }else{
          const products = await productModel.find(query).sort(sortOption);
          res.status(200).json({ products });
        }
        
        
       
      
      } catch (error) {
        res.status(500).json({error:error.message})
    }
}