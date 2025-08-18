import React from 'react'

const SubjectInput = ({inputType, onchange, value}) => {
  return (
    <div>
        <input type={inputType} placeholder='Add Your Subject'
        value={value}
        onChange={(e)=>onchange(e.target.value)}/>
    </div>
  )
}

export default SubjectInput