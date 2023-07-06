import React from 'react'
import { Link } from 'react-router-dom'

const SubHero = () => {
  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header subHero">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="text-white animated slideInDown">Our Popular Programs !!!</h3>
                        <h6 className="card-subtitle mb-2">Join with Us</h6>
                        <p className="card-text">UNLIMITED POWER FULL LEARNING (UPL) aims to solve the challenges and minimize the gap between students with IT industries’expectations.</p>
                        <p className="card-text">Learn with Live experience and career values.</p>
                        <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft">Apply Now</Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    </>
  )
}

export default SubHero
