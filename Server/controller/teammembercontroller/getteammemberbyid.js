const Teammember=require("../../models/TeammemberSchema")


const getteambyid=async(req,res)=>{
id=req.params.id

const getteam= await Teammember.findById({_id:id})
res.json(getteam)

}
module.exports=getteambyid