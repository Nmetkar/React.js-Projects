import React, { useEffect, useState } from 'react'
import useBlog from '../Hooks/useBlog';

const Dasboard = () => {
  const [blogs, setBlogs] = useState([]);
  const {getBlogs} = useBlog();

  function fetchData(){
      const getBlogsLocal = getBlogs();
      setBlogs(getBlogsLocal);
  }

  useEffect(() => {
      fetchData();
  }, [])

  return (
    <div>
       DASHBOARD
       {blogs.length > 0 ? (<p>List of blogs</p>) : (<p>No blog yet</p>)}
    </div>
  )
}

export default Dasboard