const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
        unique:true
    },
    products:[{
        productId:{
            type: String,
            required:true
        },
        quantity:{
            type: Number,
            required:true,
            min:1,
            default:1
        } 
    
    }]
},
    {timestamps:true}
)

const cartModel = mongoose.model("cart", cartSchema)

module.exports = cartModel