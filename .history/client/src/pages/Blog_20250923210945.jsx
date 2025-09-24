import React from 'react'
import {useParams} from 'react-router-dom'
import { blog_data } from '../assets/assets'
import 

const Blog = () => {
  const {id} = useParams()

  const [data, setData] = useState(null)

  const fetchBlogData = async ()=>{
    blog_data.find(item => item._id === id)
  }


  return (
    <div>
      <h1>Blog</h1>
      </div>
  )
}

export default Blog