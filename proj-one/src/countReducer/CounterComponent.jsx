
import React, {useReducer} from 'react'
import {initialstate,reducer} from './countReducer.js';

const counterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
        <hr>
        <h2>Counter</h2>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type:'increament'})}>Increament</button>
        <button onClick={() => dispatch({type:'decreament'})}>Decreament</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </hr>
    </div>
  )
}

export default counterComponent