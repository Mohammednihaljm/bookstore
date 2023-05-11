const Order=require("../../models/orderSchema")


const addorder=async(req,res)=>{

 const{Firstname,Lastname,Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email}=req.body
 const orderdetails=await Order.create({
    Firstname,Lastname, Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email
 })
 res.json(orderdetails)

}
module.exports=addorder

