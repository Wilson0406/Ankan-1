import React,{useState} from 'react'
import axios from 'axios'

function Admin_blog() {
  const [image_url,setImageUrl]=useState();
  const [title,setTitle]=useState();
  const [description,setDescription]=useState();
  const [author,setAuthor]=useState();

  const formData=new FormData();
   formData.append('image_url',image_url);
   formData.append('title',title);
   formData.append('description',description);
   formData.append('author',author);
   const uploadFile=()=>{
    axios.post('/admin_blog',formData).then((response)=>{
          console.log(response.data)
    }).catch(()=>{
          console.log("error")
    })
   }
  return (<>
     <div>Admin_blog</div>
     <input type="file" onChange={(e)=>{
       setImageUrl(e.target.files[0])
      
     }} />
     <input type="text" onChange={(e)=>{
       setTitle(e.target.value)
     }} />
     <input type="text" onChange={(e)=>{
       setDescription(e.target.value)
     }} />
     <input type="text" onChange={(e)=>{
       setAuthor(e.target.value)
     }} />

     <button type="submit" onClick={()=>{
       uploadFile();
     }}> submit</button>


  </>
    
  )
}

export default Admin_blog