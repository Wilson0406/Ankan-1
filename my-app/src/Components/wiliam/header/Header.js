import React from 'react'
import './header.css'

function Header() {
  return (
    <>  
      
      <header class="text-center text-lg-start text-muted">
<section class="">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-4">
    
        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-3">
    
          <a href="/" class="text-decoration-none">
            <i class="fab fa-facebook-f circle"></i>
          </a>
          <a href="/" class="text-decoration-none">
            <i class="fab fa-instagram circle"></i>
          </a>
          <a href="/" class="text-decoration-none">
            <i class="fab fa-linkedin-in circle"></i>
          </a>
          <a href="/" class="text-decoration-none">
            <i class="fab fa-telegram-plane circle"></i>
          </a>
          <a href="/" class="text-decoration-none">
            <i class="fab fa-twitter circle"></i>
          </a>
          <a href="/" class="text-decoration-none">
            <i class="fab fa-youtube circle"></i>
          </a>
        </div>


        <div class="col-md-4 col-lg-4 text-md-center col-xl-4 mx-auto mb-3">
            <img src="./icon/logo.png" style={{height : "9rem"}} alt=""/>
        </div>

        
        <div class="col-md-4 col-lg-4 text-md-end col-xl-4 mx-auto mb-3">
            <button type="button" class="btn support" style={{"font-weight": "600"}}>Support for Journalism</button>
        </div>

      </div>
      
    </div>
  </section>

</header>

    </>
  )
}

export default Header