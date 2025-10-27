const mongoose  = require("mongoose")


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    salePrice:{
        type:Number,
        require:true,
        min:0
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:[String],
        require:true
    },
    size:{
        type:[String],
        enum:['S','M','L','XL','XXL'],
        default:[]
    }
})


const productModel = mongoose.model("products",productSchema)

module.exports = productModel