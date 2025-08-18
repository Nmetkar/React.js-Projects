import React from 'react'

const EmailInput = ({inputType, onchange, value}) => {
  return (
    <div>

        <input type={inputType} placeholder='Add Your Email'
        value={value}
        onChange={(e)=>onchange(e.target.value)}/>
    </div>
  )
}

export default EmailInput