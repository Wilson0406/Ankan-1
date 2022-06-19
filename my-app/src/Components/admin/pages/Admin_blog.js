import React, { useState } from 'react'
import '../css/style.css'
import axios from 'axios'
import Loading from './Loading';


function Admin_blog() {
  const [image_url, setImageUrl] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [loding,setLoding]=useState();

  const formData = new FormData();
  formData.append('image_url', image_url);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('author', author);
  
  const loding_page =()=>{
    setTimeout(()=>{
       
    },4000)
  }
  const uploadFile = () => {
    axios.post('/admin_blog', formData).then((response) => {
      setLoding(response.status);
    }).catch(() => {
      console.log("error")
    })
  }

  return (<>
  <Loading></Loading>
    <div className="container-backend">
      <form >
        <div className="row">
          <div className="col-25">
            <label for="imageurl">Image</label>
          </div>
          <div className="col-75">
            <input type="file" onChange={(e) => {
              setImageUrl(e.target.files[0])
            }} id="imageurl" name="imageurl" placeholder="Image" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="title">Title</label>
          </div>
          <div className="col-75">
            <input type="text" onChange={(e) => {
              setTitle(e.target.value)
            }} id="title" name="title" placeholder="title" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="author">Author</label>
          </div>
          <div className="col-75">
            <input type="text" onChange={(e) => {
              setAuthor(e.target.value)
            }} id="author" name="author" placeholder="author" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="description">Description</label>
          </div>
          <div className="col-75">
            <textarea id="text" onChange={(e) => {
              setDescription(e.target.value)
            }} name="description" placeholder="description" style={{ height: "200px" }}></textarea>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" onClick={(e)=>{
            e.preventDefault();
            uploadFile();
            loding_page();
          }} />
        </div>
      </form>
    </div>

  </>

  )
}

export default Admin_blog