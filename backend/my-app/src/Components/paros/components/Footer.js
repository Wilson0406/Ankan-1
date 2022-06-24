import React from 'react'
import like from './icons/like.svg';
import "./Footer.css";

function footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-muted " style={{background:"#acacac"}}>


        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-4">

              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-3">
                <img src="./autlogo.png" style={{height: "9rem"}} alt="" />
              </div>




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none">About</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none">Contact</a>
                </h6>
              </div>

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none">ValueAd</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none">Careers</a>
                </h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none">Terms of Use</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none ">Privacy Policy</a>
                </h6>
              </div>

            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>



        {/* <!-- Section: Links  --> */}


        <section className="justify-content-center justify-content-lg-between d-flex" style={{backgroundColor: "#ffea30"}}>
          <div className="container text-center text-md-start">
            {/* Grid row */}
            <div className="row mt-2 mb-2">
              {/* Grid column  */}
              <div className="col-md-8 col-lg-6 mx-auto m-auto text-black text-sm-start">
                Copyright © 2022 Printline Media Pvt. Ltd. All rights reserved.
              </div>
              {/* Grid column */}


              <div className="col-md-4 col-lg-4 text-sm-center">

                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-decoration-none">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

            </div>
            {/* Grid row */}
          </div>
        </section>




      </footer>

    </>
  )
}

export default footer
