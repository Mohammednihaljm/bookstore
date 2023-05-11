const Client=require("../../models/ClientSchema")



const getclient=async(req,res)=>{

let client;
 client=await Client.find()
 res.json(client)


}
module.exports=getclient