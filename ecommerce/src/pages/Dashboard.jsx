import React, { useState } from "react";
import Card from "../Components/Card.jsx";
import Navbar from "../Components/Navbar.jsx";

const Dashboard = ({ products }) => {
  const [productsState] = useState(products); // no need for setProductsState unless you filter later

  // Get unique categories
  const categories = [...new Set(productsState.map((p) => p.category))];

  return (
    <>
      <Navbar />

      {/* Categories */}
      <div className="container mt-4">
        <div className="row g-3">
          {categories.map((category, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="badge bg-secondary hoverEffectAll w-100 py-2 fs-6 fw-semibold text-center rounded-pill">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="container mt-4">
        <div className="row">
          {productsState.map((product, i) => (
            <div className="col-12 col-md-6 col-lg-4 p-3" key={i}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
