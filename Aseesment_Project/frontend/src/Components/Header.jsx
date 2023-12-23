import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
  
    <div className='HeaderContainer'>
        <Link to="/" className='Headerbtn'>View Webinar</Link>
        <span className='webinar'> Webinars </span>
        <Link to="/create" className='Headerbtn'>Add Webinar</Link>
    </div>

 

  )
}

export default Header
