import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
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
                    <div className="d-flex gap-4">
                        <Link to={`/dashboard/${product.id}`} className="btn btn-info">View More</Link>
                        <button className="btn btn-gradient mx-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
