const express =require('express');
const app=express();

const PORT=process.env.PORT||5000;
require('./src/DB/conn');
app.use(express.json());
const cookieparser=require('cookie-parser');
app.use(cookieparser());
const imageUpload=require('express-fileupload')
app.use(imageUpload({
    useTempFiles:true
}))
const router=require('./src/Router/router');
const adminRoute=require('./src/Router/adminRouter')

app.use(router);
app.use(adminRoute)






app.listen(PORT,()=>{
    console.log('listening....')
   
})