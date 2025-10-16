import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      <img src={assets.lo} alt="" />
    </div>
    </>
   
  )
}

export default Layout