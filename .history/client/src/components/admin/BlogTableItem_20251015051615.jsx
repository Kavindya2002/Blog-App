import React from 'react'
import { assets } from '../../assets/assets'

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished } = blog
  const blogDate = new Date(createdAt)

  // ✅ This will run when the Publish/Unpublish button is clicked
  const handlePublishToggle = async () => {
    console.log("Toggling publish state for:", blog._id)

    // Simulate calling backend or doing something here...
    // Then refresh the blog list
    await fetchBlogs()
  }

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{blogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${isPublished ? 'text-green-600' : 'text-orange-700'}`}>
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>

      <td className='px-2 py-4 flex text-xs gap-3'>
        <button
          onClick={handlePublishToggle}
          className='border px-2 py-0.5 mt-1 rounded cursor-pointer hover:bg-gray-100 transition-all'
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>

        <img
          src={assets.cross_icon}
          className='w-8 hover:scale-110 transition-all cursor-pointer'
          alt="delete"
        />
      </td>
    </tr>
  )
}

export default BlogTableItem
