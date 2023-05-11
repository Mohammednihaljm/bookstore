const express=require("express")
const cors=require("cors")
const connectDB = require("./config/db")
const testrouter=require("../Server/router/testrouter")
const env=require("dotenv")




const app=express();

connectDB();

app.use(cors());


env.config()

app.use(express.json())

app.use("/",testrouter)






const PORT=process.env.PORT||4000
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))