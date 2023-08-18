import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="container-xxl py-5" id='about'>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/aboutus.jpg" alt="" style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to UPL</h1>
                    <p className="mb-4">UNLIMITED POWER FULL LEARNING (UPL) aims to solve the challenges
and minimize the gap between students with IT industries’ expectations. This organization is built by a strong team who are having good academic and industry experience of more than two decades. The founder of this experience G.D. Mallikarjuna has 20+ plus started as a technologist having diverse experience in the education sector as Trainer and Developer.</p>
                    <p className="mb-4">Since 2010, we have worked closely with our partners in implementing progressive solutions for the region’s learning community that has directly contributed to the programs like:</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i> Certification Courses, Online Educational & Reform Programs.</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i> Career Bridge, Skill Development, Job Creation & Placement Assistance Support.</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i> Industry Readiness, Coding Bootcamp, In-House Project Management</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Mission: Learn with Live experience and career values.</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Vision: At UPL@SNIPE, we make the best experience in technology learning with career guidance for their life journey</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Issue Certificate</p>
                        </div>
                    </div>
                    <Link className="btn btn-primary py-3 px-5 mt-2" to="/programs">Read More</Link>
                </div>
            </div>
        </div>
    </div>      
    </>
  )
}

export default About
