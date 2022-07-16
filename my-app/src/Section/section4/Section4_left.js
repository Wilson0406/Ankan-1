import React from 'react'
import './section4.css'

function Section4_left(props) {
    const isText=( s)=>{
        if(s==null)return "";
        else if(s.length>=116) return s.substring(0,116);
        else return s;
        
  
      }
    return (
        
        <div className="card-section4-left-main">
        {/* <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Spotlight<div style={{ background: "red", display: "inline-block", width: "23rem", height: "5px",marginLeft:"3px" }}></div></h4> */}
       { props.data?(
        <div className=' card-section4-left ' >
            <img src={props.data[0].image_url} className='Card image cap img-fluid'  alt="" />
            <div className="card-body-section4-left my-2">
                <p> {isText(props.data[0].title)}</p>
            </div>
            </div>
       ):(<></>)
       }

        </div>
        
    )
}

export default Section4_left