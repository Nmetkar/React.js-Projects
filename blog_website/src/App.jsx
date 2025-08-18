
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import  Dashboard from './Pages/Dasboard'
import BlogDetails from './Pages/BlogDetails'
import AddBlog from './Pages/AddBlogs'
import UpdateBlog from './Pages/UpdateBlog'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/:ID' element={<BlogDetails />}></Route>
        <Route path='/create' element={<AddBlog />}></Route>
        <Route path='/update/:ID' element={<UpdateBlog />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
