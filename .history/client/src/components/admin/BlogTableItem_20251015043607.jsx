import React from 'react'

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt)
  return (
    <div>
        <tr>
            
        </tr>
    </div>
  )
}

export default BlogTableItem