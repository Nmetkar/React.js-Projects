import React, { useState } from 'react'
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import SubjectInput from './SubjectInput';
import MessageInput from './MessageInput';
import SendMessage from './SendMessage';
import './ContactForm.css'

const ContactFrom = () => {
      const [name, setName] = useState()
      const [email, setEmail] = useState()
      const [subject, setSubject] = useState()
      const [message, setMessage] = useState()

  function clearForm(){
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
      
  function validateForm(){
      console.log(name);
      if(!name || !name.trim()){
        alert('name required')
        return false
      }
      return true
  }

  function handleContactForm(event){
      event.preventDefault()
      console.log(name)
      if(!validateForm()) return;
      const payload = {name, email, subject, message}
      console.log(payload)
      localStorage.setItem('ContactForm', JSON.stringify(payload))
      clearForm()
      alert('Form submit')
  }

  return (
    <div className='contactContainer'>
        <form className='formContainer'onSubmit={handleContactForm}>
          <NameInput inputType ='text' onchange={setName} value={name}/>
          <EmailInput inputType = 'email' onchange={setEmail} value={email}/>
          <SubjectInput inputType = 'text' onchange={setSubject}  value={subject}/>
          <MessageInput onchange={setMessage} value={message}/>
          <SendMessage inputType = 'submit' />
        </form>
    </div>
  )
}

export default ContactFrom;