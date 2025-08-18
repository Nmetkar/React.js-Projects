import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleIncrement(){
        setCount(count+1)
    }
    
    function handleDecrement(){
        setCount(count-1)
    }
  return (
    <div className='contanier w-50 p-5 mx-auto' style={{backgroundColor: 'greenyellow', height: '300px'}}>
      <div className='contanier p-2 text-center fw-bold fs-5'>
      Count: {count}
      </div>
      <div className=' mx-auto d-block p-3'>
      <button style={{ marginRight: '10px' }} onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={handleIncrement}>Increment By Function</button>
      </div>

      <div className=' mx-auto d-block p-3'>
      <button style={{ marginRight: '10px' }} onClick={()=> setCount(count-1)}>Decrement</button>
      <button onClick={handleDecrement}>Decrement By Function</button>
      </div>
    </div>
  )
}

export default Counter
