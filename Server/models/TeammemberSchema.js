const mongoose=require("mongoose")


const TeammemberSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Dateofbirth:{type:Number},
    Gender:{type:String},
    Description:{type:String},
    Role:{type:String},
    Phonenumber:{type:String},
    Uploadprofilepicture:{type:String}
})
const Teammember=mongoose.model("Teammember",TeammemberSchema)
module.exports=Teammember