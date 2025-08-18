import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';


const Dashborad = () => {
    const [productsState, setProductsState] = useState([]);

    async function fetchData(){
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
        console.log(response.data)
        setProductsState(response.data)
    }

    useEffect(() => {
        fetchData()
    },[]);

    
  return (
    <div>
        <div className="container mt-4">
                <div className="row g-3">
                    {productsState.map((product, index) => (
                        <div className="col-6 col-md-3" key={index}>
                            <div className="badge bg-secondary hoverEffectAll w-100 py-2 fs-6 fw-semibold text-center rounded-pill">
                                {product.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    {productsState.map((product, i) => (
                        <div className="col-12 col-md-6 col-lg-4 p-3"
                            key={i}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Dashborad