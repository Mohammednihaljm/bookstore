const Register=require("../models/registerSchema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const Signup=async(req,res)=>{
const{First_name,Last_name,Email,Password}=req.body;
const salt= await bcrypt.genSalt(10);
const hashedpassword= await bcrypt.hash(Password,salt)

if(!First_name||!Last_name||!Email||!Password){
    res.json("ALL DETAILS ADD")
}
else if(Password.length<=6){
    res.json("PLEASE AT LEAST 6 character")
}
else{
    const registerDetails=await Register.create({
     First_name,
     Last_name,
     Email,
     Password:hashedpassword
    })
    res.json({
        id:registerDetails._id,
        First_name:registerDetails.First_name,
        Last_name:registerDetails.Last_name,
        Email:registerDetails.Email,
        Password:registerDetails.Password,
        Token:generateToken()
    })
}}
const generateToken=(id)=>{
    return jwt.sign({id},"nihal123",{
    expiresIn:'1d',
    })
  }


module.exports=Signup