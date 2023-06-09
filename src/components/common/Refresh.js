import React from 'react'
import { useLocation } from 'react-router-dom'

const Refresh = () => {
    const location = useLocation()
    const path = location.pathname
    if(path === "/"){
        function LoadOnce() {
            if (localStorage.getItem('executed') == 'false') {
            window.location.reload()
            localStorage.setItem('executed', true)
            }
            }
            
            setTimeout(function () {
            LoadOnce()
            }, 100)
    }else{
        localStorage.setItem('executed', false)
    }
  return (
    <>

    </>
  )
}

export default Refresh