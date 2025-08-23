import React, { useEffect, useState } from 'react'

const useBlog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const firstTimeFromLocal = JSON.parse(localStorage.getItem('blogs')) || []
    console.log(firstTimeFromLocal)
    setBlogs(firstTimeFromLocal)
  }, [])

  function saveBlog(b) {
    localStorage.setItem('blogs', JSON.stringify(b))
    setBlogs(b)   // ✅ keep React state in sync
  }

  function getBlogs() {
    const data = JSON.parse(localStorage.getItem('blogs')) || []
    return Array.isArray(data) ? data : []
  }

  function addNewBlog(data) {
    console.log("Adding new blog:", data)
    const getFromLocal = getBlogs()
    getFromLocal.push(data)
    saveBlog(getFromLocal)
  }

  function GetBlogByID(ID) {
    const getFromLocal = getBlogs()
    return getFromLocal.find((b) => b.id === ID)
  }

  function deleteBlog(ID) {
    const getFromLocal = getBlogs()
    const blogListAfterDelete = getFromLocal.filter((b) => b.id !== ID)
    saveBlog(blogListAfterDelete)
    return 'Deleted successfully'
  }

  return { saveBlog, getBlogs, blogs, addNewBlog, GetBlogByID, deleteBlog }
}

export default useBlog
