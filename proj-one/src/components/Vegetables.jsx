import React, { useState } from 'react'
import vegiesData from '../../vegiesData'

const Vegetables = () => {
    const [vegies, setVegies] = useState(['karela', 'Turai','Kaddu'])
    console.log(vegiesData);
  return (
    <div>
        <table>
            <thead>
                <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Price</th>
                <th>Available</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vegiesData.map((V, index)=>(
                        <tr>{index+1}
                        <td>{V.name}</td>
                        <td>₹{V.price}</td>
                        <td>{V.quantity < 0 ? (<p>In Stock</p>) : (<p>Out Of Stock</p>)}</td>
                        <td><button img src = {V.image} style={{width:'100px', height:'100px'}}></button></td>
                        </tr>
                ))}
            </tbody>
        </table>
        <ul>
            {vegies.map((veg,index)=>(
                <li keys={index}>{veg}</li>
            ))}
        </ul>
    </div>
  )
}
export default Vegetables