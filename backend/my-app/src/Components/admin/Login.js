import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [profile,setProfile]=useState();
    const navigate=useNavigate();
    const apiCall=()=>{
        axios.post('/user_signin',{
            email,password
        }).then((res)=>{
             if(res.status===200) navigate('/')
        }).catch(()=>{
            alert('invalid check details' )
        })
    }




    return (
        <>
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block">
                                    
                                        <Link to="/" style={{
                                            fontSize: "40px"
                                        }}> Go back to Home </Link>
                                    
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onClick={(e)=>{
                                                e.preventDefault();
                                            }}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." onChange={(e)=>{
                                                        setEmail(e.target.value);
                                                    }} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" onChange={(e)=>{
                                                        setPassword(e.target.value);
                                                    }} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <a href="index.html" className="btn btn-primary btn-user btn-block" onClick={()=>{
                                                    apiCall()
                                                    
                                                }}>
                                                    Login
                                                </a>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/user_register">Create an Account!</Link>

                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/">go to home!</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login