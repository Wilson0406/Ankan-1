const jwt=require('jsonwebtoken');
const Admin_data=require('../schema/adminSchema')

 module.exports=async(req,res,next)=>{
     try{
     const verify=await jwt.verify(req.cookies.access_token,"ANKANKARMAKAR")
     if(verify){
        const admin_profile=await Admin_data.findOne({_id:verify.id});
       if(admin_profile.role==="admin"){
           
         next();
       }
       
     }else{
         res.status(400).send("error")
     }
    }catch(e){
        res.status(400).send("eorror")
    }
 }
