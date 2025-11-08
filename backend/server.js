const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectToDB  = require("./db/db")
const app = express()
const userRoutes = require("./routes/user.routes")
const productRoutes = require("./routes/product.routes")
const cartRoutes = require("./routes/carts.routes")
const sellerRoutes = require("./routes/seller.routes")
const orderRoutes = require("./routes/order.routes")
const adminRoutes = require("./routes/admin.routes")
const cors = require("cors")
connectToDB()

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET",'POST','PUT','DELETE'],
    credentials:true
}))



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoutes)
app.use("/productdata", productRoutes)
app.use("/cart",cartRoutes)
app.use("/seller",sellerRoutes)
app.use("/order",orderRoutes)
app.use("/admin",adminRoutes)

app.get("/",(req,res)=>{
    res.send("hello yawrwrrwwr")
})


app.listen(PORT,()=>{
    console.log(`surver is running at ${PORT}`)
})