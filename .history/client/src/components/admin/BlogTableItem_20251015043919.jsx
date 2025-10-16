import React from 'react'

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt)
  return (
    <tr className='border-y border-gray-300'>
        th

    </tr>
   
  )
}

export default BlogTableItem