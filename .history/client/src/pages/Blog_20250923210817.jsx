import React from 'react'
import {useParams} from 'react-router-dom'

const Blog = () => {
  const {id} = useParams()

  const [data, setData] = useState(null)

  const fetchBlogData = async ()=>


  return (
    <div>
      <h1>Blog</h1>
      </div>
  )
}

export default Blog