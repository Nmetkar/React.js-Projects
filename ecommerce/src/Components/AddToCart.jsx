import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";

const AddToCart = () => {
  const { state, dispatch } = useContext(CardContext);

  // Helper: calculate discounted price
  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>

      {state.cart.length === 0 ? (
        <p>No products in cart</p>
      ) : (
        <div className="row">
          {state.cart.map((product, index) => {
            const discountedPrice = getDiscountedPrice(
              Number(product.price),
              Number(product.discount || 0)
            );

            return (
              <div className="col-12 col-md-6 col-lg-4 p-3" key={index}>
                <div className="card shadow-sm p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>{product.name}</h5>
                    <h6 className="text-muted">{product.category}</h6>
                    <p>₹{product.price}</p>
                    <p>
                      Discounted Price:{" "}
                      <strong>₹{discountedPrice.toFixed(2)}</strong>
                    </p>

                    {/* 🛑 Remove from cart button */}
                    <button
                      className="btn btn-danger mt-2 w-100"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ✅ Fixed Total */}
      <h4 className="mt-4">
        Total: ₹
        {state.cart
          .reduce(
            (acc, product) =>
              acc +
              getDiscountedPrice(Number(product.price), Number(product.discount || 0)) *
                (product.qty || 1),
            0
          )
          .toFixed(2)}
      </h4>
    </div>
  );
};

export default AddToCart;
