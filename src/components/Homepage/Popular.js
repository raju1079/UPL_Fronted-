import React, { useEffect, useState } from 'react'
import jsondata from '../../data/data.json'
import { Link } from 'react-router-dom'

const Popular = () => {
    const [item, setItem] = useState([])
    useEffect(()=>{
        setItem(jsondata.PopularCourses)
    })
  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
                {
                    item.map((eachItem)=>(
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={eachItem.courseid}>
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden popularimg-wrapper">
                            <img className="img-fluid" src={`/img/courses/${eachItem?.coursename.replaceAll("(", "")}.png`} alt={eachItem?.coursename} />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <Link to="/programs" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>Read More</Link>
                                <Link to="/registerform" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "0 30px 30px 0"}}>Join Now</Link>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">Rs. {eachItem.cost}</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">{eachItem.coursename}</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{eachItem.instructor}</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{eachItem.duration}</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div>
                    </div>
                </div>
                    ))
                }
                
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Popular