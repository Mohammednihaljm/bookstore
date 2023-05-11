const mongoose=require("mongoose")


const CustomerSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Addressline1:{type:String},
    Addressline2:{type:String},
    City:{type:String},
    State:{type:String},
    Pincode:{type:String},
    Country:{type:String}

})
const Customer=mongoose.model("Customer",CustomerSchema)
module.exports=Customer

