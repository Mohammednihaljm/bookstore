const Order=require("../../models/orderSchema")

const updateorder=async(req,res)=>{
id=req.params.id
const{Firstname,Lastname,Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email}=req.body

const update=await Order.findByIdAndUpdate(id,{Firstname,Lastname,Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email})
res.json("update order")

}
module.exports=updateorder