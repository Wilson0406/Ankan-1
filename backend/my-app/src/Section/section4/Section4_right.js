import React from 'react'
import './section4.css'

function Section4_right() {
    return (
        <div className='section4-right-main'>
            {/* <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>On camera<div style={{ background: "red", display: "inline-block", width: "26rem", height: "5px",marginLeft:"3px" }}></div></h4> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card"  style={{maxWidth:"16rem", marginLeft:"3px"}}>
                        <img src="https://static.india.com/wp-content/uploads/2022/05/Chennai-Super-Kings-vs-Kolkata-Knight-Riders.jpeg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{maxWidth:"16rem", marginRight:"3px"}}>
                        <img src="https://static.india.com/wp-content/uploads/2022/05/Chennai-Super-Kings-vs-Kolkata-Knight-Riders.jpeg" alt="" />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <div className="card my-2" style={{maxWidth:"16rem", marginLeft:"3px"}}>
                        <img src="https://static.india.com/wp-content/uploads/2022/05/Chennai-Super-Kings-vs-Kolkata-Knight-Riders.jpeg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card my-2" style={{maxWidth:"16rem",marginRight:"3px"}}>
                        <img src="https://static.india.com/wp-content/uploads/2022/05/Chennai-Super-Kings-vs-Kolkata-Knight-Riders.jpeg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4_right