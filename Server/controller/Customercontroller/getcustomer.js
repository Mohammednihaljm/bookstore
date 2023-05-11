const Customer=require("../../models/CustomerSchema")


const getcustomer=async(req,res)=>{
let customer;
customer=await Customer.find()
res.json(customer)


}
module.exports=getcustomer