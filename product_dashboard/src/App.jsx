import { useState } from 'react'
import './App.css'
//import ProductInfo from './Components/ProductInfo'
import Dashborad from './Components/Dashborad'
import AppNavbar from './Components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
      <AppNavbar />
       <Dashborad />
       {/* <ProductInfo /> */}
        
    </>
  )
}

export default App
