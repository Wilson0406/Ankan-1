import React from 'react'
import './section2.css'

function Card(props) { 
   
  const  isCreator=(s)=>{
        if(s==null) return "Unknown";
        else{
            return s[0];
        }
   }


    const isText = (s) => {
        if (s == null) return s;
        else if (s.length >=75) return s.substring(0,61);
        else return s;


    }
    return (
        <>

            <div className='card-section2-main'>
                {/* <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Latest<div style={{ background: "red", display: "inline-block", width: "62rem  ", height: "5px", marginLeft: "3px" }}></div></h4> */}
                { props.data?(
                <div className="row">

                    <div className="col-md-3 ">

                        <div className='card-section2 my-2'>
                            <img src={props.data[0].image_url} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6 className='card-title'>
                                 {isText(props.data[0].title)}...
                                </h6>
                                <p className='card-title'>{isCreator(props.data[0].creator)}  <span >{props.data[0].pubDate}</span></p>
                            </div>
                        </div>


                    </div>



                    <div className="col-md-3">

                        <div className='card-section2 my-2'>
                            <img src={props.data[1].image_url} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{isText(props.data[1].title)}...
                                </h6>
                                <p>{isCreator(props.data[1].creator)}  <span >{props.data[1].pubDate}</span></p>
                            </div>
                        </div>


                    </div>


                    <div className="col-md-3">

                        <div className='card-section2 my-2' >
                            <img src={props.data[2].image_url} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{
                                    isText(props.data[2].title)
                                }...
                                </h6>
                                <p>{isCreator(props.data[2].creator)}  <span >{props.data[2].pubDate}</span></p>
                            </div>
                        </div>


                    </div>


                    <div className="col-md-3">

                        <div className='card-section2 my-2' >
                            <img src={props.data[3].image_url} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{isText(props.data[3].title)}...
                                </h6>
                                <p>{isCreator(props.data[3].creator)}  <span >{props.data[3].pubDate}</span></p>
                            </div>
                        </div>


                    </div>


                </div>
                ):(<></>)
                }
            </div>

        </>
    )
}





export default Card
