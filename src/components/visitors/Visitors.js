import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVisitors } from '../redux/actions/Actions';

const Visitors = () => {
    const fetchVisitors = useSelector((state)=> state.getAllVisitors.visitors)
    const { isAuthenticated, user } = useSelector((state) => state.auth);
  const userId = user?.role_id
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch((getVisitors()))
     },  [dispatch])
    
     console.log('students from db', fetchVisitors)

     
  return (
    <>
    { 
        userId === 3 ? 
        (<>
        <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchVisitors.map((eachItem, index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>Students</td>
                            <td>{eachItem.email}</td>
                            <td>{eachItem.phone_number}</td>
                            <td>Registered</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </>) : ""
    }
        {/* <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Visitors Reports</h6>
                <h1 className="mb-5">Status Reports</h1>
            </div>
            <div className='row'>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchVisitors.map((eachItem)=>(
                            <tr key={eachItem.program_id}>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
            
        </div>
    </div> */}
    </>
  )
}

export default Visitors