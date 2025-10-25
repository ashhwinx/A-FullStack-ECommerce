const userModel = require("../models/user.model")
const userService  = require("../services/userServices")



module.exports.registerUser  = async (req,res)=>{
            try{

                const {firstname,lastname,email,password} = req.body
                const userExisted = await userModel.findOne({email})
                
                if(userExisted){
                    return res.status(400).json({message:"invalid email"})
                }

                const hasedPassword = await userModel.hashPassword(password)


                const user = await userService.createUser({
                    firstname,
                    lastname,
                    email,
                    password:hasedPassword
                })


                const token = user.generateAuthToken()

                res.status(200).json({message:{token,user}})


            }catch(error){
                    res.status(400).json({message:error})
            }
}


module.exports.loginUser = async (req,res)=>{
    try{
        const {email,password}= req.body

        const user = await userModel.findOne({email}).select("+password")
        console.log(user)

        if(!user){
            return res.status(400).json({message:"invalid email"})
        }

        const comparePassword = await user.comparePassword(password)

        if(!comparePassword){
            return res.status(400).json({message:"password is wrong"})
        }


        const token = user.generateAuthToken()


        res.status(200).json({token,user})

    }catch(error){
       res.status(500).json({error:error.message})
    }
}



