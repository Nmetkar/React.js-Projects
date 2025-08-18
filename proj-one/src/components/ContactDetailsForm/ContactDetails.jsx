import React, { useState } from 'react'

const ContactDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message:"",
    })

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({...formData, [name]: value});
};

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted", formData);
    setFormData({name: "", email: "", message: ""});
}
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center text-primary mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} style={{maxWidth: "400px", margin: "auto" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
        <input 
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
        />
    </div>
     <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
        <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
             placeholder="Enter your email"
        />
    </div>
     <div className="mb-3">
        <textarea
            name="message"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your message"
        />
     </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails