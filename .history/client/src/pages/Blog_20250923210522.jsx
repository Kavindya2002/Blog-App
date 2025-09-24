import React from 'react'
import {useParams} from 'react-router-dom'

const Blog = () => {
  const {_id} = useParams()
  return (
    <div>
      <h1>Blog</h1>
      </div>
  )
}

export default Blog