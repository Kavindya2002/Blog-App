import React from 'react'
import { assets } from '../../assets/assets'

// The component receives a blog item, index, and fetchBlogs function from the parent
const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { _id, title, createdAt, isPublished } = blog
  const blogDate = new Date(createdAt)

  // Function to handle publish/unpublish toggle
  const handlePublishToggle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${_id}/togglePublish`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        alert(`Blog ${isPublished ? 'Unpublished' : 'Published'} successfully!`)
        fetchBlogs() // Refresh blog list after update
      } else {
        console.error('Failed to toggle publish status')
      }
    } catch (error) {
      console.error('Error toggling publish status:', error)
    }
  }

  // Function to handle blog delete
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?')
    if (!confirmDelete) return

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${_id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('Blog deleted successfully!')
        fetchBlogs() // Refresh blog list
      } else {
        console.error('Failed to delete blog')
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
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
          onClick={handleDelete}
          src={assets.cross_icon}
          className='w-8 hover:scale-110 transition-all cursor-pointer'
          alt="delete"
        />
      </td>
    </tr>
  )
}

export default BlogTableItem
