import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <NavLink>
            <img src={assets.home_icon} alt="" className='min-' />
        </NavLink>
    </div>
  )
}

export default Sidebar