import React from 'react'
import './section5.css'
function Section5_first(props) {
 
    const isText = (s) => {
        if (s == null) return s;
        else if (s.length >= 80) return s.substring(0, 80);
        else return s;


    }
    return (
        <> {
            props.data ? (
                <div className=' container card-section5-main'>
                    {/* <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Stories<div style={{ background: "red", display: "inline-block", width: "15rem", height: "5px", marginLeft: "3px" }}></div></h4> */}

                    <div className='my-2 '>

                        <div className="row">
                       
                            <div className="col-md-6 col-6">
                                <div className="card-section5-img">
                                    <img src={props.data[0].image_url} className='img-fluid' alt="" />
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-6">
                                <div className="card-section5-text"> {isText(props.data[0].title)}</div>

                            </div>
                        </div>
                    </div>  

                    <div className='my-2 card-Section5-body'>
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="card-section5-img">
                                    <img src={props.data[1].image_url} className='img-fluid'alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="card-section5-text">
                                    {isText(props.data[1].title)}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='my-2 card-Section5-body'>
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="card-section5-img">
                                    <img src={props.data[2].image_url} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="card-section5-text">
                                    {isText(props.data[2].title)}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='my-2 card-Section5-body'>
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="card-section5-img">
                                    <img src={props.data[3].image_url} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="card-section5-text">
                                    {isText(props.data[3].title)}
                                </div>

                            </div>
                        </div>
                    </div>



                    
                </div>
            ) : (<></>)}
        </>

    )
}

export default Section5_first