import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { fetchProgramList } from '../redux/actions/Actions';
import {  Link, useNavigate, } from 'react-router-dom';

const ProgramCard = (props) => {
    const navigate = useNavigate()
  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">We provides!!!</h6>
                <h1 className="mb-5">Our Programs</h1>
            </div>
            <div className="row g-4">
            {
                props.data.map((eachItem)=>(
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={eachItem.program_id}>
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={`img/programs/${eachItem.program_name.toLowerCase().replaceAll(" ", "")}.jpg`} alt={eachItem.program_name.toLowerCase()} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <Link className="btn btn-sm-square btn-primary mx-1" to={`/programDetail/${eachItem.program_id}`}>
                                    <i className="fab fa-searchengin"></i> 
                                </Link>
                                 <Link className="btn btn-sm-square btn-primary mx-1" to="/registerform"><i className="fab fa-amazon-pay"></i></Link>
                               <Link className="btn btn-sm-square btn-primary mx-1" to="/registerform"><i className="fab fa-dochub"></i></Link>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <p className="mb-0">{eachItem.program_name}</p>
                            <p className="mb-0">CATEGORY: {eachItem.category}</p>
                            <h5 className="mb-0">COST: Rs. {eachItem.cost}</h5>
                            
                            <small>AUDIENCE: {eachItem.target_audience}</small>
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

export default ProgramCard