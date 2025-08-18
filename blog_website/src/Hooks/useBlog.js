import React, { useState } from 'react'

const useBlog = () => {
     const [blogs, useBlogs] = useState()

    function saveBlog(){
        localStorage.setItem('blog', JSON.stringify(blogs))
    }

    function getBlogs(){
       return JSON.parse(localStorage.getItem(blogs))
    }
    saveBlog()
  return (saveBlog, getBlogs, blogs )
}

export default useBlog