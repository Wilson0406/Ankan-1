import React from 'react'
import BlogComponent from './BlogComponent'
import Navbar from '../Navbar/Navbar'
import Header from '../wiliam/header/Header'
import Footer from  '../paros/components/Footer'

function Blog() {
  return (<>
   <Header></Header>
    <Navbar></Navbar>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <BlogComponent></BlogComponent>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <BlogComponent></BlogComponent>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <BlogComponent></BlogComponent>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <BlogComponent></BlogComponent>
        </div>
      </div>


    </div>

    <Footer></Footer>
  </>
  )
}

export default Blog