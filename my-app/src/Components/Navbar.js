import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
        <ul className="nav-ul">
            
            
            <li className="nav-item"><Link className="nav-link" to="/">INDIA</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/international">INTERNATIONAL</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/political">POLITICAL</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/governance">GOVERNANCE</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/economy">ECONOMY</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">SPORTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">SCIENCE&TECH</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>

            <li className=" nav-item nav-dropdown">
                <a href="#">GET INVOVED</a>
                <ul className="dropdown-ul">
                    <li className="dropdown-items"><a href='#'>HealthCare</a></li>
                    <li className="dropdown-items"><a href='#'>Eduction</a></li>
                    <li className="dropdown-items"><a href='#'>Social Impact</a></li>
                    <li className="dropdown-items"><a href='#'>Empowerment</a></li>
                    <li className="dropdown-items"><a href='#'>Environment</a></li>
                    <li className="dropdown-items"><a href='#'>Fatafat News</a></li>
                    <li className="dropdown-items"><a href='#'>Autring's Blog</a></li>
                    <li className="dropdown-items"><a href='#'>Career</a></li>
                    <li className="dropdown-items"><a href='#'>Connect with us</a></li>
                    <li className="dropdown-items"><a href='#'>support to Journalism</a></li>
                </ul>
            </li>
            <li><a href="#" className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></a></li>
        </ul>
    </div>
    
  )
}

export default Navbar