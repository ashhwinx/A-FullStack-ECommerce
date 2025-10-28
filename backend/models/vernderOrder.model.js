const mongoose = require("mongoose")


const venderOrderSchema = new mongoose.Schema({
    venderName:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    products:[
        {
            productId:{
                type:String,
                required:true
            },
            title:String,
            quantity:Number,
            salePrice:Number,
            price:Number
        },
    ],
    totalAmount:{
        type:Number,
        default:0
    },

    status:{
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
         createdAt: {
    type: Date,
    default: Date.now
        }
})


const venderOrderModel = mongoose.model("vender",venderOrderSchema)


module.exports = venderOrderModel