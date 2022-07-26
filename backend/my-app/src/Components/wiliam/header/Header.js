import React from 'react'
import './header.css'
const date = new Date().toDateString();

function Header() {
  return (
    <>  
      
      <header className="text-center text-lg-start text-muted">
<section className="">
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-4">
    
        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-3">
    
        <a href="https://www.facebook.com/theautring" target="_blank" className="text-decoration-none">
                <i className="fab fa-facebook-f circle"></i>
              </a>
              <a href="https://www.instagram.com/theautring/" target="_blank" className="text-decoration-none">
                <i className="fab fa-instagram circle"></i>
              </a>
              <a href="https://www.linkedin.com/company/theautring/" className="text-decoration-none">
                <i className="fab fa-linkedin-in circle"></i>
              </a>
              <a href="https://t.me/theautring" target="_blank" className="text-decoration-none">
                <i className="fab fa-telegram-plane circle"></i>
              </a>
              <a href="https://twitter.com/theautring" target="_blank" className="text-decoration-none">
                <i className="fab fa-twitter circle"></i>
              </a>
              <a href="https://www.youtube.com/c/TheAutring" target="_blank" className="text-decoration-none">
                <i className="fab fa-youtube circle"></i>
              </a>
              <p id='date'>{date}</p>
        </div>


        <div className="col-md-4 col-lg-4 text-md-center col-xl-4 mx-auto mb-3">
            <img src="https://dsm01pap006files.storage.live.com/y4m-jxR7yslFbbVqtOsjFEuZ19kN2AnYXh5awmJEcWoC3NFffS4DCYa7SAXhTbTFHXEnNX6vosPLVhsfH2xk_XgYLHy1hFP2P83zz5NTJJ7kc_eTNcYENpkVMYCFy22AhIQuLpuOlhqoYwxSyp801y5sJmfOEMvGdQr8tGKDkQA9PfU4weN7ZJxyPGYaXmqIRUE?width=500&height=315&cropmode=none" style={{height : "9rem"}} alt=""/>
        </div>

        
        <div className="col-md-4 col-lg-4 text-md-end col-xl-4 mx-auto mb-3">
            <button type="button" className="btn support" style={{"font-weight": "600"}}>Support for Journalism</button>
        </div>

      </div>
      
    </div>
  </section>

</header>

    </>
  )
}

export default Header