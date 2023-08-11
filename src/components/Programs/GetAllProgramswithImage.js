import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GetAllProgramswithImage = () => {
  
    const [imagesAWS, setImagesAWS] = useState([]);

    useEffect(() => {
        fetchImagesAWS();
    }, []);

    const fetchImagesAWS = async () => {
        try {
        const response = await axios.get('http://localhost:8000/api/awsimage/category'); 
        setImagesAWS(response.data);
        } catch (error) {
        console.log(error);
        }
    };
    console.log('images',imagesAWS)
    const imgURL = 'https://upl-snipe.ap-south-1.linodeobjects.com';
  return (
    <div>
        <h3>Get images AWS</h3>
      
      <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Our Execellent Services!!!</h6>
                <h1 className="mb-5">Our Programs</h1>
            </div>
            <div className="row g-4">
            {
                imagesAWS.map((eachItem,index)=>(
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                    <div className="all-program-card team-item h-100">
                        <div className="overflow-hidden">
                        <img className="img-fluid" src={`${imgURL}/${eachItem.file_path}/${eachItem.file_name}`} alt={`${imgURL}/${eachItem.file_path}/${eachItem.file_name}`} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                            <div className="d-flex justify-content-center pt-2 px-1">
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
                            <Link className="btn btn-danger mx-1 mt-3 btn-rounder-bor" to={`/programDetailImage/${eachItem.program_id}`}>
                                Explore Program
                            </Link>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default GetAllProgramswithImage