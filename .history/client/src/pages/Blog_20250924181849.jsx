import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'


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
      
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg tru'>{data.subTitle}</h2>
        <p></p>
      </div>

      <div></div>


      </div>
  ) : <div>Loading...</div>
}

export default Blog