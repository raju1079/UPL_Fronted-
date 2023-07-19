import React from 'react'
import { Link } from 'react-router-dom'

const HeroPromotionContent = (props) => {
  return (
    <>
         <div className='hero-img-section'>
            <div className='hero-img-wrapper'>
                {
                    props.data.map((each,index)=>(
                        <div key={each.event_id}> 
                            {/* <img className="img-fluid" src="img/hero/hero5.jpg" alt="" /> */}
                            <div className="d-flex align-items-center pt-5 pb-5">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">{each.event_text}</h5>
                                        <h1 className="display-6 text-white animated slideInDown"> {each.event_heading} </h1>
                                        <p className="fs-5 text-white mb-4 pb-2"> {each.description} </p>
                                        <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft border-radius-btn">Register</Link>
                                        <Link to="/login" className="btn btn-primary py-md-3 px-md-5 animated slideInRight border-radius-btn">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    ))
                }
            </div>
        </div>      
    </>
  )
}

export default HeroPromotionContent
