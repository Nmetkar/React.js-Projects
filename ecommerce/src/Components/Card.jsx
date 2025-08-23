import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../Context/CardContext.jsx";

const Card = ({ product }) => {
  const { dispatch } = useContext(CardContext);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.discount > 0 ? product.discountedPrice : product.price,
        image: product.image,
        quantity: 1,
      },
    });
  };

  return (
    <div
      className="card shadow-sm rounded-4 m-4"
      style={{ width: "18rem", height: "450px" }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body hoverEffectAll d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text text-muted mb-1">{product.description}</p>

          {product.discount > 0 ? (
            <p>
              Price: ₹
              <del className="redFont">{product.price}</del>
              <span className="ps-2 fw-bold">₹{product.discountedPrice}</span>
            </p>
          ) : (
            <p>Price: ₹{product.price}</p>
          )}
        </div>

        <div className="d-flex gap-3 mt-3">
          <Link to={`/dashboard/${product.id}`} className="btn btn-info">
            View More
          </Link>
          <button className="btn btn-gradient flex-grow-1" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
