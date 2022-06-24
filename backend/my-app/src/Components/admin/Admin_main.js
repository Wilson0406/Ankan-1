import ReAdmin_bloact ,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Admin_post from './pages/Admin_post';
import Admin_blog from './pages/Admin_blog';
import User_details from './pages/User_details'





function Admin_main() {
    const [active_content,setActive_content]=useState("dashboard")
    const [profileName,setProfileName]=useState();
    const navigate=useNavigate();
    const check_admin=()=>{
        axios.get('/admin_active').then((res)=>{
             if(res.status===200){
                setProfileName(res.data.fname+" "+res.data.lname)
                navigate('/admin_main')

             }else{
                 navigate('/');
             }
        }).catch(()=>{
            navigate('/');
        })
    }

     const admin_logout=()=>{
         axios.post('/admin_logout').then((response)=>{
            if(response.status===200) navigate('/')
         }).catch((e)=>{
            
         })
     }
    

    useEffect(()=>{
        check_admin();
    },[])

    return (
        <>
            <div id="wrapper">


                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Admin Panel <sup></sup></div>
                    </a>


                    <hr className="sidebar-divider my-0" />


                    <li className="nav-item active">
                        <a className="nav-link" onClick={()=>{
                            setActive_content("dashboard")
                        }} style={{cursor: "pointer"}}>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Interface
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <a className="collapse-item" href="buttons.html">Buttons</a>
                                <a className="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <a className="collapse-item" href="utilities-color.html">Colors</a>
                                <a className="collapse-item" href="utilities-border.html">Borders</a>
                                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                <a className="collapse-item" href="utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Addons
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages" onClick={()=>{
                                setActive_content("admin_post")
                            }} style={{cursor: "pointer"}}>
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Create Post</span>
                            
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="login.html">Login</a>
                                <a className="collapse-item" href="register.html">Register</a>
                                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="404.html">404 Page</a>
                                <a className="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" style={{cursor: "pointer"}} onClick={()=>{
                            setActive_content("admin_blog")
                        }}>
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Create Blog</span></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{
                            setActive_content("users")
                        }} style={{cursor:"pointer"}}>
                            <i className="fas fa-fw fa-table"></i>
                            <span>Users</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{
                            admin_logout();
                        }} style={{cursor:"pointer"}}>
                            <i className="fas fa-fw fa-table"></i>
                            <span>Logout</span></a>
                    </li>


                    <hr className="sidebar-divider d-none d-md-block" />


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>




                </ul>

                <div id="content-wrapper" className="d-flex flex-column">


                    <div id="content">


                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                            {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
               <i className="fa fa-bars"></i>
           </button> */}


                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>


                            <ul className="navbar-nav ml-auto">


                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">


                                        <i className="fas fa-search fa-fw"></i>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>


                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>

                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>

                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw"></i>

                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>

                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>


                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{profileName?(
                                            <>
                                           { profileName.substring(0,15)}
                                            </>
                                        ):(<></>)}...</span>
                                        <img className="img-profile rounded-circle"
                                            src="admin/img/undraw_profile.svg" />
                   
                                    </a>
                                   
                                   
                                </li>
                                

                            </ul>
                            

                        </nav>
{/* ----------------------------- Body -------------------------------- */}
           {/* use switch case */}

           
           {
               active_content==="dashboard"?(<Dashboard></Dashboard>):(<></>)
            
            }
            {
               active_content==="admin_post"?(<Admin_post></Admin_post>):(<></>)
             

            }
            {
               active_content==="admin_blog"?(<Admin_blog></Admin_blog>):(<></>)
             
                
            }

            {
               active_content==="users"?(<User_details></User_details>):(<></>)
             
                
            }

        

{/* ----------------------------------------------------------------------- */}
                        <footer className=" bg-white">
                            <div className="container" style={{marginTop:"10vh"}}>
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>

                    </div>


                </div>



                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin_main