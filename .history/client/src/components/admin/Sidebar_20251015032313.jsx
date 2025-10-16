import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <NavLink>
            <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
            <p className='hi'></p>
        </NavLink>
    </div>
  )
}

export default Sidebar