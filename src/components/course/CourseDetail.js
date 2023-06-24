import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SubHero from '../common/SubHero'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesById } from '../redux/actions/Actions';

const CourseDetail = () => {
    const { id } = useParams()
    const fetchCourseById = useSelector((state)=> state.fetchCourseById.courseById)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("course id", id)

    const onDownload = () => {
      //navigate('/download')
      navigate('/download', {state: {interestedCourse}})
    };

    useEffect(()=>{
      dispatch(fetchCoursesById(id))
    }, [])
    //console.log("Course Details", fetchCourseById)
    const selectedCourse = fetchCourseById[0]
    const interestedCourse = selectedCourse?.course_name
    //console.log("interestedCourse Details", interestedCourse)

  return (
    <>
      <SubHero />
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Details</h6>
                <h1 className="mb-5">{selectedCourse?.course_name}</h1>
            </div>
            <div className='row'>
            <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan={3}>
                Details of the Course: {selectedCourse?.course_name}
                <button className="btn btn-primary py-2 mx-3 top-0 end-0 mt-2 me-2" onClick={onDownload}>Download Syllabus</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Unit 01</th>
              <td>Core Java UNIT_001 : The project, Domain, Platform, Product, Technology, Java Tech Stack, Process, 03 Hrs Development Environment, Java Introduction</td>
              
            </tr>
            <tr>
              <th scope="row">Unit 01</th>
              <td>Core Java UNIT_001 : The project, Domain, Platform, Product, Technology, Java Tech Stack, Process, 03 Hrs Development Environment, Java Introduction</td>
              
            </tr>
            <tr>
              <th scope="row">Unit 01</th>
              <td>Core Java UNIT_001 : The project, Domain, Platform, Product, Technology, Java Tech Stack, Process, 03 Hrs Development Environment, Java Introduction</td>
              
            </tr>
            
          </tbody>
        </table>
            </div>
            </div>
            </div>
    </>
  )
}

export default CourseDetail
