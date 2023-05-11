const Register=require("../models/registerSchema")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


const Login=async(req,res)=>{
    const {Email,Password}=req.body;
    const check=await Register.findOne({Email:Email})
   
   
   
    if (check  && (await bcrypt.compare(Password,check.Password))){
   
     
     res.json({
       
       message:"Login success",
       Token:generateToken(check._id)
   
     })
   }
   else{
   
     res.json("failed")
   }
   }
   
   const generateToken=(id)=>{
      //  return jwt.sign({id},"nihal123",{
        return jwt.sign({id},process.env.Jwt_SECRET,{
         expiresIn:'1d',
       })
     }
module.exports=Login