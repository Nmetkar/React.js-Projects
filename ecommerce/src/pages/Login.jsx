
import React, { useEffect, useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {loggedUser, login} = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    try{
      const msg = login(email, password);
      if(msg){
        alert(msg);
        navigate("/dashboard");
      }else{
        alert("Invalid Credientials");
        navigate('/');
      }
    }catch(error){
      console.log(error);
    }
  }

  console.log(loggedUser, "in login page");

 return (
    <div>
      <div
        className="container mx-auto border shadow rounded-3 p-3"
        style={{
          marginTop: '90px',
          width: '400px',
          background:
            'linear-gradient(57deg,rgba(235, 54, 204, 1) 0%, rgba(252, 103, 70, 1) 100%)',
        }}
      >
        <form onSubmit={handleLogin}>
          <h1 className="text-center p-4">Login</h1>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              autoComplete="username"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
             </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
           {/* Checkbox */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              name="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
           <button type="submit" className="btn btn-info mx-auto d-block my-3">
            Login
          </button>
          <Link to="/register">If Not Regsitered</Link>
        </form>
      </div>
    </div>
  );
};

export default Login