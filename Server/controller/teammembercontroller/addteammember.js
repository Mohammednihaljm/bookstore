const Teammember=require("../../models/TeammemberSchema")


const addteammember=async(req,res)=>{
    const{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile}=req.body


    const addteam=await Teammember.create({Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofile})
    res.json(addteam)


}
module.exports=addteammember