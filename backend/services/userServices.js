const userModel =  require("../models/user.model")


module.exports.createUser  = async ({firstname,lastname,email,password,address})=>{
        if(!firstname || !lastname || !email || !password || !address){
            throw new Error("all field are require")
        }

        const user = userModel.create({
            firstname,
            lastname,
            email,
            password,
            address
        })

        return user 
}