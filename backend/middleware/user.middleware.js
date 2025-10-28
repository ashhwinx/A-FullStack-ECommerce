const jwt = require("jsonwebtoken")
const userModel  = require("../models/user.model")
const sellerModel = require("../models/seller.model")


module.exports.authMiddelware = async (req,res,next)=>{
    try{
        const token = req.header("Authorization")?.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)


        if(!user){
            return res.status(400).json({message:"unauthrized"})
        }

        req.user = user

        next()



    }catch(error){
       return  res.status(400).json({error:error.message})
    }
}

module.exports.sellerMiddleware = async (req,res,next)=>{
    try {
        const token  = req.header("Authorization")?.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SELLER)
        const seller  = await sellerModel.findById(decoded._id)


        if(!seller){
            return res.status(400).json({message:"unauthorized"})
        }

        req.seller = seller

        next()


    } catch (error) {
        res.status(500).json({error:error.message})
    }
}