const Teammember=require("../../models/TeammemberSchema")



const updateteam=async(req,res)=>{
id=req.params.id
const{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile}=req.body

const update=await Teammember.findByIdAndUpdate(id,{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile})
res.json("update")

}
module.exports=updateteam