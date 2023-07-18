import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import { fetchCourseList } from '../redux/actions/Actions';
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
const TrendingCourses = () => {
    const fetchCourses = useSelector((state)=> state.fetchAllCourses.courses)
    const [item, setItem] = useState([]);
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCourseList())
    setItem(fetchCourses)
    
  }, [ dispatch, item,fetchCourses]);

  //console.log('courses', item.slice(0,10))

  return (
    <div className="trending-courses mt-5 bg-light">
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="">
         <div className='row align-items-center'>
            <div className='col-lg-3'>
                <div className="text-center">
                    <h1>Trending Courses</h1>
                </div>
            </div>
            <div className='col-lg-9'>
            <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
          >
            {item.map((eachItem) => (
              <div className="trend-course-item testimonial-item text-center" key={eachItem.course_id}>
                <img
                  className=" "
                  src={`/img/courses/all/${eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")}.png`} 
                  alt={eachItem.course_name.replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")} 
                />
                {/* <h5 className="mb-0">{eachItem.course_name}</h5> */}
              </div>
            ))}
          </Carousel>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCourses