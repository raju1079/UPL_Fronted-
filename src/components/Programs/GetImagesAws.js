import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImagesList } from '../redux/actions/Actions';
import {LIVE_IMG_URL, DUMMY_URL} from '../../data/constants'

const GetImagesAws = () => {

  const allImageList = useSelector((state)=> state.loadImageList.imageList)
  const dispatch = useDispatch()
    const [imagesAWS, setImagesAWS] = useState([]);

    useEffect(() => {
        dispatch(getImagesList())
        setImagesAWS(allImageList)
    }, [dispatch,allImageList]);

    const imgURL = LIVE_IMG_URL;

  //  console.log('images',imagesAWS)
  return (
    <div>
        <h3>Get images AWS</h3>
        
      <div>
      {
              imagesAWS.map((eachItem,index)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp courseslist-wrapper" data-wow-delay="0.3s" key={index}>
                    <div className="team-item h-100">
                        <div className="hover-container">
                        <img className="img-fluid" src={`${imgURL}/${eachItem}`} alt={`${imgURL}/${eachItem}`} />
                      </div>
                    </div>
                </div>
              ))
            }
      </div>
       
    </div>
  )
}

export default GetImagesAws