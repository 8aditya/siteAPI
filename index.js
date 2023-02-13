//jshint esversion:6
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const userRoute = require("./routes/users.js")
const authRoute = require("./routes/auth.js")
const postRoute = require("./routes/posts.js")

const app = express()
dotenv.config()

//middleware
app.use(express.json())
app.use(morgan("common"))
app.use(helmet())

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.get("/",function(req,res){
    res.send("welcome to the homepage")
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})