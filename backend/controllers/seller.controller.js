const sellerModel = require("../models/seller.model")
const sellerService = require("../services/seller.service")
const productModel = require("../models/product.model")


module.exports.registerSeller = async (req,res)=>{
    try {
      const {fullname,storeName,storeDescription,email,password} =req.body
      
      
      const userExisted  = await sellerModel.findOne({email})

      if(userExisted){
        return res.status(400).json({message:"seller alredy existed with this email"})
      }

      const hashPassword = await sellerModel.hashPassword(password)


      const seller = await  sellerService.createSeller({
        fullname,
        storeName,
        storeDescription,
        email,
        password:hashPassword
      })
      console.log(seller)

      const token = seller.generateAuthToken()

      res.status(200).json({ message:{token,seller}})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports.loginSeller = async (req,res)=>{
  try {
    const {email,password} = req.body


    const seller = await sellerModel.findOne({email}).select("+password")

    if(seller.active==false){
      return res.status(400).json({message:"you are not approved for a seller yet"})
    }





    if(!seller){
      return res.status(400).json({message:"email invalid"})
    }


    const comparePassword = await seller.comparePassword(password)

    if(!comparePassword){
      return res.status(400).json({message:"password invalid"})
    }

    const token = seller.generateAuthToken()


    res.status(200).json({message:{token,seller}})



  } catch (error) {
      res.status(500).json({error:error.message})
  }
}



module.exports.dashboardSeller = async (req,res)=>{
  try {

    seller = req.seller
    

    const products = await productModel.find({productby:seller.storeName})

    acitivityStatus = products.filter(p=>p.active == true)
    
    



    // const price = salePrice.reduce((a,c)=>a+c,0)

    res.status(200).json({message:{acitivityStatus}})

  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

