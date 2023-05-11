const Client=require("../../models/ClientSchema")


const updateclient=async(req,res)=>{
const{Name,Username,Email,Signedstatus,Role,Phonenumber}=req.body  
const id=req.params.id
 

const update=await Client.findByIdAndUpdate(id,{Name,Username,Email,Signedstatus,Role,Phonenumber})
res.json("update client")


}
module.exports=updateclient