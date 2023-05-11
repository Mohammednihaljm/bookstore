const mongoose=require("mongoose")


const bookdataSchema=mongoose.Schema({
    bookname:{type:String},
    author:{type:String},
    publication:{type:String},
    year:{type:Number},
    availability:{type:String}
})
const bookmodel =mongoose.model('bookdata',bookdataSchema)

module.exports=bookmodel