const Order=require("../../models/orderSchema")


const getorder=async(req,res)=>{
let order;
    order =await Order.find({

    })
    res.json(order)

}
module.exports=getorder