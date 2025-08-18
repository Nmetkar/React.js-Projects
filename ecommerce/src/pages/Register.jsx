import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({setIsRegister}) => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleRegister(event) {
        event.preventDefault()
        const payload = {
            name: name,
            email: email,
            password: password,
        }
        console.log(payload, "payload")
        localStorage.setItem('user', JSON.stringify(payload))
        setIsRegister(true)
        navigate('/')
    }

   return (
       <div className='registerbgcolor'>
      <div
        className="container mx-auto border shadow rounded-3"
        style={{
          marginTop: '60px',
          width: '400px',
          backgroundColor: 'rgba(249, 230, 235, 1)',
        }}
      >
        <form onSubmit={handleRegister}>
    
          <h1 className="text-center p-4">Register Form</h1>

          <div className="mb-3">
            <label className="form-label" htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              id="username1"
              name="username"
              autoComplete="username"
              placeholder="Enter your name"
              onChange={(e) => setUsername(e.target.value)}
               />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email1"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
           <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password"
              autoComplete="new-password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
           <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember1" />
            <label className="form-check-label" htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn btn-info btn-lg mx-auto d-block my-3">
            Register
          </button>
          <Link to='/'>Already registered</Link>
        </form>
      </div>
   </div>
  );
};     
export default Register