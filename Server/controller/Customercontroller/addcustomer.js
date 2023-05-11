const Customer=require("../../models/CustomerSchema")

const addcustomer=async(req,res)=>{
    const{Name,Email,Addressline1,Addressline2,City,State,Pincode,Country}=req.body

  const customerdetails = await Customer.create({
        Name,Email,Addressline1,Addressline2,City,State,Pincode,Country   
    })
    res.json(customerdetails)

}
module.exports=addcustomer