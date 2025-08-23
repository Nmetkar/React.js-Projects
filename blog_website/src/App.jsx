import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dasboard'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlogs'
import UpdateBlog from './pages/UpdateBlog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Dashboard />} ></Route>
      <Route path="/:ID" element={<BlogDetails />} ></Route>
      <Route path="/create" element={<AddBlog />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/update/:ID" element={<UpdateBlog />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      
     </Routes>
    </BrowserRouter>
  )
}

export default App