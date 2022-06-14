const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const user_schema = new mongoose.Schema({
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
         default:"user",
         required:true
     },
     password:{
        type:String,
        required:true
     }
});


user_schema.pre('save',async function(next){
   this.password=await bcrypt.hash(this.password,12);
   next();
})

const Data=mongoose.model('user_data',user_schema);



module.exports=Data;