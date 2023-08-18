import React from 'react'
import { Link } from 'react-router-dom'

const SubHeroLeft = (props) => {
    const each = props?.data;
  return (
    <>
    <div className='hero-img-section'>
            <div className='hero-img-wrapper'>
        <div> 
            <div className="d-flex align-items-center pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-start m-0">
                    <div >
                        <h3 className="text-warning text-uppercase mb-3 animated slideInDown">{each?.program_name}</h3>
                        <p className=" text-white animated slideInDown">Course Coverage <br/> {each?.program_coverage} </p>
                        <h3 className="fs-5 text-warning text-uppercase  pb-1"> Outcome</h3><p className=" text-white">{each?.outcome} </p>
                        <h3 className="fs-5 text-warning text-uppercase  pb-2"> Target Audience </h3> <p className=" text-white" > {each?.target_audience} </p>
                        <Link to="/registerform" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft border-radius-btn rounded-pills">Apply now</Link>
                        
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

export default SubHeroLeft
