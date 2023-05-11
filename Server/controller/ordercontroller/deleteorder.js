const Order=require("../../models/orderSchema")


const deletorder=async(req,res)=>{
id=req.params.id
const{Firstname,Lastname,Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email}=req.body

const delet= await Order.findByIdAndDelete(id,{Firstname,Lastname,Orderid, Product,Noofproduct, Date,Street,Additionalinformation,zipcode,Place, Country,Phonenumber,Email})
res.json("order deleted")




}
module.exports=deletorder