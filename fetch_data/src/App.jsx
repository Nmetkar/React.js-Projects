import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import WelcomeGreetings from './Components/DocumentTitle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard/Dashboard';

function App() {
  

  return (
    <>
      <WelcomeGreetings name = 'Neha' />
      <Counter />
      <Dashboard />
      
       
    </>
  )
}

export default App
