import React,{useState} from 'react'
import axios from 'axios';

function Admin_post() {

   const [data,setData]=useState('');
   const formData=new FormData();
   formData.append('image_url',data);
   const uploadFile=()=>{
    axios.post('/admin_post',formData).then((response)=>{
          console.log(response.data)
    }).catch(()=>{
          console.log("error")
    })
   }
    return (
        <>
 <input type="file" onChange={(e)=>{
       setData(e.target.files[0])


      
     }} />

     <button onClick={()=>{
           uploadFile();
     }}></button>
        </>

    )
}

export default Admin_post