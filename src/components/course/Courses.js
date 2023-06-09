import React, { useEffect, useState } from 'react'
import { fetchCourseList } from '../redux/actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import { Assessment, Assignment } from '@mui/icons-material'


const Courses = () => {
    const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [courses,setCourses] = useState('')
    useEffect(()=>{
        dispatch(fetchCourseList())
     },  [dispatch])

  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Look out here</h6>
                <h1 className="mb-5">Our Courses</h1>
            </div>
            
            <div className="row g-4">
            {
              fetchCourses.map((eachItem)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp coursesWrap" data-wow-delay="0.7s" key={eachItem.course_id}>
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            {/* <img className="img-fluid" src='/img/courses/frontenddeveloperin(reactorangular).png' alt={eachItem.course_name.replaceAll(" ", "")} /> */}
                            <Avatar >
                            <Assignment />
                            </Avatar>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <Link className="btn btn-sm-square btn-primary mx-1" to={`/courses/${eachItem.course_id}`}><i className="fab fa-readme"></i></Link>
                                 <Link className="btn btn-sm-square btn-primary mx-1" to={"/registerform"}><i className="fab fa-dochub"></i></Link>
                               {/* <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a> */}
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">
                            <Link  to={`/courses/${eachItem.course_id}`}>
                                {eachItem.course_name}
                            </Link>
                            </h5>
                           {/*  <small>Designation</small> */}
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

export default Courses