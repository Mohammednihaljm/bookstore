const Customer=require("../../models/CustomerSchema")



const deletcustomer=async(req,res)=>{
id=req.params.id
const {Name,Email,Addressline1,Addressline2,City,State,Pincode,Country}=req.body

const deletecustomer=await Customer.findByIdAndDelete(id,{Name,Email,Addressline1,Addressline2,City,State,Pincode,Country})
res.json("deletecustomer")

}
module.exports=deletcustomer