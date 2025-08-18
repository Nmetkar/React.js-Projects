import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import products from '../../data.js';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { ID } = useParams();

  useEffect(() => {
    const index = products.findIndex((p) => p.id == ID);
    if (index === -1) {
      console.log('Product Not Found');
    } else {
      setProduct(products[index]);
    }
  }, [ID]);

  return (
    <>
      <div className="container my-5">
        {product ? (
          <div className="card shadow-lg border-0">
            <div className="row g-0 align-items-center">
              {/* Left - Product Image */}
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

              {/* Right - Product Info */}
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
                    <span className="badge bg-success fs-6 px-3 py-2 rounded-pill">
                      ⭐ {product.rating}%
                    </span>
                  </div>

                  {/* First line: Cart and Buy Now */}
                  <div className="d-flex flex-wrap gap-3 mb-3">
                    <button className="btn btn-gradient btn-lg">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-dark btn-lg">
                      <i className="bi bi-lightning me-2"></i>Buy Now
                    </button>
                  </div>

                  {/* Second line: Likes and Reviews */}
                  <div className="d-flex flex-wrap gap-4 py-3 ">
                    <Link to="likes" className="btn rounded-pill px-4" style={{backgroundColor: 'orange'}}>
                      Likes
                    </Link>
                    <Link to="reviews" className="btn rounded-pill px-4" style={{backgroundColor: 'yellow'}}>
                      Reviews
                    </Link>
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

      {/* Nested routes: Likes and Reviews */}
      <div className="container mb-5">
        <Routes>
          <Route path="likes" element={<Likes />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  );
};

// Likes Component
function Likes() {
  return (
    <div className="card bg-dark text-white  shadow-lg border-0 p-4 mb-4">
      <h4 className="mb-3 text-primary">User Likes</h4>
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-hand-thumbs-up-fill fs-3 text-success"></i>
        <span className="fs-5">This product has received a lot of likes! ⭐⭐⭐⭐</span>
      </div>
    </div>
  );
}

// Reviews Component
function Reviews() {
  return (
    <div className="card bg-dark text-white shadow-lg border-0 p-4">
      <h4 className="mb-4 text-secondary">User Reviews</h4>

      {/* Review 1 */}
      <div className="mb-3 border-bottom pb-3">
        <h6 className="fw-bold">John Doe</h6>
        <p className="mb-1 text-muted">Posted on: Aug 1, 2025</p>
        <p className="lead mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product is awesome!
        </p>
      </div>

      {/* Review 2 */}
      <div className="mb-3 border-bottom pb-3">
        <h6 className="fw-bold">Jane Smith</h6>
        <p className="mb-1 text-muted">Posted on: July 30, 2025</p>
        <p className="lead mb-0">
          Good value for money. Packaging and delivery were excellent.
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
