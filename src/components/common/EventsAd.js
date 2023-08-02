import React from 'react'
import { Link } from 'react-router-dom'

const EventsAd = () => {
    const eventsAd = ['Woman Empowerment']
  return (
    <div className='events-strip pt-3'>
        <div className='row m-0 justify-content-center text-center bg-warning'>
            {
                eventsAd.map((eachEvent,index)=>(
                    <div className='col-lg-4  p-2' key={index}>
                        <Link className='strip-content' to={`latestEvent/${index}`}> 
                            <marquee>{ eachEvent}</marquee>
                        </Link>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default EventsAd
