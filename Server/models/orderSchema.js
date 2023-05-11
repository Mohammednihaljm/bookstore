const mongoose=require("mongoose")



const orderSchema=mongoose.Schema({
 Firstname:{type:String},
 Lastname:{type:String},
 Orderid:{type:Number},
 Product:{type:String},
 Noofproduct:{type:String},
 Date:{type:String},
 Street:{type:String},
 Additionalinformation:{type:String},
 Zipcode:{type:String},
 Place:{type:String},
 Country:{type:String},
 Phonenumber:{type:Number},
 Email:{type:String},

})
const Order=mongoose.model("Order",orderSchema)
module.exports=Order