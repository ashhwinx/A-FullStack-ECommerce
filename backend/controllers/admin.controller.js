const productModel = require("../models/product.model")
const venderOrderSchema = require("../models/vernderOrder.model")
const sellerModel = require("../models/seller.model")


module.exports.dashboard = async (req,res)=>{
    try {

        const orderedProducts = await venderOrderSchema.find()


        const sellers = (await sellerModel.find({active:true})).length -1
        const orderQuantities = (orderedProducts.flatMap(order =>order.products.map(p => p.quantity))).reduce((c,a)=>c+a,0)
        const totalAmount = (orderedProducts.flatMap(order =>order.products.map(p => p.salePrice))).reduce((c,a)=>c+a,0)
        const products = (await productModel.find()).length
        

        return res.status(200).json({message:{sellers,orderQuantities,totalAmount,products}})


    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports.approveSeller = async (req,res)=>{
    try {
       
            const {sellerId} = req.body
               
            const approvedSeller = await sellerModel.findByIdAndUpdate(
                sellerId,
                {$set:{active:true}},
                {new:true}
            )

            return res.status(200).json({message:"seller activated successfully"})


    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports.deleteSeller = async (req,res)=>{
    try {
            const {sellerId} = req.body
            
            const DeleteSeller = await sellerModel.findByIdAndDelete(sellerId)

            return res.status(200).json({message:"seller delete successfully"})


    } catch (error) {
        res.status(500).json({error:error.message})
    }
}