const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt =  require("bcrypt")


const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        minlength:[3,"minimum 3 character"]
    }, 
    lastname:{
        type:String,
        require:true,
        minlength:[3,"minimum 3 characters"]
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlenght: [8,"minimum 8 charcaters"]
    },
    password:{
        type:String,
        require:true,
        minlength:[6,"minimum 6 characters"],
        select:false
    },
    user:{
        type:String,
        default:"user",
        enum:["user","admin","store"]
    }
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"})
    return token
}


userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async (password)=>{
    return await bcrypt.hash(password,10)
}


const userModel = mongoose.model("users", userSchema)

module.exports = userModel








