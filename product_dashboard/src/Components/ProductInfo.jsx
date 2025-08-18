import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ProductInfo = () => {
    const [product, setProduct] = useState()

    async function fetchData(){
        try{
            const response = await axios.get(
                'https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts'
            );
            setProduct(response.data[0]);
        }catch(error){
            console.log(error);
        }
    }
       
useEffect(() => {
    fetchData()
},[])


  return (
        <div className="container my-5">
  {product ? (
    <div className="card shadow-lg border-0">
      <div className="row g-0 align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6">
          <div className="p-4 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="col-md-6">
          <div className="p-4">
            <h1 className="display-6 fw-bold mb-2">{product.name}</h1>
            <p className="text-muted fs-5 mb-3">{product.category}</p>
            <p className="lead mb-4">{product.description}</p>

            <div className="mb-3">
              <span className="fs-3 text-danger fw-semibold">
                ₹{product.discountedPrice}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-muted text-decoration-line-through ms-3 fs-5">
                    ₹{product.price}
                  </span>
                  <span className="badge bg-danger ms-2">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            <div className="mb-4">
              <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
                ⭐ {product.rating}%
              </span>
            </div>
            <div className="d-flex gap-4">
            <button className="btn btn-success btn-lg ">
              <i className="bi bi-cart-plus me-2"></i>Add to Cart
            </button>
            <button className="btn btn-warning btn-lg">
              <i className="bi bi-cart-plus me-2"></i>Buy Now
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-5">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3">Loading product details...</p>
    </div>
  )}
</div>
  )
}

export default ProductInfo