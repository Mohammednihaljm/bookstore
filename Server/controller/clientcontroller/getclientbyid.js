const Client=require("../../models/ClientSchema")


const clientgetbyid=async(req,res)=>{

const id=req.params.id

const getclient=await Client.findById({_id:id})
res.json(getclient)

    

}
module.exports=clientgetbyid