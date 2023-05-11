const Customer=require("../../models/CustomerSchema")


const updatecustomer=async(req,res)=>{
id=req.params.id
const{Name,Email,Addressline1,Addressline2,City,State,Pincode,Country}=req.body


const update=await Customer.findByIdAndUpdate(id,{Name,Email,Addressline1,Addressline2,City,State,Pincode,Country})
res.json("update")


}
module.exports=updatecustomer