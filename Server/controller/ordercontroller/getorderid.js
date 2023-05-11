const Order=require("../../models/orderSchema")



const getorderid=async(req,res)=>{

    id=req.params.id
    const getorder=await Order.findById({_id:id})
    res.json(getorder)


}
module.exports=getorderid