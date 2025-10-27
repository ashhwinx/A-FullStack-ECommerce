const cartModel = require("../models/cart.model");

module.exports.addToCart = async (req, res) => {
  try {
    const userid = req.user._id
    const { productId } = req.body

    console.log(userid, productId)

    let cart = await cartModel.findOne({ userid })

    if (!cart) {
      cart = new cartModel({
        userid,

        products: [{ 

            productId,
            quantity: 1 
            
        }],
      })
    } else {      
      const productIndex = cart.products.findIndex((i) => i.productId.toString() === productId.toString())

      if (productIndex > -1) {
        cart.products[productIndex].quantity += 1
      } else {
        cart.products.push({ productId, quantity: 1 })
      }




    }

    await cart.save()
    res.json({ message: "Product added to cart", cart })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
};



module.exports.deleteToCart = async (req,res)=>{
    try {
        const userid = req.user._id
        const {productId}= req.body
        
        
        const cart = await cartModel.findOne({userid})
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
          }


        const productIndex = cart.products.findIndex((i)=>i.productId.toString()=== productId.toString())

        if(productIndex==-1){
            return res.status(404).json({ message: "Product not found in cart" });
        }


        cart.products.splice(productIndex,1)

       await cart.save()


        
       res.status(200).json({
             message: "Product removed from cart ✅",
             cart,
        });
        

    } catch (error) {
        console.error(error);
    res.status(500).json({ error: error.message });
    }
}
