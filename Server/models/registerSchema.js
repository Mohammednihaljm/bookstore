const mongoose=require("mongoose")


const registerSchema=mongoose.Schema({
    First_name:{type:String},
    Last_name:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const Register=mongoose.model("Register",registerSchema)

module.exports=Register