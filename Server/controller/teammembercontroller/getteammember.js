const Teammember=require("../../models/TeammemberSchema")


const getteam=async(req,res)=>{
let team;

team=await Teammember.find()
res.json(team)



}
module.exports=getteam