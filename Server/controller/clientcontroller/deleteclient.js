const Client=require("../../models/ClientSchema")


const deleteclient=async(req,res)=>{
const {Name,Username,Email,Signedstatus,Role,Phonenumber}=req.body
const id=req.params.id


const deleteclient= await Client.findByIdAndDelete(id,{Name,Username,Email,Signedstatus,Role,Phonenumber})
res.json("deleteclient")

}
module.exports=deleteclient