
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
    <div>
        <h1>COUNT: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      </div>
  )
}

export default Counter