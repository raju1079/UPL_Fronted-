import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Hero = () => {
  return (
    <>
    <div className="container-fluid p-0 homeHero">
    <OwlCarousel items={1}  
        autoplay ={true}
          className="owl-theme"  
          loop  
          dots={true}
          margin={8} >  
            <div className="position-relative">
                {/* <img className="img-fluid" src="img/hero/1.png" alt="" /> */}
                <div className='heroImgBg slideone'></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" >
                    <div className="container" style={{background: "rgba(24, 29, 56, .7)"}}>
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft">Register</Link>
                                <Link to="/login" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
               {/*  <img className="img-fluid" src="img/hero/3.png" alt="" /> */}
               <div className='heroImgBg slidetwo'></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end" >
                    <div className="container" style={{background: "rgba(24, 29, 56, .7)"}}>
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft">Register</Link>
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
