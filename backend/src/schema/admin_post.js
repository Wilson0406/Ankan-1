
const mongoose =require("mongoose");
const admin_post=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        
    },
    keywords:[{
        type:String,
        
    }],
    creator:[{
        type:String,
        required:true
    }],
    video_url:{
       type:String,
       default:null
    },
    description: {
        type:String,
        required:true
    },
    content:{
        type:String,
        default:null
    },
    pubDate:{
       type:String,
       default:new Date()
    },
    image_url:{
        type:String,
            required:true
    },
    source_id:{
        type:String,
        default:null
    },
    country: [
        {
            type:String,
            required:true
        }
    ],
    category: [
        {
            type:String,
            required:true
        }
    ],
    language:{
        type:String,
        default:"English"
    }
})

const Admin_post=new mongoose.model('admin_post',admin_post);

module.exports=Admin_post;

    


