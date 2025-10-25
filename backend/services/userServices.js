const userModel =  require("../models/user.model")


module.exports.createUser  = async ({firstname,lastname,email,password})=>{
        if(!firstname || !lastname || !email || !password){
            throw new Error("all field are require")
        }

        const user = userModel.create({
            firstname,
            lastname,
            email,
            password
        })

        return user 
}