import React, { useState } from 'react'
import { useEffect } from 'react'

import BlogCard from '../card/BlogCard'
import axios from 'axios';






function Dashboard() {

  const [blog, setBlog] = useState();
  
  const [post, setPost] = useState();


  const [sizeofblog,setsizeofblog]=useState(false);
  const [sizeofpost,setsizeofpost]=useState(false)
  const [buttonBlogName,setButtonBlogName]=useState("Show All")
  const [buttonPostName,setButtonPostName]=useState("Show All")

  const delete_blog=(id)=>{
     axios.delete(`/admin_blog/${id}`).then((response)=>{
          if(response.status===200){
            blogFunc();
          }
     })
  }

  const delete_post=(id)=>{

    
    axios.delete(`/admin_post/${id}`).then((response)=>{
         if(response.status===200){
          
          postFunc();
        
         }
    })
 }
  const blogFunc = () => {
     
  
    axios.get('/admin_blog').then((response) => {
      setBlog(response.data)

    }).catch(() => {

    })

    
    

  }


  const postFunc=()=>{
    axios.get('/admin_post').then((response) => {
      setPost(response.data)
     
    }).catch(() => {

    })
  }


  useEffect(()=>{
    blogFunc();
    postFunc();
  },[]
  )

  return (
    <>

      <div className="">
      
        <h3 className='recent-blog-border-st'>Recent Blog</h3>

        <div className="row " style={{ margin: "2px" }} >
        {
         blog && sizeofblog ===false?(<>

          {
            
            
          blog.slice(blog.length>8 ?blog.length-8:0,blog.length).map((ele)=>{
            
              return(
                <div key={ele._id} className="col-md-4 col-lg-2 col-sm-4 col-12  recent-post-blog" onClick={()=>{
                   delete_blog(ele._id);
                }}> <BlogCard data_api={ele}></BlogCard></div>
              )
           })
          }
         </>):(<> </>) 
      }

      {
         blog && sizeofblog === true?(<>

          {
            
            
          blog.slice(0,blog.length).map((ele)=>{
            
              return(
                <div key={ele._id} onClick={()=>{
                    delete_blog(ele._id)
                }} className="col-md-4 col-lg-2 col-sm-4 col-12  recent-post-blog"> <BlogCard data_api={ele}></BlogCard></div>
              )
           })
          }
         </>):(<> </>) 
      }

        </div>
        <button className='recent-blog-button' onClick={()=>{
          
          if(sizeofblog==false){
            setsizeofblog(true)
            setButtonBlogName("Hide all")
          }
          else{
            setsizeofblog(false)
            setButtonBlogName("Show all")
          }
        }}>{buttonBlogName}</button>
      </div>
     

      <div classNameName="">
        <h3 className='recent-blog-border-st'>Recent Post</h3>
        <div className="row " style={{ margin: "2px" }} >
          
        {
         post && sizeofpost==false?(<>

          {
            
          post.slice(post.length>8 ?post.length-8:0,post.length).map((ele)=>{
            
              return(
                <div key={ele._id} onClick={()=>{
                    delete_post(ele._id)
                }} className="col-md-4 col-lg-2 col-sm-4 col-12  recent-post-blog"> <BlogCard data_api={ele}></BlogCard></div>
              )
           })
          }
         </>):(<> </>) 
      }

      {
         post && sizeofpost==true?(<>

          {
            
          post.slice(0,post.length).map((ele)=>{
            
              return(
                <div key={ele._id}  onClick={()=>{
                   delete_post(ele._id);
                }} className="col-md-4 col-lg-2 col-sm-4 col-12  recent-post-blog"> <BlogCard data_api={ele}></BlogCard></div>
              )
           })
          }
         </>):(<> </>) 
      }

        </div>
        <button className='recent-blog-button' onClick={()=>{
            
            if(sizeofpost==false){setsizeofpost(true)
          setButtonPostName("Hide all")
          }
          else{
            setsizeofpost(false)
          setButtonPostName("Show all")
          }

        }}>{buttonPostName}</button>
      </div>

    </>
  )
}

export default Dashboard