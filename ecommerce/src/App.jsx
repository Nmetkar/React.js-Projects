
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import  Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import products from "../data.js"
import ProductInfo from './pages/ProductInfo'
import Footer from './Components/Footer'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {AuthProvider} from './Context/AuthProvider'
import { ThemeProvider } from './Context/ThemeProvider';
import { CardProvider } from "./Context/CardContext.jsx";
import AddToCard from './Components/AddToCart.jsx'

function App() {
    const [isRegistered, setIsRegister] = useState(false)

  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
      <AuthProvider>
      <CardProvider>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register setIsRegister={setIsRegister}/>}></Route>
        <Route path='/dashboard' element={<Dashboard  products={products}/>}></Route>
        <Route path='/dashboard/:ID/*' element={<ProductInfo />}></Route>
         <Route path='/cart' element={<AddToCard />}></Route>
      </Routes>
      </CardProvider>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
      </ThemeProvider>

    {/* {isRegister ? (<Login />) : (<Register />)}    

    < Dashboard products={products} /> */}
     </>
  )
}

export default App
