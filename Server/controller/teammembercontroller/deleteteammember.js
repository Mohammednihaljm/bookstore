const Teammember=require("../../models/TeammemberSchema")


const deleteteam=async(req,res)=>{
id=req.params.id
const{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile}=req.body

await Teammember.findByIdAndDelete(id,{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile})
res.json("delete team")


}
module.exports=deleteteam