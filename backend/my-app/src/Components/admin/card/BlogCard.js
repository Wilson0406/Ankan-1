import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function BlogCard(props) {

  
  return (
    <>
    {
     
      props.data_api?(<>
        <div className="card" style={{ width: "auto" }}>
          <img className="card-img-top" src={props.data_api.image_url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title my-h5">{props.data_api.title?props.data_api.title.substring(0,30):null}</h5>
            <div className='card-button'>
            <a href="#" className=""><i class="fa-solid fa-eye"></i></a>
          
            <Link to="/admin_main" onClick={()=>{
              
              
            }}><i className="fa-solid fa-trash-can"></i></Link>
            
            </div>
          </div>
        </div>
        </>
      ):(<> </>)
    }

</>
  )
}

export default BlogCard