import { useState } from 'react'
import './App.css'
//import  Flower from './components/Flower'
//import Greeting from "./components/Greeting"
//import Navbar from './components/Navbar'
//import Product from './components/Navbar'
// import Counter  from './components/Counter'
//import Vegetables from './components/Vegetables'
//import ChangeHeading from './components/ChangeHeading'
//import Calculator from './components/Calculator'
//import ContactFrom from './components/ContactFrom/ContactFrom'
import ContactDetails from './components/ContactDetailsForm/ContactDetails'
import CounterWithReducer from './components/CounterWithReducer'
import CounterComponent from './countReducer/CounterComponent'


function App() {
    const [isLoggedIn, setIsLoggedIn] =useState(true)
    const [user, setUser] = useState('Neha')
  return (
    <>
    
    {/* <ContactFrom /> */}
    <ContactDetails />
    {/* <Flower /> */}
    {/* <Vegetables /> */}
    {/* <Counter /> */}
    {/*<Greeting studName="Neha" marks={93}/>*/}
     {/* <Navbar /> */}
    {/* <Product /> 
    // <ChangeHeading /> */}
     {/* <Calculator /> */}
     <CounterWithReducer />
     <CounterComponent />

    {/* conditional rendering by using elements */}
    {isLoggedIn ? (<h1 className="redFont">User Logged In</h1> ) : (<h1 className="greenFont">Please Login </h1>)}
    <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

      {/* by using className */}
    <h1 className={`${isLoggedIn ? 'purpleBlock' : 'yellowBlock'}`}>Best Style In Focus</h1>

      {/* by using && operator for only true condition */}
    <h1>{isLoggedIn && <span>{user}</span>}</h1>
    </>
  )
}

export default App
