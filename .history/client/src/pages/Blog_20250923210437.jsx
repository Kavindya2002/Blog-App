import React from 'react'
import {useParams} from 'react-router'
const Blog = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Blog</h1>
      </div>
  )
}

export default Blog