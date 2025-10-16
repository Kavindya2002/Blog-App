import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={()=> navigate('/')} />
      <button onClick={lo}></button>
    </div>
    </>
   
  )
}

export default Layout