const bookmodel=require("../../models/bookSchema")


const deleltebook=async(req,res)=>{
    const {bookname,author,publication,year,availability}=req.body

  const id=req.params.id
  const books=  await bookmodel.findByIdAndRemove(id,{bookname,author,publication,year,availability})
  res.json("books deleted")

}
module.exports=deleltebook