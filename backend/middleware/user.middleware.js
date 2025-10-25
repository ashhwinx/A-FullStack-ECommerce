const jwt = require("jsonwebtoken")
const userModel  = require("../models/user.model")


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
       return  res.status(400).json({message:"gtoign"})
    }
}