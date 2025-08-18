import React from 'react'

const Card = ({product}) => {
  return (
        <>
            <div className="card shadow-sm rounded-4 m-4" style={{ width: "18rem", height: "450px" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body hoverEffectAll">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text text-muted mb-1">{product.description}</p>
                    {product.discount > 0 ? (
                        <p>
                            price :₹<del className="redFont">{product.price}</del>
                            <span className="ps-3">₹{product.discountedPrice}</span>
                        </p>
                    ) : (
                        <p>price :₹{product.price}</p>
                    )}
                    <div class="d-flex gap-4">
                        <a href="#" className="btn btn-info">View More</a>
                        <button className="btn btn-warning mx-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Card