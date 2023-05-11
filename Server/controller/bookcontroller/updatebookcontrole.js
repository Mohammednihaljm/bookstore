const bookmodel=require("../../models/bookSchema")

const updatebook=async(req,res)=>{
    const{bookname,author,publication,year,availability}=req.body
    

    const id=req.params.id
   const book= await bookmodel.findByIdAndUpdate(id,{bookname,author,publication,year,availability})
   res.json("book update")
}
module.exports=updatebook