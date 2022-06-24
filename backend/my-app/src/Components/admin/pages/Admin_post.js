import React, { useState } from 'react'
import '../css/style.css';
import axios from 'axios';
import Loader from '../../loader/Loader';

function Admin_post() {
      const [loader,setLoader]=useState(false)
      const [title, setTitle] = useState('');
      const [link, setLink] = useState('');
      const [keywords, setKeywords] = useState([]);
      const [creator, setCreator] = useState([]);
      const [video_url, setVideo_url] = useState('');
      const [description, setDescription] = useState('');
      const [image_url, setImageUrl] = useState('');
      const [country, setCountry] = useState([]);
      const [category, setCategory] = useState([]);
      const formData = new FormData();
      formData.append('title',title);
      formData.append('link', link);
      formData.append('keywords',keywords);
      formData.append('creator', creator);
      formData.append('video_url',video_url);
      formData.append('description',description);
      formData.append('image_url', image_url);
      formData.append('country',country);
      formData.append('category',category);

      const loding_page =()=>{
        setLoader(true);
       
       setTimeout(()=>{
          setLoader(false);
          
       },4000)
     }

      const uploadFile = () => {
        axios.post('/admin_post', formData).then((response) => {
          if(response.status===200){
            alert("successful")
          }else{
            alert("Error")
          }
        }).catch(() => {
          alert("Error")
        })
      }

      const clearState=()=>{
         setTitle("");
         setLink("");
         setKeywords("");
         setCreator("");
         setVideo_url("");
         setDescription("");
         setImageUrl("");
         setCountry("");
         setCategory("");
      }
      return (
            <>
            {
                loader?(<Loader/>):(<>
                    <div className='main-div'>
            <h4 className='text-center mt-5'>Admin Post</h4>
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                     setTitle(e.target.value)
                    }} id="title" aria-describedby="title" required />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Link</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setLink(e.target.value)
                    }} id="link" aria-describedby="link" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Keywords</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setKeywords(e.target.value)
                    }} id="keyword" aria-describedby="keyword" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Creator</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setCreator(e.target.value)
                    }} id="creator" aria-describedby="creator" required />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Video URL</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setVideo_url(e.target.value)
                    }} id="videoUrl" aria-describedby="videoUrl" />
                </div>
                <label for="floatingTextarea2">Description</label>
                <div className="form-floating">
                    <textarea className="form-control" onChange={(e)=>{
                        setDescription(e.target.value)
                    }} id="floatingTextarea2" required></textarea>
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Image URL</label>
                    <input type="file" className="form-control" onChange={(e)=>{
                        setImageUrl(e.target.files[0]);
                    }} id="imageUrl" aria-describedby="imageUrl" required />
                </div>
           
                <div className="dropdown mb-3">
                <label for="title" className="form-label">Country</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setCountry(e.target.value)
                    }} id="country" aria-describedby="" required />
                </div>
                <div className="dropdown mb-3">
                <label for="title" className="form-label">Category</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                        setCategory(e.target.value)
                    }} id="category" aria-describedby="category" required />
                </div>
                <div className="dropdown mb-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Languages
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">English</a></li>
                    </ul>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e)=>{
                  e.preventDefault();
                  uploadFile();
                  loding_page();
                  clearState();
                }}>Submit</button>
            </form>
        </div>
        </>
                )
            }
            
            </>

      )
}

export default Admin_post