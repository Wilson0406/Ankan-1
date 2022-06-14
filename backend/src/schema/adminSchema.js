const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const admin_schema = new mongoose.Schema({
    fname:{
       type:String,
       required:true
    },
    lname:{
       type:String,
       required:true
    },
    email:{
       type:String,
       required:true,

       validate(value){
           if(validator.isEmail(value)){
               
           }else{
               throw new Error("Error");
           }
       }
 
     
    },
    role:{
        type:String,
        default:"admin",
        required:true
    },
    password:{
       type:String,
       required:true
    }
});

admin_schema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,12);
    next();
 })
 
const Admin_data=mongoose.model('admin_data',admin_schema);

module.exports=Admin_data;