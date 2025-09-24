import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment 


const Blog = () => {
  const {id} = useParams()

  const [data, setData] = useState(null)

  const fetchBlogData = async ()=>{
    const data = blog_data.find(item => item._id === id)
    setData(data)
  }

  //call the function
  useEffect(()=>{
    fetchBlogData()
  },[])


  return data?(
    <div className='relative'>
      <img src='assets.gradientBackground' alt="" className='absolute -top-50 -z-1 opacity-50' />

 

    <Navbar/>
      
      <div>
        <p>Published on {data.createdAt}</p>
      </div>

      <div></div>


      </div>
  ) : <div>Loading...</div>
}

export default Blog