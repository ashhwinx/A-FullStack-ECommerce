const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectToDB  = require("./db/db")
const app = express()
const userRoutes = require("./routes/user.routes")
connectToDB()



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoutes)



app.get("/",(req,res)=>{
    res.send("hello yawrwrrwwr")
})


app.listen(PORT,()=>{
    console.log(`surver is running at ${PORT}`)
})