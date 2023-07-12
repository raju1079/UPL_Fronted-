import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import jsondata from '../../data/data.json'
import { useDispatch, useSelector } from "react-redux";
import { fetchProgramList } from "../redux/actions/Actions";

const Navbar = () => {
    const fetchPrograms = useSelector((state)=> state.fetchAllPrograms.programs)
    const dispatch = useDispatch()
    const [programs, setPrograms] = useState([])
  useEffect(()=>{
    dispatch(fetchProgramList())
    //setPrograms(jsondata.Programs)
    }, [dispatch])
//console.log('menus loaded from DB',fetchPrograms)
  return (
    <div className="fixed-top">
    <nav className="navbar navbar-expand-lg bg-white navbar-light pb-3">
        <Link to={"/"} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src='/img/upllogo.png' alt='unlimited power of learning' />
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/"} className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <div className="nav-item dropdown">
                    <Link to={"/programs"} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Programs</Link>
                    <div className="dropdown-menu fade-down m-0">
                        <Link to={"/programs"} className="dropdown-item" >All Programs</Link>
                    {
                        fetchPrograms.map((eachItem)=>(
                        
                            <Link to={`/programDetail/${eachItem.program_id}`} className="dropdown-item" key={eachItem.program_id}>{eachItem.program_name}</Link>
                        
                        ))
                    }
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                <Link to="/login" className="nav-item nav-link">Login</Link>
            </div>
            <Link to={"/registerform"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Enroll Now<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar