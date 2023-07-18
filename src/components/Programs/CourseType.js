import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import { fetchCourseList } from '../redux/actions/Actions';
import { Link } from 'react-router-dom';
import jsondata from '../../data/data.json'

const CourseType = () => {
    const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(jsondata.FlexibleTime)
    
  }, [setItem]);

  //console.log('courses', item)

  return (
    <div className="trending-courses mt-5">
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Go with your Flexible Timings</h6>
                <h3 className="mb-5">Choose Yours</h3>
            </div>
            <div className="row g-4">
            {
                item.map((eachItem)=>(
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={eachItem.course_type_id}>
                    <div className="all-program-card team-item h-100">
                        <div className="p-4">
                            <h5 className="mb-0 program-title">{eachItem.course_type_name}</h5>
                            <Link className="btn btn-danger mx-1 mt-3 btn-rounder-bor" >
                                Explore Course
                            </Link>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseType