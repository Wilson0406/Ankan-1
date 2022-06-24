
const mongoose=require('mongoose');
const atlas=`mongodb+srv://Autring1234:Autring1234@cluster0.0uxbw.mongodb.net/?retryWrites=true&w=majority`
const url=`mongodb://127.0.0.1:27017/user_data`;
mongoose.connect(atlas,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then((res)=>{
    console.log('connected')
}).catch(()=>{
    console.log('not-connected')
})