import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopbarUser from './TopbarUser'

const ShowHeader = ({children}) => {
    const location = useLocation()
    const [showHeader, setShowHeader] = useState(false)
    const [showTopBar, setShowTopBar] = useState(false)

    useEffect(()=>{
        if(location.pathname === "/welcome"){
            setShowHeader(false)
            setShowTopBar(true)
        }else if( location.pathname === "/ExecutorDashboard"){
            setShowHeader(false)
            setShowTopBar(true)
        } else{
            setShowHeader(true)
            setShowTopBar(false)
        }
    }, [location])
    
  return (
    <div>
        { showHeader && children}    
        { showTopBar && <TopbarUser />}  
    </div>
  )
}

export default ShowHeader
