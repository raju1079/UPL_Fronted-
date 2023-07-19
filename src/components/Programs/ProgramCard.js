import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { fetchProgramList } from '../redux/actions/Actions';
import {  Link, useNavigate, } from 'react-router-dom';
import TrendingCourses from '../course/TrendingCourses';
import CourseType from './CourseType';

const ProgramCard = (props) => {
    const navigate = useNavigate()
  return (
    <>
    <div className="">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Our Execellent Services!!!</h6>
                <h1 className="mb-5">Our Programs</h1>
            </div>
            <div className="row g-4">
            {
                props.data.map((eachItem)=>(
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={eachItem.program_id}>
                    <div className="all-program-card team-item h-100">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={`img/programs/${eachItem.program_name}.png`} alt={eachItem.program_name.toLowerCase()} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="d-flex justify-content-center pt-2 px-1">
                                {/* <Link className="btn btn-warning mx-1" to={`/programDetail/${eachItem.program_id}`}>
                                    <i className="fab fa-searchengin"></i> 
                                    Explore Program
                                </Link> */}
                                 {/* <Link className="btn btn-sm-square btn-primary mx-1" to="/registerform"><i className="fab fa-amazon-pay"></i></Link>
                               <Link className="btn btn-sm-square btn-primary mx-1" to="/registerform"><i className="fab fa-dochub"></i></Link> */}
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="mb-0 program-title">{eachItem.program_name.toLowerCase()}</h5>
                            <p className="mb-0">CATEGORY: {eachItem.category}</p>
                            <p className="mb-0">COST: Rs. {eachItem.cost}</p>
                            
                            <small>AUDIENCE: {eachItem.target_audience}</small>
                            <div className="list-group list-group-flush mt-3">
                                <Link to={`/programDetail/${eachItem.program_id}`} className="list-group-item list-group-item-action">View All Courses</Link>
                                <Link to='/registerform' className="list-group-item list-group-item-action">Enroll</Link>
                                <Link to='/registerform' className="list-group-item list-group-item-action">Download</Link>
                            </div>
                            <Link className="btn btn-danger mx-1 mt-3 btn-rounder-bor" to={`/programDetail/${eachItem.program_id}`}>
                                Explore Program
                            </Link>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
        <TrendingCourses />
    </div>
    </>
  )
}

export default ProgramCard