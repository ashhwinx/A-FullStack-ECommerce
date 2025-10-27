const mongoose  = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const sellerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    storeProfile:{
            type:String,
            default:""
    },
    storeName:{
        type:String,
        required:true,
        unique:true,
    },
    storeDescription:{
        type:String,
        required:true,
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
        default:"seller"
    },
    active:{
        type: Boolean,
        default:false
    }
})



sellerSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SELLER)
    return token
}

sellerSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

sellerSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}


const sellerModel = mongoose.model("seller",sellerSchema)


module.exports = sellerModel

