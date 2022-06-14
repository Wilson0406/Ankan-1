import React from 'react';

import SectionLeftCard from './Section/section1/SectionLeftCard';
import SectionrightCard from './Section/section1/SectionrightCard';

import Card from './Section/section2/Card';
import Section4_left from './Section/section4/Section4_left';
import Section4_right from './Section/section4/Section4_right';
import Section5_first from './Section/section5/Section5_first';

function MainStore(props) {
  
  return (
    <>


  
      <div className="container" style={{ marginTop: "10px" }}>
      {
        props.data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.data.slice(0,6)} ></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.data.slice(0,7)}></SectionrightCard></div>

        </div>
        ):(<></>)
      }
      </div>
 
       <div className="container my-5">
      { props.s_data?(
        <Card data={props.s_data.slice(0,4)}></Card>
      ):(<></>)
      }
      </div>


       <div className="container" style={{ marginTop: "10px" }}>
      { props.t_data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.t_data.slice(0,6)} ></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.t_data.slice(0,7)}></SectionrightCard></div>

        </div>
      ):(<></>)
      }
      </div>


      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
       { props.data?(
        <div className="row">
          <div className="col-md-6">
            <Section4_left data={props.data.slice(7,9)}>
            </Section4_left>
          </div>

  
    
          <div className="col-md-6">
            <Section4_right>

            </Section4_right>
          </div>
        </div>
       ):(<></>)
       }
      </div>


      <div className="container" style={{ marginTop: "10px" }}>
      {
        props.f_data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.f_data.slice(0,6)}></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.f_data.slice(0,7)}></SectionrightCard></div>

        </div>
        ):(<></>)
      }
      </div>
    
    
      <div className="container my-5">
      { props.s_data?(
        <Card data={props.s_data.slice(3,9)}></Card>
      
      ):(<></>)}
      </div>



      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
      {
        props.s_data && props.t_data && props.data?(
      <div className="row">
        <div className="col-md-4">
        <Section5_first data={props.t_data.slice(6,10)}></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first data={props.s_data.slice(6,10)}></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first data={props.data.slice(6,10)}></Section5_first>
        </div>
      </div>
     ):(<></>) }
      </div> 

    </>
  )
}

export default MainStore