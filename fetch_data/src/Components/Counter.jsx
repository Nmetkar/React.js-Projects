
import React, {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0) 
    
        useEffect (()=>{
            const timer = setInterval(()=>{
              console.log("print after every sec")
            }, 1000);

            console.log("count updated")

            return() =>{
              clearInterval(timer)
              console.log('clear')
            }
        }, [count])

  return (
    <div className='text-center mx-auto p-5 w-25'>
        <h1>COUNT: {count}</h1>
        <div className='text-center d-flex justify-content-between'>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
      </div>
  )
}

export default Counter