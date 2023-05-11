const Customer=require("../../models/CustomerSchema")


const getcustomerbyid=async(req,res)=>{

const id=req.params.id
const getcustomer=await Customer.findById({_id:id})
res.json(getcustomer)


}
module.exports=getcustomerbyid