const mongoose = require("mongoose")

async function connectToDB  (){
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("mongo connect succsessfully")
        }).catch(err=>console.log(err))
}


module.exports = connectToDB