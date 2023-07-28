import React, { useEffect, useState } from 'react'

const Benifits = (props) => {
    
    const[benifitList,setBenifitList]= useState([])

    useEffect(()=>{
        const listingArray = props?.data.split(';')
        setBenifitList(listingArray)
    },[])
    //console.log('points are',props?.currentProgram)
  return (
    <div>
      <ul className="list-group mx-auto card-wrapper">
      <h3>Benifits</h3>
      {
        benifitList?.map((eachPoint,index)=>(
        <div className="list-group-item" key={index}>
            <div className="d-inline-flex align-items-center justify-content-center text-white rounded-circle m-1 me-2 bullet-wrapper">
                <i className="fas fa-gem fa-sm"></i>
            </div>
            {eachPoint}
        </div>  
        ))
    } 
    <button className="btn btn-danger w-25 py-2 mx-3 top-0 end-0 mt-2 me-2 rounded-pill" onClick={props.onClick}>Download Syllabus</button>
    </ul>
    <div className='course-detail-downarrow'>
        <i className='fa fa-solid fa-arrow-down'></i>
    </div>
    </div>
  )
}

export default Benifits
