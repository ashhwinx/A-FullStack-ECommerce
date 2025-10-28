
const cartModel = require("../models/cart.model")
const productModel = require("../models/product.model")
const venderOrderModel = require("../models/vernderOrder.model")

module.exports.confirmOrders = async (req, res) => {

  try {
    const userid = req.user._id
    console.log(userid)

  
    const cart = await cartModel.findOne({ userid })


    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "cart is emptyyyy" })
    }

 
    const productIds = cart.products.map(p => p.productId)

    const products = await productModel.find({
         _id: { $in: productIds } 
    })

  
    const venderOrders = {}
    for (const product of products) {

      const vender = product.productby


      const cartItem = cart.products.find(i => i.productId == product._id.toString())

      if (!venderOrders[vender]) venderOrders[vender] = []

      venderOrders[vender].push({
        productId: product._id,
        title: product.title,
        quantity: cartItem.quantity,
        salePrice: product.salePrice,
        price: product.price
      })
    }


    const savedOrder = []

    for (const vender in venderOrders) {
      const items = venderOrders[vender]

      const totalAmount = items.reduce((a, c) => a + c.salePrice * c.quantity,0)

      const newOrder = new venderOrderModel({
        venderName: vender,
        userid: userid,
        products: items,
        totalAmount
      })

      const saved = await newOrder.save()
      savedOrder.push(saved)
    }

    await cartModel.updateOne({ userid }, { $set: { products: [] } })

    res.status(200).json({
      message: "orders confirmed successfully",
      orders: savedOrder
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
}
