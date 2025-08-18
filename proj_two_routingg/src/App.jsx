import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import NavbarMain from './Components/NavbarMain'
import LogOut from './Components/LogOut';
function App() {

  return (
    <>
    <Router>
      <div className="d-flex">
        <NavbarMain />
        <div className="p-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<LogOut />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
