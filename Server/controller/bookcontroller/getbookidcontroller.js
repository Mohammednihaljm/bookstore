const bookmodel=require("../../models/bookSchema")


const getbookbyid=async(req,res)=>{

const id = req.params.id;
  const getbyid=  await bookmodel.findById({_id:id})
  res.json(getbyid)
}
module.exports=getbookbyid