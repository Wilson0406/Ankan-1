import React, { useState, useEffect } from 'react'
import './navbar.css'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'


export default function Navbar() {

  const [userActive, setUserActive] = useState(false)
  const [profile,setProfile]=useState();
  const navigate = useNavigate();

  let handleCrossClick = () => {
    let navUl = document.getElementById("nav-ul");
    if (window.screen.width <= 900) {
      navUl.style.display = "none";
    }
    else {
      navUl.style.display = "flex";
    }

  }

  let handleHamburgerClick = () => {
    let navUl = document.getElementById("nav-ul");
    navUl.style.display = "flex";
  }


  const check_user = () => {
    axios.get('/user_active').then((response) => {
      if (response.status === 200) {
        setUserActive(true)
       

      } else {
        setUserActive(false)
        
      }

    }).catch((e) => {
      setUserActive(false)
      
    })
  }
 const user_logout=()=>{
  navigate('/international')
    axios.post('/user_logout').then((response)=>{
       if(response.status===200){
        navigate('/');
       }

    }).catch((e)=>{
      
        navigate('/');
      
    })
 
 }

 const user_details=()=>{
  
   axios.get('/user_active').then((res)=>{
    if(res.status===200){

       setProfile(res.data.fname);
    }
        
   }).catch(()=>{
        
   })

}
  useEffect(() => {
    check_user();
    user_details();

  }, [])

  return (
    <div className="navbar-a">
      <div className='mobile-nav'>
        <img className='logo' src="./icon/logo.svg" alt="" style={{ margin: "auto" }} />
        <span className="nav-icons">
          <i className="fa-solid fa-bars" onClick={handleHamburgerClick}></i>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <ul className="nav-ul" id="nav-ul">
        <li className="nav-item"><Link className="nav-link" to="/">INDIA</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/international">INTERNATIONAL</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/political">POLITICAL</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/governance">GOVERNANCE</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/economy">ECONOMY</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">SPORTS</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">SCIENCE&TECH</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
        <li className=" nav-item nav-dropdown">
          GET INVOVED
          <ul className="dropdown-ul">
            <li className="dropdown-items"><a href='/'>HealthCare</a></li>
            <li className="dropdown-items"><a href='/'>Eduction</a></li>
            <li className="dropdown-items"><a href='/'>Social Impact</a></li>
            <li className="dropdown-items"><a href='/'>Empowerment</a></li>
            <li className="dropdown-items"><a href='/'>Environment</a></li>
            <li className="dropdown-items"><a href='/'>Fatafat News</a></li>
            <li className="dropdown-items dropdown-last"><a href='/'>Autring's Blog</a></li>
            <li className="dropdown-items dropdown-last"><a href='/'>Career</a></li>
            <li className="dropdown-items dropdown-last"><a href='/'>Connect with us</a></li>
            <li className="dropdown-items dropdown-last"><a href='/'>support to Journalism</a></li>
          </ul>
        </li>

        <li><a href="#" className="nav-item search_btn"><i className="fa-solid fa-magnifying-glass"></i></a></li>
        <li className='user'>
        {profile}
        <i className="fa-solid fa-user"></i>

          {
            userActive ? (
              <ul className='login'>

                <li ><Link className='sign-in' to="/user_logout" onClick={()=>{
                  user_logout()

                }} >Logout</Link></li>
              </ul>
              
            ) : (
              <ul className='login'>
                <li ><Link className='sign-up' to="/user_login">Sign in</Link></li>
                <li ><Link className='sign-up' to="/user_register">Sign up</Link></li>
                <li><Link className='sign-in' to="/admin_login">Admin</Link></li>
              </ul>
            )
          }

        </li>
        <li>
        {
          userActive?(
            <ul className='mobile-login'>
            
            <li><Link className='sign-in' to="/user_logout" onClick={()=>{
               user_logout();
            }}>Logout</Link></li>
          </ul>
            
            ):(
            <ul className='mobile-login'>
            <li ><Link className='sign-up' to="/user_login">Sign in</Link></li>
            <li><Link className='sign-in' to="/user_register">Sign up</Link></li>
            <li><Link className='sign-up' to="/admin_login" >Admin</Link></li>
          </ul>
          )
        }
          
        </li>
        <li><i className="fa-solid fa-x" id='fa-x' onClick={handleCrossClick}></i></li>
        <li className='nav-item ind nav-ind'><h3>Support for Journalism</h3></li>
      </ul>
    </div>

  )
}