const bookmodel=require("../../models/bookSchema")


const getbook=async(req,res)=>{
let books ;


 books= await bookmodel.find()
res.json(books)
}
module.exports=getbook