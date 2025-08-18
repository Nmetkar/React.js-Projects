import React, { useEffect } from 'react'

function WelcomeGreetings({ name }) {

        const msg = `Hi ${name}!`;

        useEffect(() => {
           document.title = `Welcome to your ${name}`;
        },[name]);

  return (
    <div>{msg}</div>
  )
}

export default WelcomeGreetings