import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowTopbar = ({children}) => {
    const location = useLocation()
    const [showTopBar, setShowTopBar] = useState(false)

    useEffect(()=>{
        if(location.pathname === "/welcome"){
            setShowTopBar(true)
        }else if( location.pathname.startsWith("/auth")){
           setShowTopBar(true)
        }
        else{
            setShowTopBar(false)
        }
    }, [location])

  return (
    <div>
         { showTopBar && children}          
    </div>
  )
}

export default ShowTopbar
