const mongoose=require('mongoose');

const admin_blog = new mongoose.Schema({
    image_url:{
       type:String,
       required:true
    },
    title:{
       type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
       type:String,
       required:true,

    }
   
});

 
const Admin_blog=mongoose.model('admin_blog',admin_blog);

module.exports=Admin_blog;