import React from 'react'

const NameInput = ({inputType, onchange,value}) => {
  return (
    <div>
        <input type={inputType} placeholder='Add Your Name Here' 
        value={value}
        onChange={(e)=>onchange(e.target.value)}/>
    </div>
  )
}

export default NameInput