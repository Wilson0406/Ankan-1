const jwt=require('jsonwebtoken');
const Data=require('../schema/schema')

 module.exports=async(req,res,next)=>{
     try{
     const verify=await jwt.verify(req.cookies.access_token,"ANKANKARMAKAR")
     if(verify){
        const user_profile=await Data.findOne({_id:verify.id});
       if(user_profile.role==="user"){
           
         next();
       }
       
     }else{
         res.status(400).send("error")
     }
    }catch(e){
        res.status(400).send("eorror")
    }
 }
