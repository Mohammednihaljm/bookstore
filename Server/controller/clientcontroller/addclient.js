const Client=require("../../models/ClientSchema")

const addclient=async(req,res)=>{
const{Name,Username,Email,Signedstatus,Role,Phonenumber}=req.body
const clientdetails=await Client.create({
    Name,
    Username,
    Email,
    Signedstatus,
    Role,
    Phonenumber

})
res.json(clientdetails)

}
module.exports=addclient