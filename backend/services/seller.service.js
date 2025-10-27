const sellerModel = require("../models/seller.model")
const mongoose = require("mongoose")


module.exports.createSeller = async ({fullname,storeName,storeDescription,email,password})=>{
            try {
                if (!fullname ||!storeName ||!storeDescription ||!email ||!password){
                    throw new Error("all field are req")
                }


                const seller  =  sellerModel.create({
                    fullname,
                    storeName,
                    storeDescription,
                    email,
                    password
                })


                return seller



            } catch (error) {
                res.status(500).json({error:error.message})
            }
}