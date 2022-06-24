import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Register() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
   const navigate=useNavigate();

    const apiCall = () => {
        if (password === rePassword) {
            axios.post('/user_signup', {
                fname, lname, email, password
            }).then((res) => {
                if(res.status===200){
                    alert('Success login now')
                    navigate('/user_login')
                }  
            }).catch(() => {
                alert('invalid check details or email already registed' )
            })
        } else {
            alert("Wrong Password!")

        }
    }

    
    return (
        <>
            <div class="container">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">

                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block ">
                                
                            <Link to="/" style={{
                                            fontSize: "40px"
                                        }}> Go back to Home </Link>
                            </div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user" onClick={(e) => {
                                        e.preventDefault();
                                    }}>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user non-empty" id="exampleFirstName"
                                                    placeholder="First Name" onChange={(e) => {
                                                        setFname(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user non-empty" id="exampleLastName"
                                                    placeholder="Last Name" onChange={(e) => {
                                                        setLname(e.target.value);
                                                    }} />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user non-empty" id="exampleInputEmail"
                                                placeholder="Email Address" onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }} />
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user non-empty"
                                                    id="exampleInputPassword" placeholder="Password" onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }} />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user non-empty"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" onChange={(e) => {
                                                        setRePassword(e.target.value);
                                                    }} />
                                            </div>
                                        </div>
                                        <a href="login.html" class="btn btn-primary btn-user btn-block non-empty" onClick={() => {
                                           
                                           apiCall();
                                          
                                        }}>
                                            Register Account
                                        </a>
                                        <hr />
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <Link class="small" to="/user_login">Already have an account? Login!</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link class="small" to="/">go to home!</Link>
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

export default Register