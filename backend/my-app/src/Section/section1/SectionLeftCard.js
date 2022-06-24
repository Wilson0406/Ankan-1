import React from 'react'
import './section1.css'

function SectionLeftCard(props) {
    var st="The news media or news industry are forms of mass media that focus on delivering news to the general public or a target public."
    
    const  isCreator=(s)=>{
        if(s==null) return "Unknown";
        else{
            return s[0];
        }
   }
    const isText=( s)=>{
      if(s==null)return s;
      else if(s.length>=95) return s.substring(0,95);
      else return s;
      

    }
    
    const isDescription=( s)=>{
        if(s==null){
            return st;
        }else if(s.length>=126) return s.substring(0,126);
        else return s;
     }
    return (
        
        <section className='top-heading'>
            
            
            
            {/* <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Top Stories <div style={{ background: "red", display: "inline-block", width: "600px", height: "5px" }}></div></h4> */}
            {
                     props.data?(
                         <>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                 
                    <div className="card-left">
                        <img src={props.data[0].image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">{isText(props.data[0].title)}</h6>
                            <span ><i className="fa-solid fa-circle-user"></i><span className="logo-text">{isCreator(props.data[0].creator)}</span>
                            </span>
                            <p className="card-text my-2">{isDescription(props.data[0].description)}...</p>
                            

                        </div>
                    </div>
                  
                </div>
                 <div className="col-md-6 col-sm-12 card-left-right">

                     <div className=" my-2 card-right" >
                        <div className="card-body right-card">
                            <p>{isText(props.data[1].title.substring(0,70))}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[1].creator)}</span></span>
                        </div>
                    </div>
                    
                    <div className="card-right">
                        <div className="card-body right-card">
                            <p>{isText(props.data[2].title.substring(0,70))}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[2].creator)}</span></span>
                        </div>
                    </div>
                    
                    <div className="my-2 card-right">
                        <div className="card-body right-card">
                            <p>{isText(props.data[3].title.substring(0,70))}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[3].creator)}</span></span>
                        </div>
                    </div>
                    <div className=" my-2 card-right">
                        <div className="card-body right-card">
                            <p>{isText(props.data[4].title.substring(0,70))}
                            </p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i><span className="logo-text">{isCreator(props.data[4].creator)}</span></span>
                        </div>
                    </div>

                    <div className="my-2 ">
                        <div className="card-body right-card">
                            <p>{isText(props.data[5].title.substring(0,70))}
                            </p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i><span className="logo-text">{isCreator(props.data[5].creator)}</span></span>

                        </div>
                    </div> 

                </div>

            </div>
            </>  ):(<></>)
                 }

        </section>

    )
}

export default SectionLeftCard