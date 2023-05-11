const jwt=require("jsonwebtoken")

const protect=async(req,res,next)=>{
    let token;


    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,"process.env.Jwt_SECRET");
            next();
        }catch(error){
            res.status(401).send("No token");
            throw new Error("Not authorised,token");
        }
    }
    if(!token){
        res.status(401).send("No token");
            throw new Error("Not authorised,no token");
    }
};
module.exports=protect;