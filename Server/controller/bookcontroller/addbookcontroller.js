const bookmodel=require("../../models/bookSchema")


const bookdata=async(req,res)=>{
 const {bookname,author,publication,year,availability}=req.body
const bookdetails=await bookmodel.create({
bookname,
author,
publication,
year,
availability
})
res.json(bookdetails)
}
module.exports=bookdata