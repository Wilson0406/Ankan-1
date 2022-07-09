import React from 'react'
import like from './icons/like.svg';
import "./Footer.css";

function footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-muted " style={{background:"#acacac", paddingTop: "25px", width: "100%", borderTop: "5px solid #f4ea30"}}>


        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-4">

              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-3">
                <img src="https://dsm01pap006files.storage.live.com/y4m-jxR7yslFbbVqtOsjFEuZ19kN2AnYXh5awmJEcWoC3NFffS4DCYa7SAXhTbTFHXEnNX6vosPLVhsfH2xk_XgYLHy1hFP2P83zz5NTJJ7kc_eTNcYENpkVMYCFy22AhIQuLpuOlhqoYwxSyp801y5sJmfOEMvGdQr8tGKDkQA9PfU4weN7ZJxyPGYaXmqIRUE?width=500&height=315&cropmode=none" style={{height: "9rem"}} alt="" />
              </div>




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">About</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">Contact</a>
                </h6>
              </div>

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">ValueAd</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">Careers</a>
                </h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">Terms of Use</a>
                </h6>
                <h6 className="text-capitalize fw-bold mb-3">
                  <a href="#" className="text-decoration-none link-dark">Privacy Policy</a>
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
                Copyright © 2022 Autring Pvt. Ltd. All rights reserved.
              </div>
              {/* Grid column */}


              <div className="col-md-4 col-lg-4 text-sm-center">

                <a href="https://www.facebook.com/theautring" target="_blank" className="me-4 text-decoration-none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/theautring/" target="_blank" className="me-4 text-decoration-none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/theautring/" target="_blank" className="me-4 text-decoration-none">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://t.me/theautring" target="_blank" className="me-4 text-decoration-none">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://twitter.com/theautring" target="_blank" className="me-4 text-decoration-none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/c/TheAutring" target="_blank" className="me-4 text-decoration-none">
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
