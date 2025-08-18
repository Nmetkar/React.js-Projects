import React, { useState } from 'react'

 const Calculator = () => {
        const [result, setResult] = useState('0')
        const [n1, setN1] = useState()
        const [n2, setN2] = useState()

    function addition(){
        setResult(Number(n1)+Number(n2))
    }
    function subtract(){
        setResult(Number(n1)-Number(n2))
    }
    function multiply(){
        setResult(Number(n1)*Number(n2))
    }
    function divide(){
        if(n2==0){
            setResult("can't divide by Zero")
        }else{
        setResult(Number(n1)/Number(n2))
        }
    }
  return (
    <div className='contanier w-50 mx-auto p-5'>
        <input type='number' onChange={(e)=>setN1(e.target.value)}/>
        <input type='number'onChange={(e)=>setN2(e.target.value)}/>
        <div>{result}</div>
        <button onClick={addition}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
    </div>
  )
}
export default Calculator