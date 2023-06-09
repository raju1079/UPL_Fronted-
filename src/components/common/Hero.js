import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Hero = () => {
  return (
    <>
    <div className="container-fluid p-0 mb-5">
    <OwlCarousel items={1}  
        autoplay ={true}
          className="owl-theme"  
          loop  
          dots={false}
          margin={8} >  
            <div className="position-relative">
                <img className="img-fluid" src="img/hero-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Learn how to achieve your career goals</h5>
                                <h1 className="display-3 text-white animated slideInDown">with online certificate programs & How learners like you are achieving their goals</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Get job-ready for an in-demand career | Expand your career opportunities with Java, Python & DevOps!</p>
                                <Link to="/registerform" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Register</Link>
                                <Link to="/login" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src="img/hero-3.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Learn how to achieve your career goals</h5>
                                <h1 className="display-3 text-white animated slideInDown">with online certificate programs & How learners like you are achieving their goals</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Get job-ready for an in-demand career | Expand your career opportunities with Java, Python & DevOps!</p>
                                <Link to="/registerform" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Register</Link>
                                <Link to="/login" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
      </OwlCarousel>        
    </div>      
    </>
  )
}

export default Hero
