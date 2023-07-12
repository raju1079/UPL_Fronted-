import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TextfieldCustom from './TextfieldCustom';
import { Container, Grid, Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import { register } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MentorshipProgramForm from './MentorshipProgramForm';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const Hero = () => {
    
  return (
    <>
    <div className="container-fluid p-0 homeHero">
    <Carousel
    responsive={responsive}
    autoPlay={true}
    swipeable={true}
    draggable={true}
    showDots={true}
    infinite={true}
    partialVisible={false}
    dotListClass="custom-dot-list-style"
    removeArrowOnDeviceType={["tablet", "mobile"]} >  
          <div className='hero-common-bg'>
                <div className='row'>
                    <div className='col-lg-8 p-0'>
                        <div className='hero-img-section'>
                            <div className='hero-img-wrapper'>
                                {/* <img className="img-fluid" src="img/hero/hero5.jpg" alt="" /> */}
                                <div className="d-flex align-items-center pt-5 pb-5">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Learn how to achieve your career goals</h5>
                                            <h1 className="display-6 text-white animated slideInDown">with online certificate programs & How learners like you are achieving their goals</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Get job-ready for an in-demand career | Expand your career opportunities with Java, Python & DevOps!</p>
                                            <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft border-radius-btn">Register</Link>
                                            <Link to="/login" className="btn btn-primary py-md-3 px-md-5 animated slideInRight border-radius-btn">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 p-0'>
                        <div className='hero-register-form-wrapper'>
                            <MentorshipProgramForm />                        
                        </div>
                    </div>
                
                </div>
            </div>
      </Carousel>        
    </div>      
    </>
  )
}

export default Hero
